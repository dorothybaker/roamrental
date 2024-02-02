import countries from "world-countries";

const formattedCountries = countries.map((country) => ({
  value: country.name.common,
  label: `${country.flag} ${country.name.common}`,
  latlng: country.latlng,
  region: country.region,
}));

export default function useCountries() {
  const getAll = () => formattedCountries;
  return { getAll };
}
