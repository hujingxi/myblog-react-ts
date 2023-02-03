import React from 'react';
import { ConfigProvider } from 'antd';
import MyRoutes from './routes';

import './App.css';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00b96b',
        },
      }}
    >
      <MyRoutes />
    </ConfigProvider>
  );
}

export default App;
