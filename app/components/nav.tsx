import React from 'react';

export default function Navbar() {
  return (
    <nav className=" bg-black p-4 flex justify-around items-center">
      <a href="/" className="text-white text-lg px-4 py-2 hover:bg-gray-700 rounded">Home</a>
      <a href="/about" className="text-white text-lg px-4 py-2 hover:bg-gray-700 rounded">About</a>
      <a href="/services" className="text-white text-lg px-4 py-2 hover:bg-gray-700 rounded">Services</a>
    </nav>
  );
}
