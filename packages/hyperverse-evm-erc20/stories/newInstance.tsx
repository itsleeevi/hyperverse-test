import * as PropTypes from 'prop-types';
import { useERC20 } from '../source';
import { useEvm } from '@decentology/hyperverse-evm';
import './button.css';

export const NewInstance = ({ ...props }) => {
	const { createInstance } = useERC20();
	const { address, Connect } = useEvm();

	return address ? (
		<button
			type="button"
			className={['storybook-button', `storybook-button--large`].join(' ')}
			style={{ color: 'blue' }}
			onClick={() => {
				createInstance(address);
			}}
		>
			New Instance
		</button>
	) : (
		<Connect />
	);
};

NewInstance.propTypes = {};

NewInstance.defaultProps = {};
