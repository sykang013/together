import { Button2 } from './Button2';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: 'Example2/Button2',
  component: Button2,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      description: '배경색 설명',
      //백그라운드를 컬러피커로 설정합니다(그밖에 텍스트, 토글, 선택 등 있음)
      control: 'color',
    },
    size: {
      description: '사이즈 설명',
    },
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
