'use client';

import React, { useEffect, useState } from "react";
import { Checkbox, Popover, Icon, Button, Row, Col, Divider } from "antd";
import { DownOutlined } from '@ant-design/icons';
import dropItems from "./dropItems";

const CheckboxMenu = ({ tableNo, onItemsChange, selectedBoxItems }) => {

  var options = dropItems[1][tableNo];

  const [icon, setIcon] = useState({});
  const [checkAll, setCheckAll] = useState(options.length === selectedBoxItems.length);
  const [indeterminate, setIndeterminate] = useState(selectedBoxItems.length > 0 && selectedBoxItems.length < options.length);

  useEffect(() => {
    options = dropItems[1][tableNo];
    onItemsChange(dropItems[1][tableNo]);
  }, [tableNo]);

  useEffect(() => {
    setCheckAll(options.length === selectedBoxItems.length);
    setIndeterminate(selectedBoxItems.length > 0 && selectedBoxItems.length < options.length);
  }, [selectedBoxItems]);

  const onCheckAllChange = (e) => {
    onItemsChange(e.target.checked ? options : []);
  };

  const onChange = (selection) => {
    onItemsChange([...selection]);
    checkIconFilled();
  };

  const checkIconFilled = () => {
    if (selectedBoxItems.length) {
      setIcon({ theme: "filled" });
    } else {
      setIcon({});
    }
  };

  const checkboxRender = () => {
    const groups = options
      .map((e, i) => (i % 10 === 0 ? options.slice(i, i + 10) : null))
      .filter((e) => e);

    return (
      <>
        <Checkbox className="flex justify-center mt-2" indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
          <span className="text-2xl">*</span>
        </Checkbox>
        <Divider />
        <Checkbox.Group onChange={onChange} value={selectedBoxItems} className="" style={{ width: "200px", }}>
          <Row>
            {groups.map((group, i) => (
              <Col key={"checkbox-group-" + i} span={16}>
                {group.map((label) => (
                  <Checkbox
                    key={label}
                    value={label}
                    style={{ display: "", margin: "10px", fontSize: "1rem", fontWeight: "300", fontFamily: "sans-serif" }}
                  >
                    {label}
                  </Checkbox>
                ))}
              </Col>
            ))}
          </Row>
        </Checkbox.Group>
      </>
    );
  };

  return (
    <Popover content={checkboxRender} trigger="hover" placement="bottomLeft" arrow={false} className="multicheck flex items-center mx-4 bg-white border-black p-6 flex text-lg">
      <Button className="w-full flex justify-between">
        <span></span>
        <span className="multiInput" style={{ maxWidth: "30vw", overflowX: "scroll" }}>{selectedBoxItems.length === options.length ? <span>✽</span> : selectedBoxItems.map((e) => e + ", ")}</span>
        {selectedBoxItems.length === 0 ? <span className="font-extralight text-slate-600">Choose Columns</span> : null}
        <DownOutlined className="" />
      </Button>
    </Popover>
  );
};

export default CheckboxMenu;
