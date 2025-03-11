import React from "react";
import "@/styles/slick-theme.css";
import "@/styles/slick.css";
import "./globals.css";
import Head from "next/head";

export const metadata = {
  metadataBase: '',
  title: '프론트엔드 조지현 - 포트폴리오',
  description: '프론트엔드 개발자 조지현의 포트폴리오 입니다',
  keywords: '웹 개발, 프론트엔드, 웹앱, 반응형 웹 개발자',
  icons: {
		icon: "/favicon.ico",
	},
  openGraph: {
    title: '프론트엔드 조지현 - 포트폴리오',
    description: '프론트엔드 개발자 조지현의 포트폴리오 입니다',
    keywords: '웹 개발, 프론트엔드, 웹앱, 반응형 웹 개발자',
    images: '',
    url: ''
  },
};



export default function RootLayout({ children, }: { children: React.ReactNode; }) {

  return (
    <html lang="kr">
       <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
      </Head>
      <body className="">
        {children}
      </body>
    </html>
  );
}