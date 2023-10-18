"use client";

import Loading from "@/app/loading";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useGetSingleUserQuery } from "@/redux/api/userApi";
import { getUserInfo } from "@/services/auth.service";

const ProfilePage = () => {
    const { role, id } = getUserInfo() as any;
    console.log(role, id);
    const { data, isLoading } = useGetSingleUserQuery(id);
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(data);

    return (
        <div>
            <UMBreadCrumb
                items={[
                    {
                        label: "profile",
                        link: "/profile",
                    }
                ]}
            />
            <h1>My Profile page</h1>
            <div>
                <p>Email: {data[0].email}</p>
                <p>Role: {data[0].role}</p>
            </div>
        </div>
    )
}

export default ProfilePage