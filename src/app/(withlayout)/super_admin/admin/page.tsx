"use client";

import Loading from "@/app/loading";
import ActionBar from "@/components/ui/ActionBar";
import IHTable from "@/components/ui/IHTable";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useAdminsQuery } from "@/redux/api/adminApi";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const ManageAdminPage = () => {
    const { role } = getUserInfo() as any;
    console.log(role);

    const { data, isLoading } = useAdminsQuery(undefined);
    console.log(data);
    if (isLoading) {
        return <Loading></Loading>
    }

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            key: '_id',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
        },
        // {
        //     title: 'Age',
        //     dataIndex: 'age',
        //     key: 'age',
        //     // sorter: true
        //     sorter: (a: any, b: any) => a.age - b.age
        // },
        {
            title: 'Action',
            render: function (data: any) {
                return <Button onClick={() => console.log(data)} type="primary" danger>X</Button>
            }

        },
    ];

    // const tableData = data
    // const tableData = [
    //     {
    //         key: '1',
    //         name: 'John Brown',
    //         age: 32,

    //     },
    //     {
    //         key: '2',
    //         name: 'Jim Green',
    //         age: 42,

    //     },
    // ];

    const onTableChange = (pagination: any, filter: any, sorter: any) => {
        const { order, field } = sorter;
        console.log(order, field);
    };
    const onPaginationChange = (page: number, pageSize: number) => {
        console.log("Page:", page, "pageSize:", pageSize);
    };

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

            <IHTable
                loading={false}
                columns={columns}
                dataSource={data}
                pageSize={5}
                totalPages={10}
                showSizeChanger={true}
                onPaginationChange={onPaginationChange}
                onTableChange={onTableChange}
                showPagination={true}
            ></IHTable>
        </div >
    )
}

export default ManageAdminPage