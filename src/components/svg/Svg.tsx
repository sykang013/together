import styled, { css } from 'styled-components/macro';
import { rem } from '@/theme/utils';

interface IStSvg {
  className?: string;
  desktopW?: number | string;
  desktopH?: number | string;
  tabletW?: number | string;
  tabletH?: number | string;
  width: number | string;
  height: number | string;
}

interface ISvgProps extends IStSvg {
  id: string;
}

const StSvg = styled.svg<IStSvg>`
  width: ${(props) =>
    isNaN(Number(props.width)) ? props.width : rem(props.width)};
  height: ${(props) =>
    isNaN(Number(props.height)) ? props.height : rem(props.height)};
  display: inline-block;

  ${(props) =>
    props.tabletW &&
    props.tabletH &&
    css<IStSvg>`
      @media (min-width: 768px) {
        width: ${(props) =>
          isNaN(Number(props.tabletW))
            ? props.tabletW
            : rem(props.tabletW as number | string)};
        height: ${(props) =>
          isNaN(Number(props.tabletH))
            ? props.tabletH
            : rem(props.tabletH as number | string)};
      }
    `}

  ${(props) =>
    props.desktopW &&
    props.desktopH &&
    css<IStSvg>`
      @media (min-width: 1920px) {
        width: ${(props) =>
          isNaN(Number(props.desktopW))
            ? props.desktopW
            : rem(props.desktopW as number | string)};
        height: ${(props) =>
          isNaN(Number(props.desktopH))
            ? props.desktopH
            : rem(props.desktopH as number | string)};
      }
    `}
`;

const Svg = ({
  id,
  desktopW,
  desktopH,
  tabletW,
  tabletH,
  width,
  height,
  ...restProps
}: ISvgProps) => {
  return (
    <StSvg
      width={width}
      height={height}
      tabletW={tabletW}
      tabletH={tabletH}
      desktopW={desktopW}
      desktopH={desktopH}
      {...restProps}
    >
      <use href={`/assets/sprite.svg#${id}`} />
    </StSvg>
  );
};

export default Svg;
