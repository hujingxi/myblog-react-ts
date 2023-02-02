import React from 'react';
import './App.css';
import { Button, ConfigProvider } from 'antd';

function App() {
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#00b96b',
      },
    }}
  >
    <Button />
  </ConfigProvider>
}

export default App;
