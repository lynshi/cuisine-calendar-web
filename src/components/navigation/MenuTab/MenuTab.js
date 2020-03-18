import { useState } from 'react';
import { Menu } from 'antd';
import styles from './MenuTab.module.css';
import { PageTabEnum } from '../../../constants/PageTabEnum';

import classNames from 'classnames';

import {
    HomeFilled,
    CalendarFilled,
    PlusSquareFilled,
    UnorderedListOutlined,
} from '@ant-design/icons';
import Page from '../../page/Page';

function MenuTab() {
    const [selected, setSelected] = useState(PageTabEnum.HOME);

    function handleClick(event) {
        setSelected(event.key);
    };

    return (
        <div>
        <Menu onClick={handleClick} mode="horizontal">
            <Menu.Item className={styles.homeTab_background} key={PageTabEnum.HOME}>
                <HomeFilled />
                Today
            </Menu.Item>
            <Menu.Item className={styles.planTab_background} key={PageTabEnum.PLAN}>
                <CalendarFilled />
                Plan
            </Menu.Item>
            <Menu.Item className={styles.recipeTab_background} key={PageTabEnum.RECIPES}>
                <UnorderedListOutlined />
                Recipes
            </Menu.Item>
            <Menu.Item className={styles.addTab_background} key={PageTabEnum.ADD_RECIPE}>
                <PlusSquareFilled />
                Add
            </Menu.Item>
        </Menu>

        <Page selected={selected}/>
        </div>
    )
}

export default MenuTab;