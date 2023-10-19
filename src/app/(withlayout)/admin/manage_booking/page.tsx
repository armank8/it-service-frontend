"use client";

import Loading from "@/app/loading";
import IHTable from "@/components/ui/IHTable";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useDeleteBookingMutation, useGetBookingsQuery } from "@/redux/api/bookingApi";
import { useDeleteUserMutation, useGetUsersQuery } from "@/redux/api/userApi";
import { getUserInfo } from "@/services/auth.service";
import { Response } from "@/types/globalTypes";
import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd"
import Link from "next/link"
import toast from "react-hot-toast";

const ManageBookingPage = () => {

  const { role } = getUserInfo() as any;
  // console.log(role);
  const { data, isLoading } = useGetBookingsQuery(undefined);
  const [deleteBooking] = useDeleteBookingMutation();
  // console.log(data);
  if (isLoading) {
    return <Loading></Loading>
  }

  const columns = [
    {
      title: 'UserId',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Slot',
      dataIndex: 'slot',
      key: 'slot',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'CreatedAt',
      dataIndex: 'createdAt',
      key: 'createdAt',
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
    // console.log(data);
    const res: Response = await deleteBooking(data._id);

    if (res.data) {
      console.log(res);
      toast("Booking Deleted Successfully");

    } else if (res.error) {
      console.log(res);
      toast.error("Booking Not Deleted ");
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
            label: `${role}/manage_booking`,
            link: `/${role}/manage_booking`,
          },
        ]}
      />
      <h1>Manage Booking Page</h1>

      <h2>Booking List</h2>
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

export default ManageBookingPage;