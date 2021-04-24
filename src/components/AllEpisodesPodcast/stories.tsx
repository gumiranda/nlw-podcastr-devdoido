import { Story, Meta } from '@storybook/react/types-6-0';

import AllEpisodesPodcast from './AllEpisodesPodcast';

export default {
  title: 'AllEpisodesPodcast',
  component: AllEpisodesPodcast
} as Meta;

export const Basic: Story = (args) => (
  <AllEpisodesPodcast title="Todos os episódios" allEpisodes={[]} {...args} />
);
Basic.args = {
  title: 'test'
};
