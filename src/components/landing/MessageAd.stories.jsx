import MessageAd from '@/components/landing/MessageAd';
// import { withRouter } from 'storybook-addon-react-router-v6';
// import { withRouter } from 'react-router-dom';

export default {
  title: 'LadingPage/MessageAd',
  component: MessageAd,
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    content: 'React Router 설정이 프리즈 한 듯 보입니다.22',
  },
  // decorators: [withRouter],
};
