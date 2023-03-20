import Header from '@/components/header/Header';
import Popup from '@/components/popup/Popup';
import React, { useState } from 'react';
const MainPage = () => {
  const [popup, setPopup] = useState(true);
  return (
    <>
      <Header />
      {popup ? <Popup OnClose={setPopup} /> : null}
    </>
  );
};
export default MainPage;
