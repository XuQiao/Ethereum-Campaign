const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
	'stomach arch pretty flee pass replace spike private student orange case bonus',
	'https://rinkeby.infura.io/v3/71d80bfe149b4b478b13784f14b4025c'
);

const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();
	console.log('Attempting to deploy from account', accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
		.deploy({ data: compiledFactory.bytecode})
		.send({ gas: '1000000', from: accounts[0] });

	console.log('Contract deployed to', result.options.address);
};

deploy();