import {
	isEvm,
	Blockchain,
	BlockchainEvm,
	EvmEnvironment,
	NetworkConfig,
} from '@decentology/hyperverse';
import TribesFactory from '../artifacts/contracts/TribesFactory.sol/TribesFactory.json';
import Tribes from '../artifacts/contracts/Tribes.sol/Tribes.json';
import Contracts from '../contracts.json';
import { ContractInterface } from 'ethers';
export const ContractABI = Tribes.abi as ContractInterface;
export const FactoryABI = TribesFactory.abi as ContractInterface;

const environment = Contracts as EvmEnvironment;

function getEnvironment(blockchainName: Blockchain, network: NetworkConfig) {
	if (blockchainName == null) {
		throw new Error('Blockchain is not set');
	}
	if (!isEvm(blockchainName)) {
		throw new Error('Blockchain is not EVM compatible');
	}

	const chain = environment[blockchainName as BlockchainEvm];
	if (!chain) {
		throw new Error('Blockchain is not supported');
	}
	const env = chain[network.type];
	return {
		...env,
		ContractABI,
		FactoryABI,
	};
}

export { environment, getEnvironment };
