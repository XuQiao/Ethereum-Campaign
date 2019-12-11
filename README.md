# Ethereum-Campaign
a demo project for using blockchain/ethereum to redesign kickstarter

After finishing the course displayed below:
https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/

I created and deployed a Dapp that is used for crowd funding.
******************************************************************************************************************************************************************
Online app:
https://qiaoxu.ml:3000

The basic idea is when people needs some money for his/her career, project, or even sickness, 
it is hard to collect enough money all at a time.
So there are many platforms online that helps the kickstarter to created a campaign to raise money from the internet. 
When normal people invest on the campaign, a final product or some report is expected. 
If the project succeed, the investor would not only 

However, in traditional crowdfunding, there exists many malicious people who took advantage of people's kindness, 
they may get away with the money or spend on something that is not supposed to. 

The merit of blockchain technology is to solve this issue. By using the power of "Solidity Smart Contract". 
The mechanism is that the money raised would not going to the manager(starter) directly, it would go into the contract.

When the manager realize some money is needed to drawn, the manager would raise a request from the contract to some vendors, 
only when enough contributors approve this request,
the money would go to the vendors so the manager is not able to spend the money without any constraint.

All the work done does not go through a centralized organization, but the blockchain itself.

All the transaction are done through Rinkeby Ethereum Test Network, and you can request many Ethers freely on 

https://faucet.rinkeby.io/

******************************************************************************************************************************************************************
There are many new ideas behind this project related to blockchain comparing to traditional centralized organization.

The essence is:

The blockchain itself maintain a huge database, anyone could modify it, but whenever things you changed, you need to pay some 'gas' fees,
including approving requests, creating campaigns, etc., 

those gas are used to pay to the 'miners' who solved some math problems and helped to protect the integrity of the network.

The blockchain itself is organized in a way such that any previous changes would results in massive changes in the future.

If you intend to modify some content, you create another totally different chain but at this time no one will agree with you. 
Unless your transaction is legitimated, then the main blockchain will not the changed.
![original chain](https://www.qiaoxu.ml/wp-content/uploads/2019/12/Screen-Shot-2019-12-11-at-11.49.07-AM-1024x509.png)
![modified chain results in dis-agreement with most other nodes.](https://www.qiaoxu.ml/wp-content/uploads/2019/12/Screen-Shot-2019-12-11-at-11.49.15-AM-1024x492.png)

******************************************************************************************************************************************************************
Another big aspect in this class is about javascipt, including ES6, async/await, next.js, routing, styling, etc,. 
To make an app work, a smart contract itself is not the whole story, we need front end browser to actual interact with users.

******************************************************************************************************************************************************************
How to use the website
Suppose you want to launch a campaign to raise money, you create a campaign with a minimum account, 
say 100,000,000,000,000wei, (~0.0001 eth), and people will start to donate money to your campaign. 
You start to say, 'oh I need to buy some material for my product' so you submit a request to then wait for donor to approve.
Once there are more than half of the donor approving, you are ready to finalize the request, 
and then the money is sent to the factory and you received your product soon.

