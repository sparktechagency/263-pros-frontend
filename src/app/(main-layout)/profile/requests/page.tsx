import { Requests } from "@/feature/main-layout/profile/requests";
import { myFetch } from "../../../../../helpers/myFetch";

const requestsPage = async () => {
  const pendingRes = await myFetch("/service-booking/status?status=pending", {
    method: "GET",
    tags: ["service-booking"],
    // cache: "no-store",
  });
  const enquiries = Array.isArray(pendingRes?.data) ? pendingRes.data : [];
  const chatRes = await myFetch("/chat-room", {
    method: "GET",
    tags: ["chat-room"],
  });
  const chatRooms = Array.isArray(chatRes?.data) ? chatRes.data : [];
  console.log(chatRooms);
  return (
    <div>
      <Requests enquiries={enquiries} chatRooms={chatRooms} />
    </div>
  );
};

export default requestsPage;
