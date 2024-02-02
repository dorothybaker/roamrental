import { Button, Modal } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useContext, useState } from "react";
import { useMutation } from "react-query";
import { bookVisit } from "../Utils/api";
import UserDetailContext from "../context/UserDetailContext";

import dayjs from "dayjs";
import { toast } from "react-toastify";

export default function BookingModal({ open, setOpen, email, propertyId }) {
  const [value, setValue] = useState([null, null]);

  const {
    userDetails: { token },
    setUserDetails,
  } = useContext(UserDetailContext);

  const handleBookingSuccess = () => {
    toast.success("Visit successfully booked!");

    setUserDetails((prev) => ({
      ...prev,
      bookings: [...prev.bookings, { id: propertyId, date: date }],
    }));
  };

  const settled = () => {
    setOpen(false);
    setValue([null, null]);
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: () => bookVisit(date, propertyId, email, token),
    onSuccess: () => handleBookingSuccess(),
    onError: (err) => toast.error("Something went wrong, please try again!"),
    onSettled: () => settled(),
  });

  const time = value.map((item) =>
    item !== null ? dayjs(item).format("DD/MM/YYYY") : ""
  );
  const date = Array.from(new Set(time));

  const newValue = value.filter((item) => item !== null);

  return (
    <Modal
      opened={open}
      title="Select your date of visit."
      centered
      onClose={() => setOpen(false)}
    >
      <div className="w-full">
        <span className="text-center my-1 w-full block font-semibold">
          Pick a date or a date range
        </span>
        <div className="flex flex-col gap-3 justify-center items-center">
          <DatePicker
            type="range"
            allowSingleDateInRange
            value={value}
            onChange={setValue}
            minDate={new Date()}
          />
          <Button
            className={`text-base mt-2 text-center ${
              newValue.length < 1 || isLoading
                ? "bg-blue-500/70 cursor-not-allowed"
                : "bg-blue-500"
            }`}
            disabled={newValue.length < 1 || isLoading}
            onClick={() => mutate()}
          >
            Book Visit
          </Button>
        </div>
      </div>
    </Modal>
  );
}
