import React from 'react';
import { Button, ConfigProvider } from 'antd';
import { Route } from 'react-router-dom';

import routes from "@/routes/index";


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
    <div className='App'>
      <h1>首页</h1>
      <Button type="primary">Button</Button>
      <>
        {
          routes.map(item => {
            return (
              <Route path={item.path} />
            );
          } )
        }
      </>
    </div>
  </ConfigProvider>
  );
}

export default App;
