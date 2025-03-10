"use client";

import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Link from "next/link";
import projectData from "@/data/projectData";

export const Main = () => {
  
    return (
        <>
        {/* Main Section */}
            <main className="w-full flex flex-col gap-y-8 items-center h-fit min-h-screen bg-gray-50 relative">
                <Intro />
                <Header />
                <About />
                <Project />
                <Contact />
            </main>
            <Footer/>
        </>
    )
  }
  
export default Main

export const Intro = ()=>{
    const text = "CHO JI HYEON";
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = 100; // 타이핑 속도
    const deletingSpeed = 50; // 삭제 속도
    const pauseTime = 5000; // 텍스트 유지 시간
  
    useEffect(() => {
      let timeout: NodeJS.Timeout;
  
      if (!isDeleting && displayText.length < text.length) {
        // 타이핑 중
        timeout = setTimeout(() => {
          setDisplayText((prev) => text.slice(0, prev.length + 1));
        }, typingSpeed);
      } else if (!isDeleting && displayText.length === text.length) {
        // 타이핑 완료 후 일정 시간 유지
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      } else if (isDeleting && displayText.length > 0) {
        // 삭제 중
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, deletingSpeed);
      } else if (isDeleting && displayText.length === 0) {
        // 모든 글자 삭제 후 다시 타이핑 시작
        setIsDeleting(false);
      }
  
      return () => clearTimeout(timeout);
    }, [displayText, isDeleting]);

    return(
        <section className="w-full h-screen  px-5 py-40 mx-auto flex flex-col justify-center items-center bg-[#083459]">
            <article className="w-full max-w-[1320px] relative flex flex-col gap-y-4 items-center">
                <h2 className="text-3xl lg:text-7xl pc:text-9xl font-black text-center text-center text-[#F5DDB0]">
                     {displayText}
                </h2>
            </article>
        </section>
    )
}

export const Header = () => {

    return(
        <section className="w-full h-16 sticky top-0 flex justify-center backdrop-blur-lg">
            <article className="w-full h-full flex gap-x-5 items-center max-w-[1320px] px-5 text-t-1 text-[#083459]">
                <Link href={'#about'}>About</Link>
                <Link href={'#project'}>Project</Link>
                <Link href={'#contact'}>Contact</Link>
            </article>   
        </section>

    )
}


export const About = () => {

    return(
        <section className="w-full h-fit flex justify-center" id="about">
            <article className="w-full max-w-[1320px] flex flex-col gap-y-6 px-5">
                <h2 className="text-xl lg:text-3xl pc:text-5xl font-semibold text-[#083459] mb-2 text-center">About</h2>
                <div className="w-full">
                    <h2 className="w-fit text-xl pc:text-3xl font-semibold text-[#083459] mb-2 bg-[#F5DDB0]">Profile</h2>
                    <div className="flex flex-col pc:flex-row gap-4">
                        <div>
                                {/* 자기 소개 */}
                                1
                        </div>
                        <div>
                                {/* 스킬 */}
                                2
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="w-fit text-xl pc:text-3xl font-semibold text-[#083459] mb-2 bg-[#F5DDB0]">Skills</h2>
                    <div className="flex flex-col pc:flex-row gap-4">
                        <div>
                                {/* 자기 소개 */}
                                1
                        </div>
                        <div>
                                {/* 스킬 */}
                                2
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export const Project = () => {

    return(
        <section className="w-full h-fit flex justify-center" id="project">
            <article className="w-full max-w-[1320px] px-5 flex flex-col gap-y-6">
                <h2 className="text-xl lg:text-3xl pc:text-5xl font-semibold text-[#083459] mb-2 text-center">Project</h2>
                <div className="flex flex-col pc:grid pc:grid-cols-3 gap-4">
                    {projectData.map((project, index) => (
                        <div key={index}>
                        {/* 프로젝트 정보 출력 */}
                        <h2>{project.title}</h2>
                        {/* <p>{project.description}</p> */}
                        {/* 필요에 따라 추가적인 정보도 렌더링 */}
                        </div>
                    ))}
                </div>
            </article>
        </section>
    )
}

export const Contact = () => {

    return(
        <section className="w-full h-fit flex justify-center bg-[#F5DDB0]" id="contact">
            <article className="w-full max-w-[1320px] py-12 pc:py-16 px-5 items-center flex flex-col">
                <h2 className="text-xl lg:text-3xl pc:text-5xl font-semibold text-[#083459] mb-2 text-center">THANK YOU</h2>
                <p className="text-base lg:text-xl lg:text-xl font-semibold text-[#083459] text-center mb-8">더 궁금한 점이 있다면 언제든지 연락주세요</p>
                <div className="w-full max-w-[520px] bg-white p-6 rounded-lg shadow-lg flex flex-col items-center gap-y-4">
                    <div className="w-36 aspect-square bg-gray-50 rounded-full overflow-hidden"></div>
                    <div className="flex flex-col gap-y-2 text-[#083459] font-semibold">
                        <div>
                            <span>Github : </span>
                            <Link href={`https://github.com/chochojj`} className="hover:text-[#93C6D3] transition-colors duration-300">github.com/chochojj</Link>
                        </div>
                        <div>
                            <span>Phone : </span>
                            <Link href={`tel:010-6522-4733`} className="hover:text-[#93C6D3] transition-colors duration-300">010-6522-4733</Link>
                        </div>
                        <div>
                            <span>E-mail : </span>
                            <Link href={`mailto:csgy114@gmail.com`} className="hover:text-[#93C6D3] transition-colors duration-300">csgy114@gmail.com</Link>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}