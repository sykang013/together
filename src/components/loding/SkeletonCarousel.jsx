import { StImageBox, StImageBoxGroup, StTextBox } from './Skeleton';

const SkeletonCarousel = () => {
  return (
    <>
      <StTextBox />
      <StImageBoxGroup>
        <StImageBox />
        <StImageBox />
        <StImageBox />
        <StImageBox />
        <StImageBox />
      </StImageBoxGroup>
    </>
  );
};

export default SkeletonCarousel;
