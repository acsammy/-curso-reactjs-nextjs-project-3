import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae corporis sint magni nulla alias laborum eligendi dolore, at sed veritatis velit deleniti iusto sunt laboriosam! Illum delectus quo quibusdam ea!`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
