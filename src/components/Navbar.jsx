 import logo from "../assets/kevinRushLogo.png"
import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram ,FaFacebook} from "react-icons/fa";
import { FaWhatsapp } from 'react-icons/fa';




export default function Navbar() {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
       <div className='flex flex-shrink-0 items-center'>
        {/* <img src={logo} alt="Logo"  /> */}
       <h1 className="font-bold text-6xl text-white tracking-widest">SP</h1>
       </div>
       <div className="m-8 flex text-lime-50 items-center justify-center gap-4 text-2xl">
    
        <a href="https://www.linkedin.com/in/sarthak-patwa-050b62270/?originalSubdomain=in">    <FaLinkedin/></a>
        <a href="https://github.com/sarthakp972"><FaGithub/></a>
        
        <a href="https://wa.me/7649062706"><FaWhatsapp/></a>
        <a href="https://www.instagram.com/sarthak__patwa"><FaInstagram/></a>
        <a href="https://www.facebook.com/sarthak.patwa.94"><FaFacebook/></a>
       
       

       </div>
    </nav>
  )
}
