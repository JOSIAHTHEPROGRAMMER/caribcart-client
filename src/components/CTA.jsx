import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom';

const CTA = () => {
    const navigate = useNavigate();
    return (
        <section
            style={{ backgroundImage: `url(${assets.ctabg})` }}
            className="
        relative overflow-hidden
        flex flex-col items-center justify-center
        mx-auto max-md:mx-2 max-md:px-4
        max-w-5xl w-full text-center
        rounded-2xl py-20 md:py-24
        bg-cover bg-center bg-no-repeat mb-20
      "
        >
            {/* Glassy overlay */}
            <div className="
        absolute inset-0
        bg-linear-to-br from-teal-900/70 via-indigo-900/65 to-blue-900/70
        backdrop-blur-md
      " />

            {/* Soft glow accents */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-teal-400/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center px-4">
                <h1 className="text-2xl md:text-4xl font-semibold text-white max-w-2xl leading-tight">
                    Join Our Team
                    and Build the Future of Social Media
                </h1>

                <p className="text-sm md:text-base text-white/90 max-w-xl">
                    We're looking for talented, driven individuals to help shape a modern marketplace where creators and brands thrive. Come innovate with us!
                </p>


                <button
                    onClick={() => { navigate('/careers');scrollTo(0,0) }}

                    className="
                    px-10 py-3 mt-6 text-sm font-medium
                    bg-linear-to-r from-[#FF6B6B] via-amber-400 to-[#FFD93D]
                    hover:scale-105 hover:bg-linear-to-r hover:from-teal-400 hover:via-cyan-500 hover:to-blue-800
                    transition duration-300
                    text-white rounded-full
                    ">
                    Get Started
                </button>
            </div>
        </section>
    )
}

export default CTA
