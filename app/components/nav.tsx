// import React from 'react';

// export default function Navbar() {
//   return (
//     <nav className=" bg-black p-4 flex justify-around items-center postion=relative">
//       <a href="/" className="text-white text-lg px-4 py-2 hover:bg-gray-700 rounded">Home</a>
//       <a href="/about" className="text-white text-lg px-4 py-2 hover:bg-gray-700 rounded">About</a>
//       <a href="/services" className="text-white text-lg px-4 py-2 hover:bg-gray-700 rounded">Services</a>
//     </nav>
//   );
// }
import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-transparent p-4 flex justify-between items-center fixed top-0 z-10">
      <Link href="/">
        <img src="/logo.png" alt="Logo" className="h-10 cursor-pointer m-3" />
      </Link>
      <div className="flex space-x-6 items-center">
        <Link href="/" className="text-black text-lg px-4 py-2 hover:text-purple-600 transition">Home</Link>
        <Link href="/about" className="text-black text-lg px-4 py-2 hover:text-purple-600 transition">About
        </Link>
        <Link href="/services" className="text-black text-lg px-4 py-2 hover:text-purple-600 transition">
        Services 
        </Link>
        <Link href="/" className='inline-flex items-center bg-purple-600 text-white font-semibold py-2 px-4 rounded shadow hover:bg-purple-800 transition'>
          Contact Us
        </Link>
      </div>
    </nav>
  );
}


