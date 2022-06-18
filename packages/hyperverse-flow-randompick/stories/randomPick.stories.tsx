import { RandomPick } from './randomPick';
import { HyperverseProvider } from './utils/Provider';
import React from 'react';
import { Doc } from '../docs/randomPick.mdx';

export default {
	title: 'Components/RandomPick',
	component: RandomPick,
	parameters: {
		docs: {
			page: Doc,
		},
	},
};

const Template = (args) => (
	<HyperverseProvider>
		<RandomPick {...args} />
	</HyperverseProvider>
);

export const Demo = Template.bind({});

Demo.args = {
	values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
};
