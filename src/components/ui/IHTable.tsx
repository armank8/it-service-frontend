"use client";
import { Button, Table } from "antd"

type IHTableProps = {
    loading?: boolean
    columns: any
    dataSource: any
    pageSize?: number
    totalPages?: number
    showSizeChanger?: boolean
    onPaginationChange?: (page: number, pageSize: number) => void
    onTableChange?: (pagination: any, filter: any, sorter: any) => void
};

const IHTable = ({
    loading = false,
    columns,
    dataSource,
    pageSize,
    totalPages,
    showSizeChanger = true,
    onPaginationChange,
    onTableChange,
}: IHTableProps) => {



    const paginationConfig = {
        pageSize: 5,
        total: 10,
        pageSizeOptions: [5, 10, 20],
        showSizeChanger: true,
        onChange: onPaginationChange,
    };



    return (
        <Table loading={false} columns={columns} dataSource={tableData}
            pagination={paginationConfig} onChange={onTableChange}
        >IHTable</Table>
    )
}

export default IHTable