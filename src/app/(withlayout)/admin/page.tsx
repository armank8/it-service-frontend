"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";

const AdminPage = () => {
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
            <h1>AdminPage</h1>
        </div>
    )
}

export default AdminPage