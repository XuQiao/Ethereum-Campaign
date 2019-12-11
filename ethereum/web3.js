import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	web3 = new Web3(window.web3.currentProvider);
	window.ethereum.enable();
} else {
	const provider = new Web3.providers.HttpProvider(
		'https://rinkeby.infura.io/v3/71d80bfe149b4b478b13784f14b4025c'
	);
	web3 = new Web3(provider);
}
 
export default web3;