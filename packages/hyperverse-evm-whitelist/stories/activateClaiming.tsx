import { useWhitelist } from '../source';
import { useEvm } from '@decentology/hyperverse-evm';
import './style.css';

export const ActivateClaiming = ({ ...props }) => {
	const { activateClaiming } = useWhitelist();
	const { Connect } = useEvm();

	return (
		<>
			<Connect />
			<button
				type="button"
				className={['storybook-button', `storybook-button--large`].join(' ')}
				style={{ color: 'blue' }}
				onClick={() => {
					activateClaiming();
				}}
			>
				Activate Claiming
			</button>
		</>
	);
};
