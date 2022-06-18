import { GetBalance } from './getBalance';
import { HyperverseProvider } from './utils/Provider';
import React from 'react';
import { Doc } from '../docs/getBalance.mdx';

export default {
	title: 'Components/GetBalance',
	component: GetBalance,
	parameters: {
		docs: {
			page: Doc,
		},
	},
};

const Template = (args) => (
	<HyperverseProvider>
		<GetBalance {...args} />
	</HyperverseProvider>
);

export const Demo = Template.bind({});

Demo.args = {
	tenantId: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266', // tenantId from hyperverse provider
	account: '0x4ddbaf7fe601ac46', // test blocto address
};
