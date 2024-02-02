import { Button, Group } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

export default function UploadImage({
  prevStep,
  nextStep,
  propertyDetails,
  setPropertyDetails,
}) {
  const [imageUrl, setImageUrl] = useState(propertyDetails.image);

  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  const handleNext = () => {
    setPropertyDetails((prev) => ({ ...prev, image: imageUrl }));
    nextStep();
  };

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "duihsu76h",
        uploadPreset: "olcoi33y",
        maxFiles: 1,
      },
      (err, result) => {
        if (result.event === "success") {
          setImageUrl(result.info.secure_url);
        }
      }
    );
  }, []);

  return (
    <section className="min-h-[300px]">
      <h1 className="font-semibold">Upload an image for your property.</h1>
      <div>
        {!imageUrl ? (
          <div
            onClick={() => widgetRef.current?.open()}
            className="my-3 h-[150px] flex flex-col justify-center items-center border-dashed border-2 border-gray-500 lg:[w-40%] md:w-[60%] w-full mx-auto cursor-pointer"
          >
            <AiOutlineCloudUpload size={50} color="gray" />
            <span>Upload Image</span>
          </div>
        ) : (
          <div>
            <div className="sm:h-[400px] h-[200px] md:w-[70%] w-full mx-auto my-3">
              <img
                src={imageUrl}
                alt="uploadedImage"
                className="w-full h-full object-cover"
              />
            </div>
            <Button
              variant="default"
              className="mx-auto block"
              onClick={() => widgetRef.current?.open()}
            >
              Change Image
            </Button>
          </div>
        )}

        <Group justify="center" mt={"xl"}>
          <Button className="bg-black" onClick={prevStep}>
            Back
          </Button>
          <Button
            className="bg-blue-500"
            disabled={!imageUrl}
            onClick={handleNext}
          >
            Next Step
          </Button>
        </Group>
      </div>
    </section>
  );
}
