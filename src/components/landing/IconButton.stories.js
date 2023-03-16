import IconButton from './IconButton'; //스토리 작성할 컴포넌트 불러오기

//메타 정보
//메타정보는 default로 내보내야합니다(API 약속)
// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: '메인페이지/아이콘버튼', //왼쪽 사이드바에 표시될 카테고리,컴포넌트 이름
  component: IconButton, //Story를 작성할 컴포넌트 설정
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    이렇게추가도가능: {
      description: '이렇게 적기도 가능',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: '느엉느엉',
  },
};

export const Secondary = {
  args: {
    primary: false,
    label: '부엉부엉',
  },
};

export const Mobile = {
  args: {
    size: 'mobile',
    label: '모바일 버튼입니다',
  },
};

export const Tablet = {
  args: {
    size: 'tablet',
    label: '태블릿 버튼입니다',
  },
};

export const Desktop = {
  args: {
    size: 'desktop',
    label: '데스크탑 버튼입니다',
  },
};
