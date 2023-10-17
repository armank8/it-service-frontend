"use client";

import ActionBar from "@/components/ui/ActionBar";
import IHTable from "@/components/ui/IHTable";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const ManageAdminPage = () => {
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
                    }
                ]}
            />
            <h1>Manage Admin Page</h1>

            <ActionBar title="Admin List">
                <Link href="/super_admin/admin/create">
                    <Button type="primary">Create</Button>
                </Link>
            </ActionBar>

            <IHTable></IHTable>
        </div>
    )
}

export default ManageAdminPage