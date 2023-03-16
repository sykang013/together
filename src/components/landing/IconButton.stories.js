import IconButton from './IconButton'; //스토리 작성할 컴포넌트 불러오기

//메타 정보
//메타정보는 default로 내보내야합니다(API 약속)
// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: '컴포넌트/랜딩페이지/아이콘버튼', //왼쪽 사이드바에 표시될 카테고리,컴포넌트 이름
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
    label: '프라이머리 기본값',
  },
};

export const Secondary = {
  args: {
    primary: false,
    label: '세컨더리 기본값',
  },
};

export const Mobile = {
  args: {
    size: 'mobile',
  },
};

export const Tablet = {
  args: {
    size: 'tablet',
  },
};

export const Desktop = {
  args: {
    size: 'desktop',
  },
};
