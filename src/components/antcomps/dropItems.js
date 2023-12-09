const dropItems = [
    [
        {
            label: 'SELECT',
            key: '1',
            // icon: <UserOutlined />,
        },
        {
            label: 'UPDATE',
            key: '2',
            // icon: <UserOutlined />,
            disabled: true,
        },
        {
            label: 'CREATE',
            key: '3',
            // icon: <UserOutlined />,
            disabled: true,
        },
        {
            label: 'DELETE',
            key: '4',
            // icon: <UserOutlined />,
            // danger: true,
            disabled: true,
        }
    ],
    [
        ["customerID","companyName","contactName","contactTitle","address","city","region","postalCode","country","phone"],    
        ["productID","supplierID","categoryID","quantityPerUnit","unitPrice","unitsInStock","unitsOnOrder","reorderLevel","discontinued","name"],
        ["orderID","productID","unitPrice","quantity","discount"],
    ],
    [
        {
            label: 'Customers',
            key: '1',
            // icon: <UserOutlined />,
        },
        {
            label: 'Products',
            key: '2',
            // icon: <UserOutlined />,
            // disabled: true,
        },
        {
            label: 'Order Details',
            key: '3',
            // icon: <UserOutlined />,
            // disabled: true,
        }
    ]
];

export default dropItems;