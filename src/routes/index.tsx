import React, { Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';
import routes from './config';

const MyRoutes: React.FC = () => {
  return (
    <Routes>
      {
        routes.map(item => {
          return (
            <Route 
              key={item.name} 
              path={item.path}
              element={
                <Suspense fallback={
                  // <div>路由懒加载ing</div>
                  <></>
                }>
                  <item.component />
                </Suspense>
              }
            />
          );
        })
      }
    </Routes>
  );
};

MyRoutes.displayName = 'MyRoutes';

export default MyRoutes;