import IconButton from '@/components/landing/IconButton';
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'LadingPage/Button',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = {};
