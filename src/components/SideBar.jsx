export default function SideBar() {
  return (
    <div className="flex w-64 flex-col h-auto bg-[#191C1F] gap-2 text-gray-400">
      <a href="#" className="mt-16 w-full py-3 pl-6 hover:border-l-4 hover:border-[#FF424F] hover:text-[#FF424F]">
        Movies
      </a>
      <a href="#" className="w-full py-3 pl-6 hover:border-l-4 hover:border-[#FF424F] hover:text-[#FF424F]">
        Favourites
      </a>
      <a href="#" className="w-full py-3 pl-6 hover:border-l-4 hover:border-[#FF424F] hover:text-[#FF424F]">
        Recommended
      </a>
      <div className="border-[1px] mx-4 border-[#222B31]"></div>
    </div>
  );
}
