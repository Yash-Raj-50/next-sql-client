'use client';

import React, {useState} from 'react'
import { Button, Tooltip, Modal, Divider } from "antd";
import { PlusOutlined, InfoOutlined, GithubOutlined } from '@ant-design/icons';

const navbar = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  

    return (
        <div className="text-2xl flex justify-end w-full mb-6 lg:mb-0">
            <div className='w-4/5 lg:w-3/5 flex justify-start lg:justify-center items-center'>
                Next SQL Client
            </div>
            <div className='w-1/5 flex justify-end'>
                <Tooltip title="Add New CSV">
                    <Button shape='circle' size='default' disabled className='mx-2 flex items-center justify-center'>
                        <PlusOutlined />
                    </Button>
                </Tooltip>
                <Tooltip title="Help">
                    <Button shape='circle' size='default' onClick={showModal} className='mx-2 flex items-center justify-center'>
                        <InfoOutlined />
                    </Button>
                    <Modal title="INFO" open={isModalOpen} onCancel={handleCancel} footer={[]}>
                        <ul className='text-base'>
                            <li>→ Welcome to this SQL Query Client built using Next Js.</li>
                            <li>→ Choose your query table from the choices available.</li>
                            <li>→ Select the columns to Query.</li>
                            <li>→ Hit the 'Run Query' button.</li>
                            <li>→ Sort and Filter the results by using the search box.</li>
                            <li>→ Use the Download CSV button to get the searched data as CSV.</li>
                        </ul>
                        <Divider />
                        <span className='text-base font-medium'>Upcoming Features</span>
                        <ul className='mt-2'>
                            <li>→ Upload any CSV of your choice and run Queries.</li>
                            <li>→ More SQL queries for you to run.</li>
                        </ul>
                        <Divider />
                        V 1.0.0 <span className='text-base font-medium flex justify-center'>Made with ❤️ & ⚡️ by Yash Raj</span>
                    </Modal>
                </Tooltip>
                <Tooltip title="Github Repo">
                    <Button shape='circle' size='default' href='https://github.com/Yash-Raj-50/next-sql-client' target='_b' className='mx-2 flex items-center justify-center'>
                        <GithubOutlined />
                    </Button>
                </Tooltip>
            </div>
        </div>
    )
}

export default navbar