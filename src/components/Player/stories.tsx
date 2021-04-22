import { Story, Meta } from '@storybook/react/types-6-0'

import Player from './Player'

export default {
   title: 'Player',
   component: Player
} as Meta;

export const Basic: Story = (args) => <Player {...args} />;
