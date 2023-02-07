import axios from 'axios';
import React from 'react';

const Desc: React.FC = () => {

  const postRequest = () => {
    axios.post('/wf/admin/click', {
      data: 'click',
      msg: 'fsdjkl',
    }).then(res => {
      console.log('post', res);
    }).catch(err => {
      console.log('err', err);
    });
  }
  return (
    <>
      <p>这是我的个人介绍</p>
      <button onClick={() => postRequest()}>Post Test</button>
    </>
  );
}

Desc.displayName = 'Desc';

export default Desc;