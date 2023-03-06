import React from 'react';
import { useNavigate} from 'react-router-dom';
import { Button } from 'antd';

import './index.css';

const Portal: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className='App'>
      <h1>portal</h1>
      <Button type="primary" onClick={() =>navigate('myblog/account')}>跳转到 account</Button>
    </div>
  );
};

Portal.displayName = 'Portal';

export default Portal;
