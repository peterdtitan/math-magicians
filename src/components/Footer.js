import React from 'react';
import { AiFillLinkedin, AiFillTwitterSquare, AiFillGithub } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className="flex flex-col text-xs md:text-base md:flex-row items-center justify-center bg-orange-500 gap-10 fixed bottom-0 w-screen h-10 font-montserrat">
      <p>
        Made with love by
        <span className="text-white font-medium italic bg-slate-900 rounded-lg p-2 ml-2"> Peter Okorafor</span>
      </p>
      <div className="hidden md:flex justify-evenly items-center">
        <a href="https://linkedin.com/in/peterokorafor" target="_blank" rel="noreferrer" aria-label="connect-linkedin"><AiFillLinkedin size={25} className="text-white rounded-xl" /></a>
        <a href="https://twitter.com/PeterDeTitan" target="_blank" rel="noreferrer" aria-label="connect-twitter"><AiFillTwitterSquare size={25} className="text-white rounded-xl" /></a>
        <a href="https://github.com/peterdtitan" target="_blank" rel="noreferrer" aria-label="connect-github"><AiFillGithub size={25} className="text-white rounded-xl" /></a>
      </div>
    </footer>
  );
}
