import { PuffLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="w-full h-[70vh] flex flex-col items-center justify-center text-center bg-black/5 text-gray-900">
      <PuffLoader size={50} />
      <span className="font-semibold text-lg">Loading...</span>
    </div>
  );
}
