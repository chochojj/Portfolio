import React from "react";
import Footer from "./Footer";

export const Main = () => {
  
    return (
        <>
        {/* Main Section */}
            <main className="w-full flex flex-col h-fit min-h-screen bg-gray-50 relative">
                <Intro />
                <section className="sticky top-0">
                    qwe
                </section>
                <section className="w-full h-screen">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">My Projects</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Example Project */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Project Title</h3>
                        <p className="text-gray-600">A brief description of the project goes here. It's a great project.</p>
                    </div>
                    {/* Add more project cards as needed */}
                    </div>
                </section>
                <section className="w-full h-screen">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Me</h2>
                    <p className="text-lg text-gray-600">Feel free to reach out if you'd like to collaborate or learn more about my work!</p>
                    <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
                    Get in Touch
                    </button>
                </section>
            </main>
            <Footer/>
        </>
    )
  }
  
export default Main

export const Intro = ()=>{
    return(
        <section className="w-full h-screen max-w-[1320px] px-5 py-40 mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Me</h2>
            <p className="text-lg text-gray-600">
                Hi, I'm a passionate frontend developer with a love for creating beautiful and functional web applications.
            </p>
        </section>
    )
}