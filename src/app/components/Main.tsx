"use client";

import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Link from "next/link";
import Image from 'next/image'
import projectData from "@/data/projectData";

export const Main = () => {
  
    return (
        <>
        {/* Main Section */}
            <main className="w-full flex flex-col items-center h-fit min-h-screen bg-gray-50 relative">
                <Intro />
                <Header />
                <section className="w-full h-fit flex flex-col gap-y-8 items-center">
                    <About />
                    <Project />
                    <Contact />
                </section>
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
                <h2 className="text-3xl lg:text-7xl pc:text-9xl font-black text-center text-[#F5DDB0]">
                     {displayText}
                </h2>
            </article>
        </section>
    )
}

export const Header = () => {

    return(
        <section className="w-full h-12 pc:h-16 sticky top-0 flex justify-center backdrop-blur-lg z-30">
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
                <h2 className="text-xl lg:text-3xl pc:text-5xl font-semibold text-[#083459] mb-2 lg:mb-4 pc:mb-8 text-center">About</h2>
                <div className="flex flex-col pc:flex-row gap-4 pc:gap-6 relative">
                    <div className="w-full flex flex-col gap-y-2 pc:gap-y-4">
                        <h2 className="w-fit h-fit text-xl pc:text-3xl font-semibold text-[#083459] bg-[#F5DDB0]">Profile</h2>
                        <div className="flex gap-x-4 items-end">
                            <div className="w-[100px] pc:w-[150px] aspect-[3/4] shrink-0">
                                <Image src={`/assets/images/profile.jpg`} className="w-full h-full object-contain rounded-3xl overflow-hidden" width={150} height={190} alt=''/>
                            </div>
                            <div className="w-full">
                                <div className="flex flex-col justify-end gap-1">
                                    <p className="text-h-2 pc:text-h-1">조지현</p>
                                    <span className="w-fit text-c-3 rounded py-[2px] px-1 bg-[#93C6D3]/40">Frontend-Devloper</span>
                                    <p className="text-b-2 pc:text-b-1 font-bold block pc:hidden">
                                        안녕하세요. 사용자 경험을 최우선으로 생각하며 직관적인 UI를 구현하는 프론트엔드 개발자입니다.<br/>
                                        다양한 기기와 브라우저에서 원활한 사용자 경험을 제공하는 데 집중하고 있습니다
                                    </p>
                                    <p className="text-b-2 text-base font-bold hidden pc:block">
                                        안녕하세요. 사용자 경험을 최우선으로 생각하며<br/> 직관적인 UI를 구현하는 프론트엔드 개발자입니다.<br/>
                                        다양한 기기와 브라우저에서 원활한 사용자 경험을 <br/> 제공하는 데 집중하고 있습니다
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2 pc:gap-y-4">
                           <div className="flex flex-col gap-y-1 pc:gap-y-2">
                                <h3 className="text-b-1 pc:text-t-1">[사용자 중심의 UI/UX]</h3>
                                <span className="text-b-2 pc:text-b-1">
                                    직관적인 디자인과 효율적인 인터랙션을 고려하여 개발합니다. 코드 스플리팅, 이미지 최적화 등 다양한 기법을 활용해 성능을 개선하고, 다양한 디바이스와 브라우저에서도 일관된 UI를 유지하도록 설계합니다.
                                    작은 디테일까지 신경 써 사용자가 만족할 수 있는 서비스를 만들고자 합니다.
                                </span>
                           </div>
                           <div className="flex flex-col gap-y-1 pc:gap-y-2">
                                <h3 className="text-b-1 pc:text-t-1">[원활한 협업과 소통]</h3>
                                <span className="text-b-2 pc:text-b-1">
                                    디자이너, 백엔드 개발자와 긴밀하게 협력하여 프로젝트를 진행합니다. 문제 해결을 위해 명확한 커뮤니케이션과 적극적인 피드백을 주고받으며 코드 리뷰와 문서화를 통해 효율적인 협업 환경을 조성하기 위해 노력합니다. 팀워크를 중시하며, 함께 성장하는 문화를 만들어가는 데 기여합니다.
                                </span>
                           </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-y-4 pc:gap-y-6">
                        <div>                
                            <h2 className="w-fit text-xl pc:text-3xl font-semibold text-[#083459] mb-2 pc:mb-4 bg-[#F5DDB0]">Skills</h2>
                            <div className="w-full h-fit border-b border-[#93C6D3] pb-4 pt-1 flex flex-wrap gap-2 text-sm pc:text-base font-blod">
                                <span className="w-fit h-fit rounded-sm py-[2px] px-1 bg-[#93C6D3]/20">Next.js</span>
                                <span className="w-fit h-fit rounded-sm py-[2px] px-1 bg-[#93C6D3]/20">React.js</span>
                                <span className="w-fit h-fit rounded-sm py-[2px] px-1 bg-[#93C6D3]/20">HTML5</span>
                                <span className="w-fit h-fit rounded-sm py-[2px] px-1 bg-[#93C6D3]/20">CSS</span>
                                <span className="w-fit h-fit rounded-sm py-[2px] px-1 bg-[#93C6D3]/20">JavaScript</span>
                                <span className="w-fit h-fit rounded-sm py-[2px] px-1 bg-[#93C6D3]/20">TypeScript</span>
                                <span className="w-fit h-fit rounded-sm py-[2px] px-1 bg-[#93C6D3]/20">TailwindCSS</span>
                                <span className="w-fit h-fit rounded-sm py-[2px] px-1 bg-[#93C6D3]/20">Zustand</span>
                                <span className="w-fit h-fit rounded-sm py-[2px] px-1 bg-[#93C6D3]/20">styled components</span>
                                <span className="w-fit h-fit rounded-sm py-[2px] px-1 bg-[#93C6D3]/20">Mysql</span>
                                <span className="w-fit h-fit rounded-sm py-[2px] px-1 bg-[#93C6D3]/20">Git</span>
                                <span className="w-fit h-fit rounded-sm py-[2px] px-1 bg-[#93C6D3]/20">PHP</span>
                            </div>
                        </div>
                        <div>                
                            <h2 className="w-fit text-xl pc:text-3xl font-semibold text-[#083459] mb-2 pc:mb-4 bg-[#F5DDB0]">Education</h2>
                            <div className="w-full h-fit border-b border-[#93C6D3] pb-4 pt-1 flex flex-col">
                                        {/* 자기 소개 */}
                                        1
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export const Project = () => {

    return(
        <section className="w-full h-fit flex justify-center py-6 pc:py-12" id="project">
            <article className="w-full max-w-[1320px] px-5 flex flex-col gap-y-6">
                <h2 className="text-xl lg:text-3xl pc:text-5xl font-semibold text-[#083459] mb-2 lg:mb-4 pc:mb-8 text-center">Project</h2>
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