import React from "react";
import "@/styles/slick-theme.css";
import "@/styles/slick.css";
import "./globals.css";
import Loading from "./loading";


export const metadata = {
  metadataBase: '',
  title: '프론트엔드 조지현 - 포트폴리오',
  description: '프론트엔드 개발자 조지현의 포트폴리오 입니다',
  keywords: '웹 개발, 프론트엔드, 웹앱, 반응형 웹 개발자',
  openGraph: {
    title: '프론트엔드 조지현 - 포트폴리오',
    description: '프론트엔드 개발자 조지현의 포트폴리오 입니다',
    keywords: '웹 개발, 프론트엔드, 웹앱, 반응형 웹 개발자',
    images: '',
    url: ''
  },
};



export default function RootLayout({ children, }: { children: React.ReactNode; }) {

  // console.log(cookies().get('LOGIN'));

  return (
    <html lang="ko">
      <body className="">
        {children}
      </body>
    </html>
  );
}