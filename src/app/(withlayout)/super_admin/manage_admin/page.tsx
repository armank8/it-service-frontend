"use client";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb"
import { getUserInfo } from "@/services/auth.service"

const ManageAdminPage = () => {
    const {role} = getUserInfo() as any;
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
            label: `${role}`,
            link: `/${role}/manage_admin`,
          },
        ]}
      />
    </div>
  )
}

export default ManageAdminPage