"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export interface UserType {
  role?: string;
  [key: string]: any;
}

export default function useUserRole() {
  const [user, setUser] = useState<UserType | null>(null);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const userCookie = Cookies.get("user");
    const parsedUser = userCookie ? JSON.parse(userCookie) : null;

    setUser(parsedUser);
    setRole(parsedUser?.role ?? null);
  }, []);

  return { user, role };
}
