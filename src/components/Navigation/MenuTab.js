import React, { useState } from 'react';
import { Menu } from 'antd';
import 'antd/dist/antd.css';

import {
    HomeFilled,
    CalendarFilled,
    PlusSquareFilled,
} from '@ant-design/icons';

function MenuTab() {
    const [current, setCurrent] = useState('home');

    function handleClick(tab) {
        console.log('click ', tab);
        setCurrent(tab);
    };

    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="home">
                <HomeFilled />
                Today
            </Menu.Item>
            <Menu.Item key="plan">
                <CalendarFilled />
                Plan
            </Menu.Item>
            <Menu.Item key="addRecipe">
                <PlusSquareFilled />
                Add
            </Menu.Item>
        </Menu>
    )
}

export default MenuTab;