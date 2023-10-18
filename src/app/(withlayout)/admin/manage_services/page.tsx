"use client";

import Loading from "@/app/loading";
import IHTable from "@/components/ui/IHTable";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useGetServicesQuery } from "@/redux/api/servicesApi";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd"
import Link from "next/link"

const ManageServicesPage = () => {
  const { data, isLoading } = useGetServicesQuery(undefined);
  console.log(data);
  if (isLoading) {
    return <Loading></Loading>
  }
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
        return <Button onClick={() => console.log(data)} type="primary" danger>X</Button>
      }

    },
  ];

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
        // pageSize={size}
        // totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      >

      </IHTable>

    </div>
  )
}

export default ManageServicesPage;