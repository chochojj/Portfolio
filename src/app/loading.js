"use client";
import React from 'react';


export default function Loading() {
    return (
        <>
            <div className='min-h-screen w-full min-w-[300px] max-w-full bg-white/80 z-[99999] fixed flex items-center mx-auto pc:right-0 top-0 left-0'>
                <div className="loading">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </>
    );
}
