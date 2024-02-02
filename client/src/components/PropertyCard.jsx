import { useNavigate } from "react-router-dom";
import Heart from "./Heart";

export default function PropertyCard({ item }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-start gap-2 sm:w-[300px] w-full hover:bg-black/10 transition duration-200 rounded-lg p-2 hover:cursor-pointer hover:shadow-md relative">
      <div className="h-[200px] w-full">
        <img
          src={item.image}
          alt="Residency"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <Heart id={item?.id} />
      <div
        className="flex flex-col gap-[2px] px-1"
        onClick={() => navigate(`../properties/${item?.id}`)}
      >
        <div className="font-semibold text-lg poppins">
          <span className="text-orange-400 poppins">$</span>
          {item?.price}
        </div>
        <h1 className="text-blue-950 text-xl font-bold line-clamp-1">
          {item?.title}
        </h1>
        <p className="text-orange-400 text-sm line-clamp-2">
          {item?.description}
        </p>
      </div>
    </div>
  );
}
