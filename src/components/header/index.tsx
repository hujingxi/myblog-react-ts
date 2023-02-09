import React from 'react';
import { Tabs } from 'antd';
import axios from 'axios';
import type { TabsProps } from 'antd';
import './index.less';

const Header: React.FC = () => {

  const postRequest = () => {
    axios.post('/wf/admin/click', {
      data: 'click',
      msg: 'fsdjkl',
    }).then(res => {
      console.log('post', res);
    }).catch(err => {
      console.log('err', err);
    });
  };

  const tabList: TabsProps['items'] = [
    {
      key: '1',
      label: '首页',
      children: 'ksdfjlks',
    },
    {
      key: '2',
      label: '文章',
      children: 'acdslkl',
    },
  ];
  return (
    <div className="portal-header" style={{ marginTop: 100, textAlign: 'center' }}>
      <p>这是我的个人介绍</p>
      <button onClick={() => postRequest()}>Post Test</button>
      <Tabs
        defaultActiveKey='0'
        items={tabList}
      />
    </div>
  );
};

Header.displayName = 'Header';

export default Header;