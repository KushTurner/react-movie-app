import { IoMdSearch } from "react-icons/io";

export default function NavBar(props) {
  return (
    <nav className="bg-[#FF424F] w-full grid grid-cols-7 items-center justify-between h-12">
      <div className="col-span-1">
        <header>
          <h1 className="font-bold text-white text-center">Movie App</h1>
        </header>
      </div>

      <div className="flex flex-row items-center col-span-3 justify-center">
        <IoMdSearch size={"25px"} color={"white"} />
        <input
          onChange={(e) => {
            props.setSearchValue(e.target.value);
            console.log(e.target.value);
          }} // TODO: Remove console.log
          value={props.value}
          type="search"
          className="focus:border-red-500 focus:outline-none focus:caret-white w-[60%] bg-[#FF424F] text-white placeholder:text-white hover:border-0"
          placeholder="Search Movie"
        />
      </div>

      <div className="flex flex-row gap-20 col-span-3 justify-center text-white">
        <button className="hover:underline-offset-[17px] hover:underline">
          Favourites
        </button>
        <button className="hover:underline-offset-[17px] hover:underline">
          Recommended
        </button>
      </div>
    </nav>
  );
}
