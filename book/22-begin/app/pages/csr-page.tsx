import Button from '@material-ui/core/Button';
import React from 'react';
import Head from 'next/head';

const CSRPage = () => (
  <div>
    <Head>
      <title>CSR page</title>
      <meta name="description" content="This is a description of the CSR page" />
    </Head>
    <div style={{ padding: '0px 30px', fontSize: '15px', height: '100%', color: '#222' }}>
      <p>Content on CSR page</p>
      <Button variant="outlined">Some button</Button>
    </div>
  </div>
);

export default CSRPage;