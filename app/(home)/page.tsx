export default function Home() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Hello, World!</h1>
        <p className="text-lg mb-6">Welcome to my Website </p>
        <a href="/about" className="bg-gray-800 text-white font-semibold py-2 px-4 rounded shadow hover:bg-gray-700">
          Learn More
        </a>
      </div>
    </div>
  );
}

