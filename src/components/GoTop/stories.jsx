import { GotTop } from '.';

export default {
  title: 'GotTop',
  component: GotTop,
  args: {
    children: 'GotTop',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <GotTop {...args} />
    </div>
  );
};
