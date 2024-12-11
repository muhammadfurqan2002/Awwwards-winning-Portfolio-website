

export default function Navbar() {
  return (
    <div className="w-full relative flex justify-around bg-gray-300 items-center h-20">
      <span className="text-2xl font-bold group relative">
        Home
        <span className="absolute left-0 bottom-0 bg-red-500 w-0 h-[3px] transition-all duration-200 group-hover:w-full"></span>
      </span>
      <span className="text-2xl font-bold group relative">
        About
        <span className="absolute left-0 rounded-full bottom-0 bg-red-500 w-0 h-[3px] transition-all duration-200 group-hover:w-full"></span>
      </span>
    </div>
  );
}
