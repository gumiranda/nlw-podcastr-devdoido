import { Story, Meta } from '@storybook/react/types-6-0';

import EpisodeDetails from './EpisodeDetails';

export default {
  title: 'EpisodeDetails',
  component: EpisodeDetails
} as Meta;

export const Basic: Story = (args) => <EpisodeDetails episode={{}} {...args} />;
