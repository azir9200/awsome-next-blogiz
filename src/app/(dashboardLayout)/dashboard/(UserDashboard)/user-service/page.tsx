/* eslint-disable import/order */
"use client";

import { useUser } from "@/src/components/context/user.provider";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

const UserService = () => {
  const { user } = useUser();
  return (
    <Card className="justify-center items-center pt-8 m-6">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://images.unsplash.com/broken"
          width={40}
        />
        <div className=" flex-col">
          <p className="text-md">{user?.name}</p>
          <p className="text-small text-default-500"> {user?.email} </p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>You do not Booked any Services yet</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href="/">
          Please go to service page to see nad book any service.
        </Link>
      </CardFooter>
    </Card>
  );
};

export default UserService;
