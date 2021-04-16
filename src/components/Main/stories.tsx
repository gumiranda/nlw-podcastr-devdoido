import Main from './Main';
import { Story, Meta } from '@storybook/react/types-6-0';
export default {
  title: 'Main',
  /* forma alternativa de passar args
  args: { title: 'lalala', description: 'nnnn' },
   */
  component: Main
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;

Basic.args = {
  title: 'React Avançado',
  description: 'Typescript, ReactJS, NextJS e Styled Components'
};
