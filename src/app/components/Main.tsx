"use client";

import React, { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import Link from "next/link";
import Image from 'next/image'
import projectData from "@/data/projectData";
import { log } from "node:console";

export const Main = () => {
    const [isModal, setIsModal] = useState(null);


    return (
        <>
            {isModal?.id &&isModal?.id !=='' && <ProjectModal isModal={isModal} setIsModal={setIsModal}/>}
            <main className="w-full flex flex-col items-center h-fit min-h-screen bg-gray-50 relative">
                <Intro />
                <Header />
                <section className="w-full h-fit flex flex-col gap-y-8 items-center">
                    <About />
                    <Project setIsModal={setIsModal}/>
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
        <section className="w-full h-screen px-5 py-40 mx-auto flex flex-col justify-center items-center bg-[#083459]">
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
        <section className="w-full h-12 pc:h-16 sticky top-0 flex justify-center backdrop-blur-lg z-[100]">
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
                        <h2 className="w-fit h-fit text-xl pc:text-3xl font-semibold text-[#083459] bg-[#F5DDB0] mb-2 pc:mb-0">Profile</h2>
                        <div className="flex gap-x-4 items-end">
                            <div className="w-[100px] pc:w-[150px] aspect-[3/4] shrink-0 relative">
                                <div className="w-full h-full absolute top-[-8px] left-[-12px] bg-[#93C6D3] z-20"></div>
                                <Image src={`/assets/images/profile.jpg`} className="absolute top-0 left-0 z-40 w-full h-full object-contain overflow-hidden" width={150} height={190} alt=''/>
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
                                <h3 className="text-b-1 pc:text-t-1 font-semibold">[사용자 중심의 UI/UX]</h3>
                                <span className="text-b-2 pc:text-b-1">
                                    직관적인 디자인과 효율적인 인터랙션을 고려하여 개발합니다. 코드 스플리팅, 이미지 최적화 등 다양한 기법을 활용해 성능을 개선하고, 다양한 디바이스와 브라우저에서도 일관된 UI를 유지하도록 설계합니다.
                                    작은 디테일까지 신경 써 사용자가 만족할 수 있는 서비스를 만들고자 합니다.
                                </span>
                           </div>
                           <div className="flex flex-col gap-y-1 pc:gap-y-2">
                                <h3 className="text-b-1 pc:text-t-1 font-semibold">[원활한 협업과 소통]</h3>
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
                            <div className="w-full h-fit border-b border-[#93C6D3] pb-4 pt-1 flex flex-col gap-y-2 pc:gap-y-4">
                                <div className="">
                                    <h3 className="text-base pc:text-lg font-bold">코드스테이츠</h3>
                                    <span className="text-xs pc:text-sm text-[#083459]">2022.12 - 2023.06</span>
                                    <div className="text-sm pc:text-base">
                                        [프론트엔드 개발자 부트캠프]<br/>
                                        · JavaScript, React 및 styled components 학습<br/>
                                        · 페어 프로그래밍 및 팀 프로젝트 2회를 통한 협업 경험<br/>
                                        · 토이 프로젝트 스터디를 리드하며 클린 코드를 위한 습관 형성
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-base pc:text-lg font-bold">양정인력개발센터</h3>
                                    <span className="text-xs pc:text-sm text-[#083459]">2021.11 - 2022.04</span>
                                    <div className="text-sm pc:text-base">
                                        [UIUX웹디자인&웹퍼블리셔]<br/>
                                        · 기본적 웹 레이아웃과 그리드 개념 학습<br/>
                                        · HTML, jQuery, CSS를 통한 간단한 웹 만들기 실습
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-base pc:text-lg font-bold">부산대학교</h3>
                                    <span className="text-xs pc:text-sm text-[#083459]">2017.02 - 2022.02</span>
                                    <div className="text-sm pc:text-base">
                                        · 불어불문학과 학사 졸 / 심리학과 학사 복수 전공
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export const Project = ({setIsModal}) => {

    return(
        <section className="w-full h-fit flex justify-center py-6 pc:py-12" id="project">
            <article className="w-full max-w-[1320px] px-5 flex flex-col gap-y-6">
                <h2 className="text-xl lg:text-3xl pc:text-5xl font-semibold text-[#083459] mb-2 lg:mb-4 pc:mb-8 text-center">Project</h2>
                <div className="flex flex-col pc:grid pc:grid-cols-3 gap-4">
                    {projectData.map((project, index) => (
                        <div key={index} onClick={()=>setIsModal(project)} className="flex flex-col justify-between cursor-pointer rounded-md border border-[#93C6D3] bg-white p-4 hover:shadow-md transition-transform duration-200 hover:-translate-y-1 hover:-translate-x-1">
                            <div className="flex flex-col">
                                <h2 className="text-lg font-bold text-[#083459] cursor-pointer">
                                    {project.title}
                                </h2>
                                <span className="text-sm mb-2">기간 : {project.date} ({project.term})</span>
                                <div className="flex flex-wrap gap-1">
                                    {project.skill.map((el, index) => (
                                        <span className="text-sm rounded-sm bg-[#F5DDB0]/50 px-1" key={index}>{el}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full h-fit my-2 rounded-md overflow-hidden">
                                <Image src={`/assets/images/${project.id}.png`} className="w-full" width={400} height={200} alt={`${project.id}_이미지`}/>
                            </div>
                            <div className="w-full flex justify-end">
                                <span className="text-sm w-fit rounded-sm px-1 py-[2px] bg-[#93C6D3]/30">
                                    상세보기
                                </span>
                            </div>
                        </div>
                    ))}
                    <Link href={`https://github.com/chochojj`} className="group cursor-pointer rounded-md border flex flex-col justify-between border-[#083459] bg-[#083459] p-4 hover:shadow-md transition-transform duration-200 hover:-translate-y-1 hover:-translate-x-1">
                        <div className="flex flex-col">
                            <h2 className="w-fit relative text-lg font-bold text-white cursor-pointer">
                                더 많은 프로젝트를 위한 깃헙 보기
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                            </h2>
                        </div>
                        <div className="w-full h-fit flex flex-col items-center gap-y-4 py-3">
                        <div className="relative w-[160px] h-[160px]">
                            <div className="absolute inset-0 rounded-full border-4 border-[#F5DDB0] scale-0 transition-all duration-300 group-hover:scale-110"></div>
                                <div className="w-[160px] h-[160px] rounded-full bg-white overflow-hidden relative">
                                    <Image src="/assets/images/gom.png" className="w-full" width={200} height={200} alt="깃헙_프로필_이미지" />
                                </div>
                            </div>
                            <span className="text-[#F5DDB0] text-base font-bold">Username : @chochojj</span>
                        </div>
                        <div className="w-full flex justify-end">
                            <span className="text-sm w-fit text-white rounded-sm px-1 py-[2px] bg-[#93C6D3]/30 group-hover:bg-[#F5DDB0] group-hover:font-bold group-hover:text-[#083459]">
                                방문하기
                            </span>
                        </div>
                    </Link>
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
                <p className="text-base lg:text-xl font-semibold text-[#083459] text-center mb-8">더 궁금한 점이 있다면 언제든지 연락주세요</p>
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

export const ProjectModal = ({isModal,setIsModal}) => {
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                setIsModal(null)
            }
        };
        window.addEventListener('mousedown', handleClick);
        return () => window.removeEventListener('mousedown', handleClick);
    }, [modalRef, setIsModal]);
    
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    console.log(isModal);
    

    return(
       <section className="w-full h-full fixed top-0 left-0 bg-black/30 flex items-center justify-center z-[110]">  
            <article className="w-full max-w-[1090px] h-fit mx-5 bg-white p-5 rounded-lg relative" ref={modalRef}>
                <button type="button" className="w-6 h-6 absolute right-4 top-4" onClick={()=> setIsModal(null)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.4 18.9998L5 17.5998L10.6 11.9998L5 6.39979L6.4 4.99979L12 10.5998L17.6 4.99979L19 6.39979L13.4 11.9998L19 17.5998L17.6 18.9998L12 13.3998L6.4 18.9998Z" fill="#2A2A2A"/>
                    </svg>
                </button>
                <div className="w-full h-fit max-h-[calc(100dvh-80px)] overflow-y-scroll flex flex-col items-center ">
                    <h2 className="text-h-4 pc:text-h-2 text-gray-700">{isModal?.title}</h2>
                    <span className="text-sm pc:text-base text-[#083459]">기간 : {isModal?.date} ({isModal?.term})</span>
                    <div className="mt-4 w-full max-w-[620px] flex flex-col gap-y-4">
                        <div className="w-full h-fit rounded-md overflow-hidden">
                            <Image src={`/assets/images/${isModal?.id}.png`} className="w-full" width={600} height={400} alt={`${isModal?.id}_이미지`}/>
                        </div>
                        <div>
                            <p className="w-fit text-base pc:text-lg mb-1 font-medium text-[#083459]">사용 기술</p>
                            <div className="flex flex-wrap gap-1">
                                {isModal?.skill?.map((el, index) => (
                                    <span className="text-sm pc:text-base rounded-sm bg-[#F5DDB0]/40 px-1" key={index}>{el}</span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="w-fit text-base pc:text-lg mb-1 font-medium text-[#083459]">기능/역할</p>
                            <div className="flex flex-wrap gap-1">
                                {isModal?.role?.map((el, index) => (
                                    <span className="text-sm pc:text-base rounded-sm bg-[#93C6D3]/30 px-1" key={index}>{el}</span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="w-fit text-base pc:text-lg mb-1 font-medium text-[#083459]">상세 설명</p>
                            <span className="text-sm pc:text-base">{isModal?.content}</span>
                        </div>
                        <div>
                            <p className="w-fit text-base pc:text-lg mb-1 font-medium text-[#083459]">리뷰</p>
                            <span className="text-sm pc:text-base">{isModal?.review}</span>
                        </div>
                    </div>
                </div>
            </article>
       </section>
    )
}