"use client";

import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const CreateAdminPage = () => {
    const { role } = getUserInfo() as any;
    console.log(role);

    return (
        <div>
            <UMBreadCrumb
                items={[
                    {
                        label: `${role}`,
                        link: `/${role}`,
                    },
                    {
                        label: `${role}/admin`,
                        link: `/${role}/admin`,
                    },
                    {
                        label: `${role}/admin/create`,
                        link: `/${role}/admin/create`,
                    }
                ]}
            />
            <h1>Create Admin Page</h1>

            
        </div>
    )
}

export default CreateAdminPage