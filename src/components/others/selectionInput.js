'use client';

import Dropdown from "../antcomps/singleDropDown";
import MultiDropdown from "../antcomps/checkDropDown";
import { Button } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { ReloadOutlined } from '@ant-design/icons';

export default function SelectionInput({ 
        selectedTableNo,
        selectedItem,
        selectedItems, 
        onSetTable, 
        onSetItems, 
        searchActive, 
        editorQuery, 
        buttonClick, 
        refreshClick
    }) {

    return (
        <div className="flex justify-between items-center w-full">
            <div className="flex flex-col lg:flex-row items-center w-full justify-center lg:justify-start">
                <div className="mr-4">QUERY</div>
                <div className="w-full lg:w-fit gap-2 lg:gap-0 flex items-center flex-col justify-center lg:flex-row">
                    {/* 1st Dropdown component */}
                    <Dropdown buttonCount={0}
                        selectedItem={"SELECT"}
                    />
                    {/* Check Dropdown component */}
                    <MultiDropdown
                        tableNo={selectedTableNo}
                        selectedBoxItems={selectedItems}
                        onItemsChange={(items) => { onSetItems(items) }}
                    />
                    <span className="mx-2 text-slate-600">FROM</span>
                    {/* Table selection dropdown component */}
                    <Dropdown
                        buttonCount={2}
                        selectedItem={selectedItem}
                        onTableChange={(tableNo) => { onSetTable(tableNo); }}
                    />
                </div>
            </div>
            <div className="flex items-center">
                <Button className="bg-blue-700 mx-4 flex items-center justify-center hover:scale-125" type="primary" shape="circle" onClick={refreshClick} size="large" title="Refresh" icon={<ReloadOutlined />} />
                <Button className="bg-blue-700 p-6 text-lg flex items-center hover:scale-105" disabled={!searchActive || !editorQuery} onClick={buttonClick} type="primary" icon={<SearchOutlined />}>
                    Run Query
                </Button>
            </div>
        </div>
    )
}