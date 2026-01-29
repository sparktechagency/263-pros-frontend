import React from "react";
import ProfileSidebar from "@/shared/components/ProfileSidebar";
import getProfile from "../../../../helpers/getProfile";
const ProfileLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getProfile();
  // console.log(user);
  return (
    <div className="lg:h-[calc(100vh - 80px)] h-auto  bg-[#ffffff] py-8 ">
      <div className="container mx-auto flex-center ">
        <div className="md:w-[90%] lg:[85%] w-full ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8">
            <aside className="lg:col-span-1 self-start max-h-fit">
              <ProfileSidebar user={user} />
            </aside>

            <main className="lg:col-span-2  bg-white rounded-xl p-6 pb-4  border border-gray-100 shadow-sm gap-8 h-[calc(100vh-132px)] overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
