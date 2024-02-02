import { Container, Modal, Stepper } from "@mantine/core";
import { useState } from "react";
import AddLocation from "./AddLocation";
import { useAuth0 } from "@auth0/auth0-react";
import UploadImage from "./UploadImage";
import BasicDetails from "./BasicDetails";
import Facilities from "./Facilities";

export default function AddPropertyModal({ opened, setOpened }) {
  const { user } = useAuth0();

  const [active, setActive] = useState(0);
  const [propertyDetails, setPropertyDetails] = useState({
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

  const nextStep = () => {
    setActive((curr) => (curr < 4 ? curr + 1 : curr));
  };

  const prevStep = () => {
    setActive((curr) => (curr > 0 ? curr - 1 : curr));
  };

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      centered
      closeOnClickOutside={false}
      size="100%"
      title="Add a property"
    >
      <Container>
        <Stepper
          active={active}
          onStepClick={setActive}
          allowNextStepsSelect={false}
          className="font-semibold"
        >
          <Stepper.Step label="Location" description="Add property address">
            <AddLocation
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
              nextStep={nextStep}
            />
          </Stepper.Step>
          <Stepper.Step label="Image" description="Upload property image">
            <UploadImage
              nextStep={nextStep}
              prevStep={prevStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
            />
          </Stepper.Step>
          <Stepper.Step
            label="Information"
            description="Your Property Information"
          >
            <BasicDetails
              nextStep={nextStep}
              prevStep={prevStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
            />
          </Stepper.Step>
          <Stepper.Step
            label="Facilities"
            description="Your Property facilities"
          >
            <Facilities
              prevStep={prevStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
              setOpened={setOpened}
              setActiveStep={setActive}
            />
          </Stepper.Step>
          <Stepper.Completed>
            Completed, click back button to get to previous step
          </Stepper.Completed>
        </Stepper>
      </Container>
    </Modal>
  );
}
