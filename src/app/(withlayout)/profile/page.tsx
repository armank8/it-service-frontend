"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";

const ProfilePage = () => {
  const { role } = getUserInfo() as any;
    console.log(role);

    return (
        <div>
            <UMBreadCrumb
                items={[
                    {
                        label: `${role}`,
                        link: `/${role}`,
                    }
                ]}
            />
            <h1>My Profile page</h1>
        </div>
    )
}

export default ProfilePage