"use client"

import UMBreadCrumb from "@/components/ui/UMBreadCrumb"
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const SuperAdminPage = () => {
  const {role} = getUserInfo() as any;
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
      <h1>superadmin page</h1>
      <h2>Admin List</h2>
      <Link href="/super_admin/manage_admin/create">
        <Button type="primary">Create</Button>
      </Link>
    </div>
  )
}

export default SuperAdminPage