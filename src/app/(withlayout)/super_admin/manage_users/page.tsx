"use client";

import Loading from "@/app/loading";
import IHTable from "@/components/ui/IHTable";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useDeleteUserMutation, useGetUsersQuery } from "@/redux/api/userApi";
import { getUserInfo } from "@/services/auth.service";
import { Response } from "@/types/globalTypes";
import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd"
import Link from "next/link"
import toast from "react-hot-toast";

const ManageUsersPage = () => {

  const { role } = getUserInfo() as any;
  // console.log(role);
  const { data, isLoading } = useGetUsersQuery(undefined);
  const [deleteUser] = useDeleteUserMutation();
  // console.log(data);
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
        return <Button onClick={() => handleDelete(data)} type="primary" danger>
          <DeleteOutlined />
        </Button>
      }

    },
  ];

  const handleDelete = async (data: any) => {
    // console.log(data._id);
    const res: Response = await deleteUser(data._id);

    if (res.data) {
      console.log(res);
      toast("User Deleted Successfully");

    } else if (res.error) {
      console.log(res);
      toast.error("User Not Deleted ");
    }
  };

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize);
    // setPage(page);
    // setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    // setSortBy(field as string);
    // setSortOrder(order === "ascend" ? "asc" : "desc");
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
            label: `${role}/manage_users`,
            link: `/${role}/manage_users`,
          },
        ]}
      />
      <h1>Manage Users Page</h1>

      <h2>Users List</h2>
      <IHTable
        loading={isLoading}
        columns={columns}
        dataSource={data}
        // pageSize={size}
        // totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />


    </div>
  )
}

export default ManageUsersPage