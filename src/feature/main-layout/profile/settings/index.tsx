import { cookies } from "next/headers";
import CustomerProfileSettings from "./components/CustomerProfileSettings";
import ProviderProfile from "./components/ProviderProfile";

const Settings = async () => {
    const cookieStore = await cookies();
    const userCookie = cookieStore.get("user");
    const user = userCookie ? JSON.parse(userCookie.value) : null;
    const userRole = user ? user.role : null;
    return (
        <div> 
            {
                userRole === "customer" ? <CustomerProfileSettings /> : <ProviderProfile />
            } 
        </div>
    );
};

export default Settings;
