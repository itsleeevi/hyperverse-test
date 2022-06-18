import * as Hyperverse from '@decentology/hyperverse';
import { Algorand } from '@decentology/hyperverse-algorand';
import * as Counter from '@decentology/hyperverse-algorand-counter';
import AlgoTest from '../components/AlgoTest';

export default function Web() {
	const hyperverse = Hyperverse.initialize({
		blockchain: Algorand,
		network: Hyperverse.Network.Testnet,
		modules: [{ bundle: Counter, tenantId: '123' }],
	});

	return (
		<Hyperverse.Provider initialState={hyperverse}>
			<div>
				<h1>Web</h1>
				<AlgoTest />
				{/* <Inner /> */}
			</div>
		</Hyperverse.Provider>
	);
}
