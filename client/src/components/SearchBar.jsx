import { HiLocationMarker } from "react-icons/hi";

export default function SearchBar({ filter, setFilter }) {
  return (
    <div className="p-2 rounded-xl border flex items-center gap-1 bg-white w-full lg:w-[70%]">
      <div>
        <HiLocationMarker className="text-blue-600" size={20} />
      </div>
      <input
        type="text"
        className="w-full border-none outline-none focus:outline-none text-black text-[15px] placeholder-gray-600"
        placeholder="Search by title/city/country..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <button className="text-white font-medium px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl transition-all ease-in-out hover:scale-105">
        Search
      </button>
    </div>
  );
}
