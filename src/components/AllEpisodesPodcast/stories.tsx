import { Story, Meta } from '@storybook/react/types-6-0';

import AllEpisodesPodcast from './AllEpisodesPodcast';

export default {
  title: 'AllEpisodesPodcast',
  component: AllEpisodesPodcast
} as Meta;

export const Basic: Story = (args) => <AllEpisodesPodcast allEpisodes={[]} {...args} />;
Basic.args = {
  propExample: 'test'
};
