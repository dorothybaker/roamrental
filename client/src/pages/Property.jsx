import { useMutation, useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { getProperty, removeBooking } from "../Utils/api";
import Loader from "../components/Loader";
import { MdBed, MdLocalParking, MdLocationPin, MdShower } from "react-icons/md";
import Map from "../components/Map";
import { FaArrowLeft } from "react-icons/fa";
import { useContext, useState } from "react";
import BookingModal from "../components/BookingModal";
import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";

import UserDetailContext from "../context/UserDetailContext";
import { Button } from "@mantine/core";
import Heart from "../components/Heart";

export default function Property() {
  const { pathname } = useLocation();
  const id = pathname.split("/").splice(-1)[0];
  const { data, isLoading, isError } = useQuery(["residence", id], () =>
    getProperty(id)
  );
  const { user, isAuthenticated } = useAuth0();

  const [modal, setModal] = useState(false);

  const {
    userDetails: { token, bookings },
    setUserDetails,
  } = useContext(UserDetailContext);

  const { mutate: cancelBooking, isLoading: cancelling } = useMutation({
    mutationFn: () => removeBooking(id, user?.email, token),
    onSuccess: () => {
      setUserDetails((prev) => ({
        ...prev,
        bookings: prev.bookings.filter((booking) => booking?.id !== id),
      }));

      toast.success("Booking cancelled!");
    },
  });

  const dates = bookings
    ?.filter((booking) => booking?.id === id)[0]
    ?.date.filter((item) => item !== "");

  const navigate = useNavigate();
  return (
    <section>
      {isLoading && <Loader />}
      {isError && (
        <div className="h-[70vw] flex items-center w-full px-2 justify-center text-center text-lg font-semibold">
          Error occured while fetching the properties.
        </div>
      )}
      {data && !isLoading && !isError && (
        <div className="flex flex-col gap-6 py-6 sm:px-6 px-3 mx-auto max-w-7xl items-start w-full">
          <div
            className="flex gap-[2px] text-sm font-semibold items-center cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft size={13} />
            <span>Back</span>
          </div>
          <div className="relative w-full mx-auto mb-3 lg:h-[35rem] md:h-[27rem] h-[300px]">
            <Heart id={id} />
            <img
              src={data?.image}
              alt="productImage"
              className="w-full h-full rounded-md object-cover"
            />
          </div>

          <div className="flex items-start justify-between gap-5 w-full flex-wrap">
            <div className="flex flex-col gap-3 items-start md:flex-1">
              <div className="flex justify-between items-end gap-3 w-full flex-wrap gap-y-[2px]">
                <h1 className="text-blue-950 font-bold sm:text-2xl text-xl">
                  {data?.title}
                </h1>
                <span className="text-orange-500 font-semibold text-sm">
                  <span className="poppins text-lg">${data?.price}</span>/per
                  night
                </span>
              </div>

              <div className="flex gap-2 justify-center sm:items-center sm:flex-row flex-col">
                <div className="flex gap-1 items-center">
                  <div className="h-6 w-6 bg-blue-950 flex items-center justify-center rounded-full text-white">
                    <MdShower />
                  </div>
                  <span className="font-semibold">
                    <span className="poppins text-[15px]">
                      {data?.facilities?.bathrooms}
                    </span>{" "}
                    Bathroom/s
                  </span>
                </div>
                <div className="flex gap-1 items-center">
                  <div className="h-6 w-6 bg-blue-950 flex items-center justify-center rounded-full text-white">
                    <MdBed />
                  </div>
                  <span className="font-semibold">
                    <span className="poppins text-[15px]">
                      {data?.facilities?.bedrooms}
                    </span>{" "}
                    Bedroom/s
                  </span>
                </div>
                <div className="flex gap-1 items-center">
                  <div className="h-6 w-6 bg-blue-950 flex items-center justify-center rounded-full text-white">
                    <MdLocalParking />
                  </div>
                  <span className="font-semibold">
                    <span className="poppins text-[15px]">
                      {data?.facilities?.parking || 0}
                    </span>{" "}
                    Parking lot/s
                  </span>
                </div>
              </div>

              <div>
                <span>{data?.description}</span>
              </div>

              <div className="flex items-center gap-1">
                <MdLocationPin size={24} />
                <span className="font-semibold">
                  {data?.address} {data?.city}, {data?.country}
                </span>
              </div>

              {bookings?.map((booking) => booking.id).includes(id) ? (
                <>
                  <Button
                    variant="default"
                    className="text-base"
                    w={"100%"}
                    color="red"
                    onClick={() => cancelBooking()}
                    disabled={cancelling}
                  >
                    Cancel your booking
                  </Button>
                  <div>
                    <span className="font-semibold">
                      Your visit is booked on{" "}
                      <span className="poppins text-sm">
                        {dates.join(" - ")}
                      </span>{" "}
                    </span>
                  </div>
                </>
              ) : (
                <button
                  className="w-full py-2 bg-blue-950 font-semibold text-base rounded-md text-white"
                  onClick={() => {
                    isAuthenticated
                      ? setModal(true)
                      : toast.error("You must be logged in!");
                  }}
                >
                  Book you visit
                </button>
              )}

              <BookingModal
                open={modal}
                setOpen={setModal}
                propertyId={id}
                email={user?.email}
              />
            </div>

            <div className="md:flex-1 w-full">
              <Map
                address={data?.address}
                city={data?.city}
                country={data?.country}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
