require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give close brown slab carpet radar muscle hospital hope entry army gather'; 
let testAccounts = [
"0x94ad4b62869ef5f4b16ae607cd3b786fcfc2528c38b6b01ba60f659075a16944",
"0x6257d78d4d79a7e7fe896fff804c740a810e210cdb01da6479a2555bd5694226",
"0x42f900baf5a04673b2d2ced75be94553af0c23653d2146a622781cf5fc5ceba2",
"0x2a2f1c7651ee50886c1db21ef075a329386f3ff5cbe80e3a346cf5aa5de3e496",
"0x59c2a56c433d2971e5adb40ceef874477de4004564946f9e346d76ea78388b2e",
"0x640050f3a4035f953cce01c6b6bbdbc4c4bc91cc063ae6e1be528a59b2df91be",
"0x6f49f5faa480dcd0fc2b55d12f7651baf08c2e05b3ad25a3d065aaec4f799bb1",
"0xf606d003d9cbf06a65b035bdbefa43e25ea2f0e1a102f3eaa65d3ecdf76ea2ab",
"0x8bf4b9e7fdc1269a7a358dad80eba6163f944e75b1f38e8531e0742cbf96f64f",
"0xa0c6a71e36a0cb70f34ad3c9bcf025f8fbcfe612f21a3ba27ae3fa572b5205ba"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


