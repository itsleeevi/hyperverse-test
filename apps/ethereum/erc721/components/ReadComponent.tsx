import { styled } from '../stitches.config';
import { useEthereum } from '@decentology/hyperverse-ethereum';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';

const shortenHash = (hash: string = '', charLength: number = 6, postCharLength?: number) => {
	let shortendHash;
	if (postCharLength) {
		shortendHash =
			hash.slice(0, charLength) +
			'...' +
			hash.slice(hash.length - postCharLength, hash.length);
	} else {
		shortendHash = hash.slice(0, charLength);
	}
	return shortendHash;
};

type Props = {
	fn: any;
	header: string;
	description: string;
	buttonText: string;
	isAddress?: boolean;
};
const ReadComponent = ({ fn, header, description, buttonText, isAddress }: Props) => {
	const { account } = useEthereum();
	const [hidden, setHidden] = useState(false);
	const { data, error, isLoading } = useQuery<string>(header, fn);

	const dataFetched = isAddress ? shortenHash(data, 5, 5) : data;

	useEffect(() => {
		if (error) {
			if (error instanceof Error) {
				toast.error(error.message, {
					position: toast.POSITION.BOTTOM_CENTER,
				});
			}
		}
	}, [error]);

	return (
		<Box>
			<h4>{header}</h4>
			<p>{description}</p>
			<Button disabled={!account} onClick={() => setHidden((p) => !p)}>
				{!account
					? 'Connect Wallet'
					: isLoading
					? 'fetching ...'
					: !hidden
					? buttonText
					: dataFetched?.toString() || 'N/A'}
			</Button>
		</Box>
	);
};

export default ReadComponent;

const Box = styled('div', {
	maxHeight: '150px',
	maxWidth: '220px',
	display: 'flex',
	flexDirection: 'column',
	backgroundColor: '$blue500',
	borderRadius: '10px',
	color: 'white',
	padding: '30px 20px',
	alignItems: 'center',
	'& h4': {
		marginTop: '10px',
		fontSize: '1.2rem',
		fontWeight: '500',
	},
	'& p': {
		margin: '10px 0 30px',
		fontSize: '0.8rem',
	},
});

const Button = styled('button', {
	minWidth: '150px',
	backgroundColor: '$yellow100',
	outline: 'none',
	border: 'none',
	padding: '10px 15px',
	borderRadius: '90px',
	cursor: 'pointer',
	margin: '10px auto 0',
	'&:hover': {
		opacity: 0.8,
	},
});
