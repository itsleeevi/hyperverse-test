import { Algodv2, Indexer } from 'algosdk';
import { Network } from '@decentology/hyperverse';
export const Initialize = async (network: Network) => {
	if (network != null) {
		let client, explorer, indexer;
		if (network == Network.Mainnet) {
			client = new Algodv2('', 'https://algoexplorerapi.io/', '');
			indexer = new Indexer('', 'https://algoexplorerapi.io/idx2', '');
			explorer = 'https://algoexplorer.io';
		} else {
			client = new Algodv2('', 'https://testnet.algoexplorerapi.io', '');
			indexer = new Indexer('', 'https://testnet.algoexplorerapi.io/idx2', '');
			explorer = 'https://testnet.algoexplorer.io';
		}
		const status = await client.status().do();
		if (status['last-round'] > 0) {
			return {
				client,
				explorer,
				extra: {
					indexer
				}
			};
		}
	}
	return {
		client: null,
		explorer: null,
		extra: {
			indexer: null
		}
	};
};
