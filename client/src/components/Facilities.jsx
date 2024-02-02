import { useAuth0 } from "@auth0/auth0-react";
import { Button, Group, NumberInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useContext } from "react";
import UserDetailContext from "../context/UserDetailContext";
import useProperties from "../hooks/useProperties";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { createResidency } from "../Utils/api";

export default function Facilities({
  prevStep,
  propertyDetails,
  setPropertyDetails,
  setOpened,
  setActiveStep,
}) {
  const form = useForm({
    initialValues: {
      bedrooms: propertyDetails.bedrooms,
      parking: propertyDetails.parking,
      bathrooms: propertyDetails.bathrooms,
    },
    validate: {
      bedrooms: (value) => (value < 1 ? "Must have atleast 1 bedroom!" : null),
      bathrooms: (value) => (value < 1 ? "Must have atleast 1 bathroom" : null),
    },
  });

  const { bedrooms, parking, bathrooms } = form.values;

  //   Upload Logic
  const { user } = useAuth0();
  const {
    userDetails: { token },
  } = useContext(UserDetailContext);
  const { refetch: refetchProperties } = useProperties();

  const { mutate, isLoading } = useMutation({
    mutationFn: () =>
      createResidency(
        { ...propertyDetails, facilities: { bedrooms, parking, bathrooms } },
        token
      ),
    onError: ({ e }) => toast.error("Something went wrong, please try again!"),
    onSettled: () => {
      toast.success("Property successfully added!");
      setPropertyDetails({
        title: "",
        description: "",
        price: 0,
        country: "",
        city: "",
        address: "",
        image: null,
        facilities: { bedrooms: 0, parking: 0, bathrooms: 0 },
        userEmail: user?.email,
      });
      setOpened(false);
      setActiveStep(0);
      refetchProperties();
    },
  });

  const handleSubmit = () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      setPropertyDetails((prev) => ({
        ...prev,
        facilities: { bedrooms, parking, bathrooms },
      }));
      mutate();
    }
  };

  return (
    <section>
      <h1>Enter your property facilites</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <NumberInput
          withAsterisk
          label="Number of bedrooms"
          placeholder="1"
          min={1}
          {...form.getInputProps("bedrooms")}
        />
        <NumberInput
          withAsterisk
          label="Number of bathrooms"
          placeholder="1"
          min={1}
          {...form.getInputProps("bathrooms")}
        />
        <NumberInput
          withAsterisk
          label="Number of parking"
          placeholder="0"
          min={0}
          {...form.getInputProps("parking")}
        />

        <Group justify="center" mt={"xl"}>
          <Button className="bg-black" onClick={prevStep}>
            Back
          </Button>
          <Button className="bg-green-600" type="submit" disabled={isLoading}>
            {isLoading ? "Submitting" : "Add Property"}
          </Button>
        </Group>
      </form>
    </section>
  );
}
