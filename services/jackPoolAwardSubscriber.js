const { Web3 } = require('web3')

const web3 = new Web3('wss://neat-rough-star.matic.quiknode.pro/a20d4f07b76246dde412f689262d1172d17be18d');
const eventJsonInterface = {
  anonymous: false,
  inputs: [
    {
      indexed: true,
      internalType: 'address',
      name: 'account',
      type: 'address',
    },
    {
      indexed: false,
      internalType: 'uint256',
      name: 'coins',
      type: 'uint256',
    },
    {
      indexed: false,
      internalType: 'uint32',
      name: 'reward',
      type: 'uint32',
    },
    {
      indexed: false,
      internalType: 'uint32',
      name: 'state',
      type: 'uint32',
    },
  ],
  name: 'Awarded',
  type: 'event',
};

 const jackPoolAwardSubscribe = (address) => {
  web3.eth.subscribe(
    'logs',
    {
      address,
      // topics: ['0x981406ca568f425fc6b5e893522f9684a57e144769c5112dfd49efad4a709b2a'],
    },
    (error, result) => {
      if (!error) {


          const eventObj = web3.eth.abi.decodeLog(eventJsonInterface.inputs, result.data, result.topics.slice(1));
        
          console.log('Awarded ', eventObj);
   
      } else {
        console.log(error);
      }
    }
  );
};
module.exports = {
  jackPoolAwardSubscribe
}