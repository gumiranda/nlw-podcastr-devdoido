import { Story, Meta } from '@storybook/react/types-6-0'

import LayoutPodcast from './LayoutPodcast'

export default {
   title: 'LayoutPodcast',
   component: LayoutPodcast
} as Meta;

export const Basic: Story = (args) => <LayoutPodcast {...args} />;
