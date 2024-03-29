import { useState } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { useEthereum } from '@decentology/hyperverse-ethereum';
import { useERC20 } from '@decentology/hyperverse-evm-erc20';
import {
	Box,
	Item,
	TriggerContainer,
	Trigger,
	Parameters,
	Input,
	Content,
	Button,
} from '../ComponentStyles';
import { useMutation } from 'react-query';

const TransferFrom = () => {
	const { account } = useEthereum();
	const erc20 = useERC20();
	const { mutate, isLoading } = useMutation('transferFrom', erc20.transferFrom);

	const [from, setFrom] = useState('');
	const [receiver, setReceiver] = useState('');
	const [amount, setAmount] = useState(0);

	const transferFrom = async () => {
		try {
			const instanceData: { from: string; to: string; amount: number } = {
				from: from,
				to: receiver,
				amount: amount,
			};

			mutate(instanceData);
		} catch (error) {
			throw error;
		}
	};

	return (
		<Box>
			<h4>Transfer From</h4>
			<p>Transfers tokens from one account to another</p>
			<Accordion.Root type="single" collapsible>
				<Item value="item-1">
					<TriggerContainer>
						<Trigger disabled={!account}>
							{!account ? 'Connect Wallet' : 'Transfer From'}
						</Trigger>
					</TriggerContainer>
					<Parameters>
						<Content>
							<Input placeholder="From" onChange={(e) => setFrom(e.target.value)} />
							<Input placeholder="To" onChange={(e) => setReceiver(e.target.value)} />
							<Input
								type="number"
								min="0"
								placeholder="Amount to transfer"
								onChange={(e) => setAmount(e.currentTarget.valueAsNumber)}
							/>
							<Button onClick={transferFrom}>
								{!account
									? 'Connet Wallet'
									: isLoading
									? 'txn loading ...'
									: 'Transfer '}
							</Button>
						</Content>
					</Parameters>
				</Item>
			</Accordion.Root>
		</Box>
	);
};

export default TransferFrom;
