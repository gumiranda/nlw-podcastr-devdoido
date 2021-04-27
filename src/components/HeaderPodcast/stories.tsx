import { Story, Meta } from '@storybook/react/types-6-0';

import HeaderPodcast from './HeaderPodcast';

export default {
  title: 'HeaderPodcast',
  component: HeaderPodcast
} as Meta;

export const Basic: Story = (args) => <HeaderPodcast {...args} />;
