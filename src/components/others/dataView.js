'use client'

import React, { useState, useEffect } from 'react';
import Customers from "../../data/customers.js"
import products from '../../data/products.js';
import order_details from '@/data/order_details.js';
import columnsStructure from './columnsStructure.js';
import { Table, Input, Button } from "antd";
import { ArrowDownOutlined } from '@ant-design/icons';
import { CSVDownload, CSVLink } from 'react-csv';
const { Search } = Input;

export default function DataView({ selectedTableNo, selectedItems }) {

    const tables = [Customers, products, order_details];
    const [data, setData] = useState(tables[selectedTableNo]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setData(tables[selectedTableNo]);
    }, [selectedTableNo]);

    const columns = columnsStructure[selectedTableNo];
    const filteredColumns = columns.filter(function (el) {
        return selectedItems.includes(el.dataIndex);
    });

    function filterArrayByValue(array, valueToFilter) {
        return array.filter(obj => {
            for (const key in obj) {
                if (
                    typeof obj[key] === 'string' && obj[key].includes(valueToFilter) ||
                    typeof obj[key] === 'number' && obj[key].toString().includes(valueToFilter)
                ) {
                    return true;
                }
            }
            return false;
        });
    }

    const onChange = (value, _e, info) => {
        setSearchTerm(value.target.value);
        setData(filterArrayByValue(tables[selectedTableNo], value.target.value));
    };

    if ((filteredColumns.length && data.length) || searchTerm) {
        return (
            <div className="w-full h-full flex flex-col justify-start">
                <div className='w-full flex items-center justify-between' style={{ height: "7.5vh" }}>
                    <div>
                        <CSVLink data={data} filename={"SQL_Query_data.csv"} target="_blank">
                            <Button className="bg-blue-600 text-white flex items-center" type="primary" icon={<ArrowDownOutlined />}>
                                Export CSV
                            </Button>
                        </CSVLink>
                    </div>
                    <div>
                        <Search
                            placeholder="input search text"
                            allowClear
                            // onSearch={onSearch}
                            onChange={onChange}
                            style={{
                                width: "20vw",
                            }}
                        />
                    </div>
                </div>
                <div className='border rounded-lg'>
                    <Table
                        columns={filteredColumns}
                        dataSource={data}
                        scroll={{
                            // y: 400,
                            y: 'calc(45vh)',
                        }}
                        size='middle'
                    />
                </div>
            </div>
        )
    } else {
        return (
            <div className='h-full cartoon'>

            </div>
        )
    }
}