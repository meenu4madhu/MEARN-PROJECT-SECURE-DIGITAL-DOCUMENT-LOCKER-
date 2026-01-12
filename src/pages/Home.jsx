import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Servicesection from '../components/Servicesection'
import Features from '../components/Features'
import Security from '../components/Security'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center
             bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-800 px-4">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-violet-700  mb-4" style={{textShadow:'2px 2px 4px indigo'}}>
  Secure Digital Document Locker
</h1>


           <p className="max-w-xl text-white mb-6 text-sm md:text-base">
              SecureDoc allows you to safely store, organize, and share your
              personal documents using strong AES-256 encryption and secure
              cloud storage.
            </p>

           <Link
  to="/register"
  className="bg-violet-700 text-white px-8 py-3 rounded-full
             hover:bg-indigo-700 transition"
>
    
              Get Started
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src="./landinglogo.png"
              alt="Secure Cloud"
              className="w-72 md:w-96 drop-shadow-2xl animate-pulse"
            />
          </div>
        </div>
      </section>

      <Servicesection />
      <Features />
      <Security />
      <Footer/>
    </>
    
  )
}

export default Home
