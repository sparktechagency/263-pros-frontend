import React from "react";
import Navbar from "./Navbar";
import getProfile from "../../../helpers/getProfile";

export default async function NavServer() {
  const user = await getProfile();
  // console.log(user);
  return <Navbar user={user} />;
}
