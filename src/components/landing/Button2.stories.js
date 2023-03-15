import { Button2 } from './Button2';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: 'Example2/Button2',
  component: Button2,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button2',
  },
};

export const Secondary = {
  args: {
    label: 'Button2',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button2',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button2',
  },
};
