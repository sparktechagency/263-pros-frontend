import { cookies } from "next/headers";
import CustomerProfileSettings from "./components/CustomerProfileSettings";
import ProviderProfile from "./components/ProviderProfile";

const Settings = async () => {
  return (
    <div>
       <ProviderProfile />
    </div>
  );
};

export default Settings;
