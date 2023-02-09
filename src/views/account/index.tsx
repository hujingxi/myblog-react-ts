import React from 'react';
import axios from 'axios';
import Desc from '../../components/header/index';
// import { getAccount } from './api';

const AccountPage: React.FC = () => {
  const [msg, setMsg] = React.useState('');
  React.useEffect(() => {
    console.log('111');
    axios.get('/wf/admin/account').then((res: any) => {
      console.log('res', res);
      setMsg(res.data);
    });
  });

  return (
    <>
      <div>{msg}</div>
      <Desc />
    </>
  );
}

AccountPage.displayName = 'AccountPage';

export default AccountPage;
