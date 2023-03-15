import { RecoilRoot, RecoilEnv } from 'recoil';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
