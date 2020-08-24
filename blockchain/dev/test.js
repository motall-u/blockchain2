//Import our constructor function and methods
const Blockchain=require('./blockchain');

//Creation of new Blockchain
const bitcoin = new Blockchain();//premier block deja initialiser


//On enregistre les transactions pour le deuxieme block
bitcoin.createNewTransaction(140,'jbkjdjblk','bjdjbkdj');
bitcoin.createNewTransaction(130,'jbkjkjblk','bjdjbkdj');
bitcoin.createNewTransaction(100,'jbkjkjwlk','bjsjbkdj');
bitcoin.createNewTransaction(150,'dnlddd','kjfkjf');
bitcoin.createNewTransaction(200,'dnlvdddd','kjfdkjf');



//Pending transactions
const currentTrans= bitcoin.pendingTransactions;
//previousHash
const previousHash=bitcoin.chain[bitcoin.chain.length -1].hash;


//Proof of work
//return nonce
const proof_nonce= bitcoin.proofOfWork(previousHash, currentTrans);//previousBlockHash,currentBlockData

// //Hash block
// //previousBlockHash,currentBlockData, nonce
// //Start with 0000 
const hash_block=bitcoin.hashBlock(previousHash,currentTrans,proof_nonce);

//Create new block
bitcoin.createNewBlock(proof_nonce,previousHash,hash_block);//nonce,previousBlockHash, hash

bitcoin.createNewTransaction(140,'jbkjdjblk','bjdjbkdj');
bitcoin.createNewTransaction(130,'jbkjkjblk','bjdjbkdj');
bitcoin.createNewTransaction(100,'jbkjkjwlk','bjsjbkdj');
bitcoin.createNewTransaction(150,'dnlddd','kjfkjf');
bitcoin.createNewTransaction(200,'dnlvdddd','kjfdkjf');

//Pending transactions
const currentTranss= bitcoin.pendingTransactions;
//previousHash
const previousHashs=bitcoin.chain[bitcoin.chain.length -1].hash;

//Proof of work
//return nonce
const proof_nonces= bitcoin.proofOfWork(previousHash, currentTrans);//previousBlockHash,currentBlockData

// //Hash block
// //previousBlockHash,currentBlockData, nonce
// //Start with 0000 
const hash_blocks=bitcoin.hashBlock(previousHash,currentTrans,proof_nonce);
bitcoin.createNewBlock(proof_nonces,previousHashs,hash_blocks);//nonce,previousBlockHash, hash


console.log(bitcoin.chain[bitcoin.chain.length -1].transactions);

// //Fin block
// //Debut des autres transactions
//console.log(bitcoin);


// //////////////
// bitcoin.createNewTransaction(140,'jbkjdjblk','bjdjbkdj');
// bitcoin.createNewTransaction(130,'jbkjkjblk','bjdjbkdj');
// bitcoin.createNewTransaction(100,'jbkjkjwlk','bjsjbkdj');
// bitcoin.createNewTransaction(150,'dnlddd','kjfkjf');
// bitcoin.createNewTransaction(200,'dnlvdddd','kjfdkjf');
// console.log(bitcoin);












// //Create a new block
// bitcoin.createNewBlock(1,'bKBJKBKJj','KBKBKBK');//nonce,previousBlockHash, hash
// //Plusieurs transactions dans une meme block
// bitcoin.createNewTransaction(100,'jbkjkjblk','bjdjbkdj');
// bitcoin.createNewTransaction(150,'dnlddd','kjfkjf');
// bitcoin.createNewTransaction(200,'dnlvdddd','kjfdkjf');

// //Pending transactions
// const currentTrans= bitcoin.pendingTransactions;


// //Proof of work
// //return nonce
// const proof_nonce= bitcoin.proofOfWork(0, currentTrans);//previousBlockHash,currentBlockData

// //Hash block
// //previousBlockHash,currentBlockData, nonce
// //Start with 0000 
// const hash_block=bitcoin.hashBlock(0,currentTrans,proof_nonce);
// //console.log(hash_block);

// //After, we create a new block
// //previousBlockHash=hash_block
// //After insert transactions, we calculate the new hash block

// bitcoin.createNewBlock(89985,hash_block,'KBsKBKBK');//nonce,previousBlockHash, hash
// console.log(bitcoin);









// const previousBlockHash='kbkjsbkjsbsbjksj';
// const currentBlockData=[
// 	{
// 		amount:232,
// 		sender:'mody',
// 		recipient:'Tall'
// 	},
// 	{
// 		amount:500,
// 		sender:'fall',
// 		recipient:'Sarr'
// 	},{
// 		amount:400,
// 		sender:'Pape',
// 		recipient:'Ndiaye'
// 	},
// ];

// const hashBlock=bitcoin.hashBlock(previousBlockHash,currentBlockData,32163);


console.log();  