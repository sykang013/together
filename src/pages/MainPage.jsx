import Carousel from '@/components/carousel/Carousel';
import Popup from '@/components/popup/Popup';
import { rem } from '@/theme/utils';
import { useState, useEffect, useId } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';

const StCarouselLayout = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${rem(20)};
  @media (min-width: 768px) {
    gap: ${rem(28)};
  }
  @media (min-width: 1920px) {
    gap: ${rem(36)};
  }
`;

const StMiniBanner = styled.picture`
  margin: 0 auto;
`;

const MainPage = () => {
  const [isPopupModal, setIsPopupModal] = useState(false);

  const openModal = () => {
    setIsPopupModal(true);
  };

  const closeModal = () => {
    setIsPopupModal(false);
  };

  useEffect(() => {
    const expiryDate = JSON.parse(localStorage.getItem('visitCookieExpiry'));
    if (expiryDate) {
      const currentDate = new Date().getTime();

      if (currentDate > expiryDate) {
        localStorage.removeItem('visitCookieExpiry');
        openModal();
      }
    } else {
      openModal();
    }
  }, []);

  const data = [
    {
      id: 1,
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      title: '서진이네',
    },
    {
      id: 2,
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      title: '서진이네',
    },
    {
      id: 3,
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      title: '서진이네',
    },
    {
      id: 4,
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      title: '서진이네',
    },
    {
      id: 5,
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      title: '서진이네',
    },
    {
      id: 6,
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      title: '서진이네',
    },
    {
      id: 7,
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      title: '서진이네',
    },
    {
      id: 8,
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      title: '서진이네',
    },
    {
      id: 9,
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      title: '서진이네',
    },
    {
      id: 10,
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      title: '서진이네',
    },
    {
      id: 11,
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      title: '서진이네',
    },
    {
      id: 12,
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      title: '서진이네',
    },
    {
      id: 13,
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      title: '서진이네',
    },
    {
      id: 14,
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      title: '서진이네',
    },
    {
      id: 15,
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      title: '서진이네',
    },
    {
      id: 16,
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      title: '서진이네',
    },
    {
      id: 17,
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      title: '서진이네',
    },
    {
      id: 18,
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      title: '서진이네',
    },
    {
      id: 19,
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      title: '서진이네',
    },
    {
      id: 20,
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001697953.jpg/dims/resize/F_webp,400`,
      title: '서진이네',
    },
  ];

  const data1 = [
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      title: "대한민국 건강 프로젝트 '더 위대한 유산'",
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      title: "대한민국 건강 프로젝트 '더 위대한 유산'",
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      title: "대한민국 건강 프로젝트 '더 위대한 유산'",
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      title: "대한민국 건강 프로젝트 '더 위대한 유산'",
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      title: "대한민국 건강 프로젝트 '더 위대한 유산'",
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      title: "대한민국 건강 프로젝트 '더 위대한 유산'",
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      title: "대한민국 건강 프로젝트 '더 위대한 유산'",
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      title: "대한민국 건강 프로젝트 '더 위대한 유산'",
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      title: "대한민국 건강 프로젝트 '더 위대한 유산'",
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      title: "대한민국 건강 프로젝트 '더 위대한 유산'",
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      title: "대한민국 건강 프로젝트 '더 위대한 유산'",
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      title: "대한민국 건강 프로젝트 '더 위대한 유산'",
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      title: "대한민국 건강 프로젝트 '더 위대한 유산'",
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      title: "대한민국 건강 프로젝트 '더 위대한 유산'",
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      title: "대한민국 건강 프로젝트 '더 위대한 유산'",
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      title: "대한민국 건강 프로젝트 '더 위대한 유산'",
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      title: "대한민국 건강 프로젝트 '더 위대한 유산'",
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      title: "대한민국 건강 프로젝트 '더 위대한 유산'",
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      title: "대한민국 건강 프로젝트 '더 위대한 유산'",
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      title: "대한민국 건강 프로젝트 '더 위대한 유산'",
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      title: "대한민국 건강 프로젝트 '더 위대한 유산'",
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001620993.jpg/dims/resize/F_webp,400`,
      title: "대한민국 건강 프로젝트 '더 위대한 유산'",
    },
  ];

  const data2 = [
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      title: '아일랜드',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      title: '아일랜드',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      title: '아일랜드',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      title: '아일랜드',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      title: '아일랜드',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      title: '아일랜드',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      title: '아일랜드',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      title: '아일랜드',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      title: '아일랜드',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      title: '아일랜드',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      title: '아일랜드',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      title: '아일랜드',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      title: '아일랜드',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      title: '아일랜드',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      title: '아일랜드',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      title: '아일랜드',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      title: '아일랜드',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      title: '아일랜드',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      title: '아일랜드',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      title: '아일랜드',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      deskTopUrl: `https://image.tving.com/upload/cms/caip/CAIP2520/P001665114.jpg/dims/resize/F_webp,600`,
      title: '아일랜드',
    },
  ];

  const data3 = [
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/fe/event/2023/0131/20230131203136list_image_upload.jpg/dims/resize/F_webp,0`,
      tabletUrl: `https://image.tving.com/upload/fe/event/2023/0131/20230131203136list_image_upload.jpg/dims/resize/F_webp,0`,
      deskTopUrl: `https://image.tving.com/upload/fe/event/2023/0131/20230131203136list_image_upload.jpg/dims/resize/F_webp,0`,
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/fe/event/2023/0131/20230131203136list_image_upload.jpg/dims/resize/F_webp,0`,
      tabletUrl: `https://image.tving.com/upload/fe/event/2023/0131/20230131203136list_image_upload.jpg/dims/resize/F_webp,0`,
      deskTopUrl: `https://image.tving.com/upload/fe/event/2023/0131/20230131203136list_image_upload.jpg/dims/resize/F_webp,0`,
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/fe/event/2023/0131/20230131203136list_image_upload.jpg/dims/resize/F_webp,0`,
      tabletUrl: `https://image.tving.com/upload/fe/event/2023/0131/20230131203136list_image_upload.jpg/dims/resize/F_webp,0`,
      deskTopUrl: `https://image.tving.com/upload/fe/event/2023/0131/20230131203136list_image_upload.jpg/dims/resize/F_webp,0`,
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/fe/event/2023/0131/20230131203136list_image_upload.jpg/dims/resize/F_webp,0`,
      tabletUrl: `https://image.tving.com/upload/fe/event/2023/0131/20230131203136list_image_upload.jpg/dims/resize/F_webp,0`,
      deskTopUrl: `https://image.tving.com/upload/fe/event/2023/0131/20230131203136list_image_upload.jpg/dims/resize/F_webp,0`,
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/fe/event/2023/0131/20230131203136list_image_upload.jpg/dims/resize/F_webp,0`,
      tabletUrl: `https://image.tving.com/upload/fe/event/2023/0131/20230131203136list_image_upload.jpg/dims/resize/F_webp,0`,
      deskTopUrl: `https://image.tving.com/upload/fe/event/2023/0131/20230131203136list_image_upload.jpg/dims/resize/F_webp,0`,
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/fe/event/2023/0131/20230131203136list_image_upload.jpg/dims/resize/F_webp,0`,
      tabletUrl: `https://image.tving.com/upload/fe/event/2023/0131/20230131203136list_image_upload.jpg/dims/resize/F_webp,0`,
      deskTopUrl: `https://image.tving.com/upload/fe/event/2023/0131/20230131203136list_image_upload.jpg/dims/resize/F_webp,0`,
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/fe/event/2023/0131/20230131203136list_image_upload.jpg/dims/resize/F_webp,0`,
      tabletUrl: `https://image.tving.com/upload/fe/event/2023/0131/20230131203136list_image_upload.jpg/dims/resize/F_webp,0`,
      deskTopUrl: `https://image.tving.com/upload/fe/event/2023/0131/20230131203136list_image_upload.jpg/dims/resize/F_webp,0`,
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/fe/event/2023/0131/20230131203136list_image_upload.jpg/dims/resize/F_webp,0`,
      tabletUrl: `https://image.tving.com/upload/fe/event/2023/0131/20230131203136list_image_upload.jpg/dims/resize/F_webp,0`,
      deskTopUrl: `https://image.tving.com/upload/fe/event/2023/0131/20230131203136list_image_upload.jpg/dims/resize/F_webp,0`,
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/fe/event/2023/0131/20230131203136list_image_upload.jpg/dims/resize/F_webp,0`,
      tabletUrl: `https://image.tving.com/upload/fe/event/2023/0131/20230131203136list_image_upload.jpg/dims/resize/F_webp,0`,
      deskTopUrl: `https://image.tving.com/upload/fe/event/2023/0131/20230131203136list_image_upload.jpg/dims/resize/F_webp,0`,
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/fe/event/2023/0131/20230131203136list_image_upload.jpg/dims/resize/F_webp,0`,
      tabletUrl: `https://image.tving.com/upload/fe/event/2023/0131/20230131203136list_image_upload.jpg/dims/resize/F_webp,0`,
      deskTopUrl: `https://image.tving.com/upload/fe/event/2023/0131/20230131203136list_image_upload.jpg/dims/resize/F_webp,0`,
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/fe/event/2023/0131/20230131203136list_image_upload.jpg/dims/resize/F_webp,0`,
      tabletUrl: `https://image.tving.com/upload/fe/event/2023/0131/20230131203136list_image_upload.jpg/dims/resize/F_webp,0`,
      deskTopUrl: `https://image.tving.com/upload/fe/event/2023/0131/20230131203136list_image_upload.jpg/dims/resize/F_webp,0`,
    },
  ];

  const data4 = [
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      desktopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      title: '환승연애 시즌2',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      desktopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      title: '환승연애 시즌2',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      desktopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      title: '환승연애 시즌2',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      desktopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      title: '환승연애 시즌2',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      desktopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      title: '환승연애 시즌2',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      desktopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      title: '환승연애 시즌2',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      desktopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      title: '환승연애 시즌2',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      desktopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      title: '환승연애 시즌2',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      desktopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      title: '환승연애 시즌2',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      desktopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      title: '환승연애 시즌2',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      desktopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      title: '환승연애 시즌2',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      desktopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      title: '환승연애 시즌2',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      desktopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      title: '환승연애 시즌2',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      desktopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      title: '환승연애 시즌2',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      desktopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      title: '환승연애 시즌2',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      desktopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      title: '환승연애 시즌2',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      desktopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      title: '환승연애 시즌2',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      desktopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      title: '환승연애 시즌2',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      desktopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      title: '환승연애 시즌2',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      desktopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      title: '환승연애 시즌2',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      desktopUrl: `https://image.tving.com/upload/cms/caip/CAIP0900/P001613931.jpg/dims/resize/F_webp,400`,
      title: '환승연애 시즌2',
    },
  ];

  const data5 = [
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001693896.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001693896.jpg/dims/resize/F_webp,400`,
      desktopUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001693896.jpg/dims/resize/F_webp,400`,
      title: '성스러운 아이돌',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001693896.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001693896.jpg/dims/resize/F_webp,400`,
      desktopUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001693896.jpg/dims/resize/F_webp,400`,
      title: '성스러운 아이돌',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001693896.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001693896.jpg/dims/resize/F_webp,400`,
      desktopUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001693896.jpg/dims/resize/F_webp,400`,
      title: '성스러운 아이돌',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001693896.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001693896.jpg/dims/resize/F_webp,400`,
      desktopUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001693896.jpg/dims/resize/F_webp,400`,
      title: '성스러운 아이돌',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001693896.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001693896.jpg/dims/resize/F_webp,400`,
      desktopUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001693896.jpg/dims/resize/F_webp,400`,
      title: '성스러운 아이돌',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001693896.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001693896.jpg/dims/resize/F_webp,400`,
      desktopUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001693896.jpg/dims/resize/F_webp,400`,
      title: '성스러운 아이돌',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001693896.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001693896.jpg/dims/resize/F_webp,400`,
      desktopUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001693896.jpg/dims/resize/F_webp,400`,
      title: '성스러운 아이돌',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001693896.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001693896.jpg/dims/resize/F_webp,400`,
      desktopUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001693896.jpg/dims/resize/F_webp,400`,
      title: '성스러운 아이돌',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001693896.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001693896.jpg/dims/resize/F_webp,400`,
      desktopUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001693896.jpg/dims/resize/F_webp,400`,
      title: '성스러운 아이돌',
    },
    {
      id: useId(),
      mobileUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001693896.jpg/dims/resize/F_webp,400`,
      tabletUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001693896.jpg/dims/resize/F_webp,400`,
      desktopUrl: `https://image.tving.com/upload/cms/caip/CAIP1500/P001693896.jpg/dims/resize/F_webp,400`,
      title: '성스러운 아이돌',
    },
  ];
  return (
    <>
      <Helmet>
        <title>타잉 메인</title>
        <meta
          name="description"
          content="타잉의 컨텐츠들을 즐길 수 있는 메인 페이지 입니다."
        />
      </Helmet>
      {isPopupModal && <Popup closeModal={closeModal} />}
      <StCarouselLayout>
        <Carousel title="티빙에서 꼭 봐야하는 콘텐츠" data={data} />
        <Carousel
          title="Quick VOD"
          data={data1}
          vod={true}
          desktopSlides={5}
          tabletSlides={3}
          mobileSlides={2}
        />
        <Carousel title="실시간 인기 프로그램" data={data4} number={true} />
        <Carousel title="인기 LIVE" data={data5} number={true} vod={true} />
        <Carousel
          title="오직 티빙에만 있어요"
          data={data2}
          desktopSlides={5}
          tabletSlides={4}
          mobileSlides={2}
        />
        <StMiniBanner>
          <source
            srcSet="src/assets/main/desktop.png"
            media="(min-width:320px)"
          />
          <img
            src="src/assets/main/mobile.png"
            alt="TAING sports 경기 생중계"
          />
        </StMiniBanner>
        <Carousel title="이벤트" data={data3} />
      </StCarouselLayout>
    </>
  );
};
export default MainPage;
