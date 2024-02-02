import { PuffLoader } from "react-spinners";
import useProperties from "../hooks/useProperties";
import PropertyCard from "./PropertyCard";

export default function Residencies() {
  const { data, isError, isLoading } = useProperties();

  return (
    <section>
      <div className="max-w-7xl mx-auto sm:px-6 px-3 relative">
        <div className="flex flex-col items-start gap-1">
          <span className="text-base text-orange-400 font-semibold">
            Best Choices
          </span>
          <span className="text-xl font-bold text-blue-950">
            Popular Residencies
          </span>
        </div>

        <div className="my-4 w-full">
          {isLoading && (
            <div className="h-[320px] flex w-full items-center justify-center text-center flex-col">
              <PuffLoader />
            </div>
          )}
          {isError && (
            <div className="h-[350px] flex w-full font-semibold text-lg items-center justify-center text-center flex-col">
              Error occured while fetching data.
            </div>
          )}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-1 place-content-center gap-y-3">
            {data?.slice(0, 4)?.map((item, i) => (
              <PropertyCard item={item} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
