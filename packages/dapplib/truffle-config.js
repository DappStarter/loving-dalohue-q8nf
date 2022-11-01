require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index rate mad mistake half private equal gate'; 
let testAccounts = [
"0x75df0a376b39aeb5299d119fc523d256352d8521bbe84316031fcedadf7856c4",
"0xe958ca7708b11e47d0abe23d996165bff11db9fbf176b8bac2bdec64f7b0aba4",
"0xa1751be634b45e03b1adf69ec48fb917ed8a9456ade93ba012b0e642f4592e0e",
"0xf7d8e6bd83f7a0b401cd8554af572bdbe72d1c0f30855d0b3281c078af617011",
"0x9959800b3dceb1304a13a6aa735ca6cb2ff1f6ed542883447990b4325c781c1f",
"0xedcb55377d6898555ef31c87f253f0a4bde4a703a7429c05b2b74ac9a7a66e4f",
"0x1e168d1270411c836794cee408a1b8a2f03b8a08b376abd130115626fa331ebe",
"0xd5160c78abab963a71689b141900fc580fa9f2866d853762cfe09e78afd9adb4",
"0xf240a8b8c7077f6109538f94f1005b9269aaa61c1d2c38275829843164ab345c",
"0x641af49d6753969b20616405447bab474c6f0c68b9d83cc00766c745fd891f00"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

