"use client";

import Loading from "@/app/loading";
import IHTable from "@/components/ui/IHTable";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useDeleteServiceMutation, useGetServicesQuery } from "@/redux/api/servicesApi";
import { getUserInfo } from "@/services/auth.service";
import { Response } from "@/types/globalTypes";
import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd"
import Link from "next/link"
import { useState } from "react";
import toast from "react-hot-toast";

const ManageServicesPage = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  const { data, isLoading } = useGetServicesQuery(undefined);
  const [deleteService] = useDeleteServiceMutation();

  console.log(data);
  if (isLoading) {
    return <Loading></Loading>
  }

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const { role } = getUserInfo() as any;
  // console.log(role);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      // sorter: true
      sorter: (a: any, b: any) => a.age - b.age
    },
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
    console.log(data);
    const res: Response = await deleteService(data._id);

    if (res.data) {
      console.log(res);
      toast("Service Deleted Successfully");

    } else if (res.error) {
      console.log(res);
      toast.error("Service Not Deleted ");
    }
  }

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
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
            label: `${role}/manage_services`,
            link: `/${role}/manage_services`,
          },
        ]}
      />
      <h1>Manage Services Page</h1>
      <Link href="/admin/manage_services/create">
        <Button type="primary">Create Service</Button>
      </Link>

      <h2>Services List</h2>
      <IHTable
        loading={isLoading}
        columns={columns}
        dataSource={data}
        pageSize={size}
        totalPages={5}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />

    </div>
  )
}

export default ManageServicesPage;