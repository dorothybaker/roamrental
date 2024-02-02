import { useForm } from "@mantine/form";
import { validateString } from "../Utils/common";
import { Button, Group, Select, TextInput } from "@mantine/core";
import useCountries from "../hooks/useCountries";

import Map from "../components/Map";

const AddLocation = ({ propertyDetails, setPropertyDetails, nextStep }) => {
  const { getAll } = useCountries();

  const form = useForm({
    initialValues: {
      country: propertyDetails?.country,
      city: propertyDetails?.city,
      address: propertyDetails?.address,
    },
    validate: {
      country: (value) => validateString(value),
      city: (value) => validateString(value),
      address: (value) => validateString(value),
    },
  });

  const { country, city, address } = form.values;

  const handleSubmit = () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      setPropertyDetails((prev) => ({ ...prev, city, country, address }));
      nextStep();
    }
  };

  return (
    <section>
      <h1 className="font-semibold my-1">Creating the property location</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="flex gap-4 items-start md:flex-row flex-col">
          <div className="md:flex-1 flex flex-col gap-2">
            <Select
              w={"100%"}
              withAsterisk
              label="Select a country"
              clearable
              searchable
              data={getAll()}
              {...form.getInputProps("country", { type: "input" })}
            />

            <TextInput
              w={"100%"}
              withAsterisk
              label="City location"
              {...form.getInputProps("city", { type: "input" })}
            />

            <TextInput
              w={"100%"}
              withAsterisk
              label="Property address"
              {...form.getInputProps("address", { type: "input" })}
            />
          </div>

          <div className="md:flex-1 w-full">
            <Map address={address} city={city} country={country} />
          </div>
        </div>

        <Group justify="center" mt={"xl"}>
          <Button type="submit" className="bg-blue-500">
            Next Step
          </Button>
        </Group>
      </form>
    </section>
  );
};

export default AddLocation;
