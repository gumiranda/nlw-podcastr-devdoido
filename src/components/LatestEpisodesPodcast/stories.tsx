import { Story, Meta } from '@storybook/react/types-6-0';

import LatestEpisodesPodcast from './LatestEpisodesPodcast';

export default {
  title: 'LatestEpisodesPodcast',
  component: LatestEpisodesPodcast
} as Meta;

export const Basic: Story = (args) => (
  <LatestEpisodesPodcast
    episodeList={[]}
    title={'React Avançado'}
    latestEpisodes={[]}
    {...args}
  />
);
