import { MyRequestsContent } from "@/feature/main-layout/my-request";
import React from "react";
import { myFetch } from "../../../../helpers/myFetch";

export default async function page() {
  const res = await myFetch("/service-booking", {
    method: "GET",
    tags: ["service-booking"],
    // cache: "no-store",
  });
  const acceptedRes = await myFetch("/service-booking/status?status=accepted", {
    method: "GET",
    tags: ["service-booking"],
    // cache: "no-store",
  });
  const bookedRes = await myFetch("/service-booking/status?status=confirmed", {
    method: "GET",
    tags: ["service-booking"],
    // cache: "no-store",
  });
  // chat room
  const chatRes = await myFetch("/chat-room", {
    method: "GET",
    tags: ["chat-room"],
    cache: "no-store",
  });

  const requests = Array.isArray(res?.data) ? res.data : [];
  const quotations = Array.isArray(acceptedRes?.data) ? acceptedRes.data : [];
  const bookings = Array.isArray(bookedRes?.data) ? bookedRes.data : [];
  const chatRooms = Array.isArray(chatRes?.data) ? chatRes.data : [];
  console.log("bookings", bookings);
  return (
    <MyRequestsContent
      requests={requests}
      quotations={quotations}
      bookings={bookings}
      chatRooms={chatRooms}
    />
  );
}
