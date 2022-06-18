/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
	'@decentology/unstated-next',
	'@decentology/hyperverse',
	'@decentology/hyperverse-metis',
	'@decentology/hyperverse-storage-ipfs',
	'@decentology/hyperverse-storage-skynet',
]);

module.exports = withTM({
	reactStrictMode: true,
	images: {
		domains: ['ipfs.infura.io', 'cloudflare-ipfs.com', 'hyperverse.infura-ipfs.io'],
	},
});
