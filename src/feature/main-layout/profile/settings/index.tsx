import getProfile from "../../../../../helpers/getProfile";
import CustomerProfileSettings from "./components/CustomerProfileSettings";
import ProviderProfile from "./components/ProviderProfile";

const Settings = async () => {
  const user = await getProfile();
  return (
    <div>
      {user?.role === "USER" ? (
        <CustomerProfileSettings />
      ) : (
        <ProviderProfile />
      )}
    </div>
  );
};

export default Settings;
