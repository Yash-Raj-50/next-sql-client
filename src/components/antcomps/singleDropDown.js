'use client';

import React, { useEffect } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';
import { useState } from 'react';
import dropitems from './dropItems';

const SingleDropDown = ({ buttonCount, onTableChange, selectedItem }) => {

  const items = dropitems[buttonCount];
  const [count, setCount] = useState(0);

  const handleMenuClick = (e) => {
    setCount(count + 1);
    if (count) {
      message.info(`${items[e.key - 1].label} Selected`);
    }
    if (items[e.key - 1].label === "Customers") {
      onTableChange(0);
    } else if (items[e.key - 1].label === "Products") {
      onTableChange(1);
    } else if (items[e.key - 1].label === "Order Details") {
      onTableChange(2);
    }
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <Space wrap className='mx-4'>
      <Dropdown menu={menuProps}>
        <Button className='bg-white border-black p-6 flex text-lg items-center'>
          <Space>
            {selectedItem}
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </Space>
  )
}

export default SingleDropDown