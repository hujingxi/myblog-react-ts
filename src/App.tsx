import React from 'react';
import './App.css';
import { Button, ConfigProvider } from 'antd';

function App() {
  return (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#00b96b',
      },
    }}
  >
    <div className='App'>
      <h1>首页</h1>
      <Button type="primary">Button</Button>
    </div>
  </ConfigProvider>
  );
}

export default App;
