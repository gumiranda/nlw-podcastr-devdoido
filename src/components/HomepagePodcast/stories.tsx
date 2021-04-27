import { Story, Meta } from '@storybook/react/types-6-0';

import HomepagePodcast from './HomepagePodcast';
import Main from 'components/Main';

export default {
  title: 'HomepagePodcast',
  component: HomepagePodcast
} as Meta;

export const Basic: Story = (args) => (
  <HomepagePodcast {...args}>
    <Main />
  </HomepagePodcast>
);
