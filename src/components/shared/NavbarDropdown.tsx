"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { useRouter } from "next/navigation";
import { Avatar } from "@nextui-org/avatar";

export default function NavbarDropdown() {
  const router = useRouter();

  const handleLogout = () => {};

  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar showFallback src="https://images.unsplash.com/broken" />
        {/* <Avatar className="cursor-pointer" src={user?.profilePhoto} /> */}
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem
          key="admins"
          onPress={() => handleNavigation("dashboard/admins")}
        >
          Admin
        </DropdownItem>
        <DropdownItem
          key="user"
          onPress={() => handleNavigation("dashboard/user")}
        >
          User
        </DropdownItem>

        <DropdownItem
          key="delete"
          className="text-danger"
          color="danger"
          onPress={() => handleLogout()}
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
