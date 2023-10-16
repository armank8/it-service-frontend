"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb"
import { getUserInfo } from "@/services/auth.service";

const CreateServicePage = () => {
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
            label: `${role}/manage_services`,
            link: `/${role}/manage_services`,
          },
          {
            label: `${role}/manage_services/create`,
            link: `/${role}/manage_services/create`,
          }
        ]}
      />
        <h1>Create Service Page</h1>
    </div>
  )
}

export default CreateServicePage