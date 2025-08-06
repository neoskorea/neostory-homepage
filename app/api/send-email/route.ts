import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, budget, service, message } = body;

    // 필수 필드 검증
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: '필수 필드가 누락되었습니다.' },
        { status: 400 }
      );
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '올바른 이메일 형식을 입력해주세요.' },
        { status: 400 }
      );
    }

    // SMTP 설정
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, // 구글 앱 비밀번호
      },
    });

    // 이메일 내용 구성
    const emailContent = `
[네오스토리] 새로운 문의가 접수되었습니다.

■ 고객 정보
- 이름: ${name}
- 이메일: ${email}

■ 문의 내용
${message}

---
이 메일은 neos 홈페이지 문의 폼을 통해 자동으로 발송되었습니다.
    `.trim();

    // 이메일 발송
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_TO || 'contact@neostory.kr',
      subject: `[neostory 홈페이지] 새로운 문의 - ${name}님`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>'),
      // 회신용 이메일 설정
      replyTo: email,
    });

    console.log('Email sent:', info.messageId);

    return NextResponse.json(
      { message: '문의가 성공적으로 전송되었습니다.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    
    // 구체적인 에러 메시지 처리
    let errorMessage = '메일 전송 중 오류가 발생했습니다.';
    
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        errorMessage = 'SMTP 인증에 실패했습니다. 앱 비밀번호를 확인해주세요.';
      } else if (error.message.includes('ECONNREFUSED')) {
        errorMessage = 'SMTP 서버에 연결할 수 없습니다. 네트워크 설정을 확인해주세요.';
      }
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}