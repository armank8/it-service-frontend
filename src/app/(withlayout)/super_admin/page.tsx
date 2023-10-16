"use client"

import UMBreadCrumb from "@/components/ui/UMBreadCrumb"
import { getUserInfo } from "@/services/auth.service";

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
    </div>
  )
}

export default SuperAdminPage