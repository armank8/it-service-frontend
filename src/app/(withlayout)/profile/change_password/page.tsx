"use client";

import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import { getUserInfo } from "@/services/auth.service";

const ChangePasswordPage = () => {
    const { role,id } = getUserInfo() as any;
    console.log(role,id);

    const {data,isLoading} = useGetSingleUserQuery(id);
    console.log(data);

    return (
        <div>
            <UMBreadCrumb
                items={[
                    {
                        label: `/profile`,
                        link: `/profile`,
                    },
                    {
                        label: `/profile/change_password`,
                        link: `/profile/change_password`,
                    }
                ]}
            />
            <h1>Change Password page</h1>
        </div>
    )
}

export default ChangePasswordPage