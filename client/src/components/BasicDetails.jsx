import { useForm } from "@mantine/form";
import { validateString } from "../Utils/common";
import { Button, Group, NumberInput, TextInput, Textarea } from "@mantine/core";

export default function BasicDetails({
  propertyDetails,
  setPropertyDetails,
  nextStep,
  prevStep,
}) {
  const form = useForm({
    initialValues: {
      title: propertyDetails.title,
      description: propertyDetails.description,
      price: propertyDetails.price,
    },
    validate: {
      title: (value) => validateString(value),
      description: (value) => validateString(value),
      price: (value) => (value < 1 ? "Must be greater than 0!" : null),
    },
  });

  const { title, description, price } = form.values;
  const handleSubmit = () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      setPropertyDetails((prev) => ({ ...prev, title, description, price }));
      nextStep();
    }
  };

  return (
    <section>
      <h1>Fill in your property information</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <TextInput
          withAsterisk
          label="Property name"
          {...form.getInputProps("title")}
        />
        <Textarea
          withAsterisk
          label="Property description"
          placeholder="Your property details here"
          {...form.getInputProps("description")}
        />
        <NumberInput
          withAsterisk
          label="Price per night"
          placeholder="1000"
          min={1}
          {...form.getInputProps("price")}
          className="w-max"
        />

        <Group justify="center" mt={"xl"}>
          <Button className="bg-black" onClick={prevStep}>
            Back
          </Button>
          <Button className="bg-blue-500" type="submit">
            Next Step
          </Button>
        </Group>
      </form>
    </section>
  );
}
