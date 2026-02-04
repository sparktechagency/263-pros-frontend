import Service from "@/feature/main-layout/profile/service";
import { myFetch } from "../../../../../helpers/myFetch";

const servicePage = async () => {
  const res = await myFetch("/service-record", {
    method: "GET",
    tags: ["service-record"],
  });

  const services = Array.isArray(res?.data) ? res.data : [];

  return <Service services={services} />;
};
export default servicePage;
