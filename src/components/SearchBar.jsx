import { IoMdSearch } from "react-icons/io";

export default function SearchBar(props) {
  return (
    <>
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
    </>
  );
}
