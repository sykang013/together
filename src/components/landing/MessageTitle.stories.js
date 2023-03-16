import MessageTitle from './MessageTitle';

export default {
  title: '컴포넌트/랜딩페이지/메시지타이틀',
  component: MessageTitle,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export const Primary = { //지정안해주면 안떠서 임시 지정
  args: {
    primary: true,
  },
};