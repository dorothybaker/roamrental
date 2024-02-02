import { Avatar, Menu } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export default function ProfileMenu({ user, logout }) {
  const navigate = useNavigate();

  return (
    <Menu transitionProps={{ transition: "pop-bottom-left", duration: 200 }}>
      <Menu.Target>
        <Avatar
          src={user?.picture}
          alt="Profile Picture"
          radius={"xl"}
          className="cursor-pointer"
        />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          className="font-semibold text-base"
          onClick={() => navigate("/favorites", { replace: true })}
        >
          Favorites
        </Menu.Item>
        <Menu.Item
          className="font-semibold text-base"
          onClick={() => navigate("/bookings", { replace: true })}
        >
          Bookings
        </Menu.Item>
        <Menu.Item
          className="font-semibold text-base"
          onClick={() => {
            localStorage.clear();
            logout();
          }}
        >
          Log Out!
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
