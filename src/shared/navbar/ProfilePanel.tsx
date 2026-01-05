import Link from "next/link";
import React from "react";

import { useRouter } from "next/navigation";
export default function ProfilePanel() {
  const router = useRouter();
  const PROFILE_ITEMS = [
    {
      key: "profile",

      label: "Profile",
      href: "/profile",
    },
    {
      key: "my-requests",
      label: "My Requests",
      href: "/my-requests",
    },
    {
      key: "logout",
      label: "Logout",
      danger: true,
    },
  ];
  const onLogout = () => {
    // Handle logout logic here
    // console.log("User logged out");
    router.push("/");
  };
  return (
    <div
      className="w-60 rounded-2xl bg-white p-3  shadow-xl"
      style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
    >
      <div className="flex flex-col gap-3">
        {PROFILE_ITEMS?.map((item: any) => {
          const content = (
            <div className="flex items-center gap-3 rounded-xl bg-[#F6F8FB] px-3 py-3">
              <span
                className={`font-medium ${
                  item.danger ? "text-[#D64545]" : "text-[#121212]"
                }`}
              >
                {item.label}
              </span>
            </div>
          );
          return item.key === "logout" ? (
            <button
              key={item.key}
              onClick={onLogout}
              className="text-left cursor-pointer"
            >
              {content}
            </button>
          ) : (
            <Link
              key={item.key}
              href={item.href ?? "#"}
              className="no-underline"
            >
              {content}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
