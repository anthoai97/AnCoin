const { BlockChain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1')

const mykey = ec.keyFromPrivate('ba82637b59f6f4661c89e65287cd9ea0a4edfd3d19100730b565ed5d4f0d5e36');
const myWalletAddress = mykey.getPublic('hex');

let anCoin = new BlockChain();

const tx1 = new Transaction(myWalletAddress, 'publiec key go here', 10);
tx1.signTransaction(mykey);
anCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
anCoin.minePendingTransaction(myWalletAddress);

console.log('\n Banlce of an-address is ', anCoin.getBalanceOfAddress(myWalletAddress));

console.log('Is chain valid?', anCoin.isChainValid());