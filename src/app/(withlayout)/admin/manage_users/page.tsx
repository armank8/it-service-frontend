"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd"
import Link from "next/link"

const ManageUsersPage = () => {
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
            label: `${role}/manage_users`,
            link: `/${role}/manage_users`,
          },
        ]}
      />
      <h1>Manage Users Page</h1>
      <h2>Users List</h2>
      <Link href="/admin/manage_users/create">
        <Button type="primary">Create</Button>
      </Link>
    </div>
  )
}

export default ManageUsersPage