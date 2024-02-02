import { useContext, useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import useAuthCheck from "../hooks/useAuthCheck";
import { useMutation } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "../context/UserDetailContext";
import { checkFavorites, updateFavorites } from "../Utils/common";
import { favoriteHandler } from "../Utils/api";

export default function Heart({ id }) {
  const [heartColor, setHeartColor] = useState("white");
  const { validateLogin } = useAuthCheck();
  const { user } = useAuth0();

  const {
    userDetails: { favorites, token },
    setUserDetails,
  } = useContext(UserDetailContext);

  useEffect(() => {
    setHeartColor(() => checkFavorites(id, favorites));
  }, [favorites]);

  const { mutate } = useMutation({
    mutationFn: () => favoriteHandler(id, user?.email, token),
    onSuccess: () => {
      setUserDetails((prev) => ({
        ...prev,
        favorites: updateFavorites(id, prev.favorites),
      }));
    },
  });

  const handleLike = () => {
    if (validateLogin()) {
      mutate();
      setHeartColor((prev) => (prev === "red" ? "white" : "red"));
    }
  };

  return (
    <AiFillHeart
      size={24}
      color={heartColor}
      className="absolute top-3 right-3 cursor-pointer z-10"
      onClick={(e) => {
        e.stopPropagation();
        handleLike();
      }}
    />
  );
}
