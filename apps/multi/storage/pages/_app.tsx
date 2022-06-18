import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { initialize, Network, Provider, storage } from '@decentology/hyperverse';
import { Metis } from '@decentology/hyperverse-metis';
import { Provider as IPFSProvider } from '@decentology/hyperverse-storage-ipfs';
function MyApp({ Component, pageProps }: AppProps) {
	const hyperverse = initialize({
		blockchain: Metis,
		network: Network.Testnet,
		modules: [],
	});
	return (
		<Provider initialState={hyperverse}>
			<IPFSProvider>
				<Component {...pageProps} />
			</IPFSProvider>
		</Provider>
	);
}

export default MyApp;
