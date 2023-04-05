import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="bg-orange-500 text-slate-900 flex md:justify-between items-center p-2 md:p-8 h-16 md:h-24 font-montserrat w-full">
      <h1 className="text-sm md:text-3xl bg-slate-800 p-2 rounded-lg text-white md:tracking-widest">Math Magicians</h1>
      <div className="flex gap-1 md:gap-4 ml-4 md:ml-0 text-xs md:text-xl font-medium">
        <Link to="/">Home |</Link>
        <Link to="/calculator">Calculator |</Link>
        <Link to="/quotes">Quotes</Link>
      </div>
    </div>
  );
}
