import { useState } from "react";
import { IoStar, IoStarOutline } from "react-icons/io5";

export default function MovieCard(props) {
  const { movie } = props;
  const [isFavourite, setIsFavourite] = useState(false);

  const handleClick = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <div className="flex flex-col align-middle">
      <div className="self-center">
        <div className="flex flex-col items-center">
          <img src={movie.Poster} className="w-48 h-[15rem] shadow-2xl" />
          <button
            type="button"
            onClick={handleClick}
            className="relative top-[-35px]"
          >
            {isFavourite ? (
              <IoStar size="30px" color="gold" />
            ) : (
              <IoStarOutline
                size="30px"
                color="gold"
                className="opacity-75 hover:opacity-100"
              />
            )}
          </button>
        </div>
        <div className="relative top-[-20px] text-center">
          <h1 className="text-sm text-white">{movie.Title}</h1>
          <p className="text-xs text-gray-400">{movie.Year}</p>
        </div>
      </div>
    </div>
  );
}
