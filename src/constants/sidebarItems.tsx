import type { MenuProps } from "antd";
import {
  ProfileOutlined,
  TableOutlined,
  AppstoreOutlined,
  ScheduleOutlined,
  ThunderboltOutlined,
  CreditCardOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";


export const sidebarItems = (role: string) => {

  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/${role}/profile`}>Account Profile</Link>,
          key: `/${role}/profile`,
        },
        {
          label: <Link href={`/${role}/change-password`}>Change Password</Link>,
          key: `/${role}/change-password`,
        },
      ],
    },
  ];

  const commonAdminSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/manage_users`}>Manage Users</Link>,
      icon: <TableOutlined />,
      key: `/${role}/manage_users`,
    }
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    {
      label: <Link href={`/${role}/manage_services`}>Manage Services</Link>,
      icon: <TableOutlined />,     
      key: `/${role}/manage_services`,
    }
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    {
      label: <Link href={`/${role}/admin`}>Manage Admin</Link>,
      icon: <TableOutlined />,
      key: `/${role}/admin`,
    },
    {
      label: <Link href={`/${role}/user`}>Manage User</Link>,
      icon: <TableOutlined />,
      key: `/${role}/user`,
    },
    {
      label: "Manage permission",
      key: "manage-permission",
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link href={`/${role}/permission`}>View permissions</Link>,
          key: `/${role}/permission`,
        },
      ],
    },
    {
      label: "Management",
      key: "management",
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link href={`/${role}/department`}>Department</Link>,
          key: `/${role}/department`,
        },
      ],
    },
  ];

  const userSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/services`}>Services</Link>,
      icon: <TableOutlined />,
      key: `/${role}/services`,
    },
    {
      label: <Link href={`/${role}/history`}>History</Link>,
      icon: <FileTextOutlined />,
      key: `/${role}/history`,
    },
  ];

  // const studentSidebarItems: MenuProps["items"] = [
  //   ...defaultSidebarItems,
  //   {
  //     label: <Link href={`/${role}/courses`}>Courses</Link>,
  //     icon: <TableOutlined />,
  //     key: `/${role}/courses`,
  //   },
  //   {
  //     label: <Link href={`/${role}/courses/schedule`}>Course schedules</Link>,
  //     icon: <ScheduleOutlined />,
  //     key: `/${role}/courses/schedule`,
  //   },
  //   {
  //     label: <Link href={`/${role}/registration`}>Registration</Link>,
  //     icon: <ThunderboltOutlined />,
  //     key: `/${role}/registration`,
  //   },
  //   {
  //     label: <Link href={`/${role}/payment`}>Payment</Link>,
  //     icon: <CreditCardOutlined />,
  //     key: `/${role}/payment`,
  //   },
  //   {
  //     label: <Link href={`/${role}/academic-report`}>Academic report</Link>,
  //     icon: <FileTextOutlined />,
  //     key: `/${role}/academic-report`,
  //   },
  // ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  // else if (role === USER_ROLE.STUDENT) return studentSidebarItems;
  else if (role === USER_ROLE.USER) return userSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
