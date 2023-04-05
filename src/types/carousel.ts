import { IPrograms } from '@/types/programs';

export interface IArrow {
  onClick?: () => void;
  direction: 'prev' | 'next';
}

export interface ICarousel {
  title?: string;
  count?: boolean;
  dataName?: string;
  dataProp?: IPrograms[];
  mobileSlides?: number;
  tabletSlides?: number;
  desktopSlides?: number;
  vod?: boolean;
  number?: boolean;
}
