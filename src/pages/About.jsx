import React from 'react';
import Rules from '../components/Rules';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center p-6 animate-fade-in">
            <div className="max-w-3xl w-full bg-white p-10 md:p-16 rounded-[2rem] shadow-2xl border border-gray-100">
                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-black uppercase mb-4">
                        About <span className="text-gray-400">Game</span>
                    </h1>
                    <div className="h-1.5 w-20 bg-black mx-auto rounded-full"></div>
                </div>

                <Rules />

                <div className="mt-12 text-center">
                    <Link
                        to="/"
                        className="group relative inline-block min-w-[200px] bg-black text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-widest border-2 border-black overflow-hidden transition-all duration-300 hover:bg-white hover:text-black shadow-lg"
                    >
                        <span className="relative z-10">Back to Home</span>
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
