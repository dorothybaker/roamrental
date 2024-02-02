import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import useProperties from "../hooks/useProperties";
import PropertyCard from "../components/PropertyCard";
import { useState } from "react";

export default function Properties() {
  const [filter, setFilter] = useState("");

  const { data, isLoading, isError } = useProperties();

  return (
    <section>
      <div className="mx-auto flex flex-col max-w-7xl sm:p-6 py-6 px-3 items-center justify-center gap-8">
        <SearchBar filter={filter} setFilter={setFilter} />

        {isLoading && <Loader />}

        {data?.length > 0 ? (
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-1 place-content-center gap-y-3 min-h-[40vh]">
            {data
              .filter(
                (property) =>
                  property.title.toLowerCase().includes(filter.toLowerCase()) ||
                  property.city.toLowerCase().includes(filter.toLowerCase()) ||
                  property.country.toLowerCase().includes(filter.toLowerCase())
              )
              ?.map((item, i) => (
                <PropertyCard item={item} key={i} />
              ))}
          </div>
        ) : (
          <div className="h-[70vw] px-2 flex items-center w-full justify-center text-center text-lg font-semibold">
            There are no properties yet!
          </div>
        )}

        {isError && (
          <div className="h-[70vw] flex items-center w-full px-2 justify-center text-center text-lg font-semibold">
            Error occured while fetching the properties.
          </div>
        )}
      </div>
    </section>
  );
}
