import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	//'0x0Eaf279bD40f5823edE04c1CBB026463F77c84bc'，
	'0x8aFe82CbA9dE0F37288fCD76744E223E1ad47F57'
);

export default instance;