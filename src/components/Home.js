import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col text-white text-sm md:text-base font-montserrat mt-12 p-4 md:p-8">
      <h1 className="text-2xl md:text-4xl font-semibold underline underline-offset-8">Welcome to Our Page!</h1>
      <p className="mt-8">
        Welcome to the Math Magicians website. This is a simple app developed by
        {' '}
        <a href="https://github.com/microverseinc" target="_blank" rel="noreferrer" className="text-blue-400">Microverse </a>
        to help students understand the core concepts of React and how to use it to build
        beautiful interfaces. This app works with 3 simple pages.
      </p>
      <p className="mt-2">
        The first page is the current page (Home Page/index page) and the other two are
        individual components;
        one for quotes and another for a functional calculator
        app. The quotes also teaches an introduction to React Hooks while the Calculator is the main
        components for this web app.
      </p>
      <p className="mt-8">
        Have fun looking around, cheers!
      </p>
    </div>
  );
}
