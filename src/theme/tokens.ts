interface ITokens {
  colors: {
    [key: string]: string;
  };
  fonts: {
    [key: string]: {
      [key: string]: string;
    };
  };
}

export const tokens: ITokens = {
  colors: {
    '--black': '#000000',
    '--white': '#ffffff',
    '--gray100': '#e1e1e1',
    '--gray200': '#c4c4c4',
    '--gray300': '#a6a6a6',
    '--gray400': '#898989',
    '--gray500': '#6b6b6b',
    '--gray600': '#565656',
    '--gray700': '#404040',
    '--gray800': '#2b2b2b',
    '--gray900': '#151515',
    '--primary': '#182FFF',
    '--secondary': '#1728C0',
    '--dark-bg1': '#191919',
    '--dark-bg2': '#212121',
  },
  fonts: {
    headingM: {
      'font-family': 'Pretendard',
      'font-style': 'normal',
      'font-weight': '700',
      'font-size': '1rem', //16px
      'line-height': '140%',
    },
    headingL: {
      'font-family': 'Pretendard',
      'font-style': 'normal',
      'font-weight': '700',
      'font-size': '1.33125rem', //21.3px
      'line-height': '140%',
    },
    headingXL: {
      'font-family': 'Pretendard',
      'font-style': 'normal',
      'font-weight': '700',
      'font-size': '1.775rem', //28.4px
      'line-height': '140%',
    },
    headingXXL: {
      'font-family': 'Pretendard',
      'font-style': 'normal',
      'font-weight': '700',
      'font-size': '2.36875rem', //37.9px
      'line-height': '140%',
    },
    headingXXXL: {
      'font-family': 'Pretendard',
      'font-style': 'normal',
      'font-weight': '700',
      'font-size': '3.15625rem', //50.5px
      'line-height': '140%',
    },
    LabelS: {
      'font-family': 'Pretendard',
      'font-style': 'normal',
      'font-weight': '600',
      'font-size': '0.75rem', //12px
      'line-height': '150%',
    },
    LabelM: {
      'font-family': 'Pretendard',
      'font-style': 'normal',
      'font-weight': '600',
      'font-size': '1rem', //16px
      'line-height': '150%',
    },
    LabelL: {
      'font-family': 'Pretendard',
      'font-style': 'normal',
      'font-weight': '600',
      'font-size': '1.33125rem', //21.3px
      'line-height': '150%',
    },
    LabelXL: {
      'font-family': 'Pretendard',
      'font-style': 'normal',
      'font-weight': '600',
      'font-size': '1.775rem', //28.4px
      'line-height': '150%',
    },
    LabelXXL: {
      'font-family': 'Pretendard',
      'font-style': 'normal',
      'font-weight': '600',
      'font-size': '2.36875rem', //37.9px
      'line-height': '150%',
    },
    ParagraphS: {
      'font-family': 'Pretendard',
      'font-style': 'normal',
      'font-weight': '400',
      'font-size': '0.75rem', //12px
      'line-height': '160%;',
    },
    ParagraphM: {
      'font-family': 'Pretendard',
      'font-style': 'normal',
      'font-weight': '400',
      'font-size': '1rem', //16px
      'line-height': '160%;',
    },
    ParagraphL: {
      'font-family': 'Pretendard',
      'font-style': 'normal',
      'font-weight': '400',
      'font-size': '1.33125rem', //21.3px
      'line-height': '160%;',
    },
    ParagraphXL: {
      'font-family': 'Pretendard',
      'font-style': 'normal',
      'font-weight': '400',
      'font-size': '1.775rem', //28.4px
      'line-height': '160%;',
    },
  },
};
