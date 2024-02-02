import { useState } from "react";
import { MdOutlineContactMail } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "./ProfileMenu";

import { TbHomePlus } from "react-icons/tb";
import { BsHouses } from "react-icons/bs";
import AddPropertyModal from "./AddPropertyModal";
import useAuthCheck from "../hooks/useAuthCheck";

const Header = () => {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const { validateLogin } = useAuthCheck();

  const [modal, setModal] = useState(false);

  const handlePropertyClick = () => {
    if (validateLogin()) {
      setModal((prev) => !prev);
    }
  };

  return (
    <section className="text-white bg-black">
      <div className="flex items-center justify-between max-w-7xl sm:p-6 px-3 py-6 mx-auto w-full text-white/80">
        <Link to="/">
          <h1 className="text-white text-2xl font-extrabold">RoamRental</h1>
        </Link>
        <div className="flex lg:gap-5 md:gap-4 items-center">
          <NavLink to="/properties" className="md:block hidden">
            Properties
          </NavLink>

          <a href="mailto:roamrental@gmail.com" className="md:block hidden">
            Contact
          </a>

          <div
            className="md:block hidden cursor-pointer"
            onClick={() => handlePropertyClick()}
          >
            Add Property
          </div>
          {modal && <AddPropertyModal opened={modal} setOpened={setModal} />}

          {isAuthenticated ? (
            <ProfileMenu user={user} logout={logout} />
          ) : (
            <button
              className="text-white font-medium sm:px-4 px-3 sm:py-2 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all ease-in-out hover:scale-105"
              onClick={() => loginWithRedirect()}
            >
              Log in
            </button>
          )}
        </div>
      </div>

      <div className="fixed bottom-0 w-full bg-gray-200 z-50 flex gap-2 justify-between p-3 text-black rounded-t-2xl md:hidden">
        <a
          href="/properties"
          className="flex flex-col justify-center items-center"
        >
          <BsHouses size={20} />
          <span className="line-clamp-1 text-xs font-semibold">Properties</span>
        </a>
        <div
          className="flex flex-col justify-center items-center"
          onClick={() => handlePropertyClick()}
        >
          <TbHomePlus size={20} />
          <span className="line-clamp-1 text-xs font-semibold">
            Add Property
          </span>
        </div>
        <a
          href="mailto:roamrental@gmail.com"
          className="flex flex-col justify-center items-center"
        >
          <MdOutlineContactMail size={19} />
          <span className="line-clamp-1 text-xs font-semibold">Contact</span>
        </a>
      </div>
    </section>
  );
};

export default Header;
