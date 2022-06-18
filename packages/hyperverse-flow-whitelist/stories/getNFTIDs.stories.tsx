import { GetNFTIDs } from './getNFTIDs';
import { HyperverseProvider } from './utils/Provider';
import React from 'react';
import { Doc } from '../docs/getNFTIDs.mdx';

export default {
	title: 'Components/GetNFTIDs',
	component: GetNFTIDs,
	parameters: {
		docs: {
			page: Doc,
		},
	},
};

const Template = (args) => (
	<HyperverseProvider>
		<GetNFTIDs {...args} />
	</HyperverseProvider>
);

export const Demo = Template.bind({});

Demo.args = {};
