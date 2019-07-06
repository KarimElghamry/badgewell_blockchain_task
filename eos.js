const { Api, JsonRpc } = require('eosjs');
const { JsSignatureProvider } = require('eosjs/dist/eosjs-jssig');
const fetch = require('node-fetch');
const { TextDecoder, TextEncoder } = require('util');


module.exports = {
    runEosContract: async function () {
        const defaultPrivateKey = "5KT9ifvuEcoYtsrBmiprwNmVZTk6RReFL7x6ecRSzwYaZdpufv1";
        const signatureProvider = new JsSignatureProvider([defaultPrivateKey]);

        const rpc = new JsonRpc('https://api-kylin.eoslaomao.com', { fetch });

        const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });
        const result = await api.transact({
            actions: [{
                account: 'slimshadyxvx',
                name: 'hiya',
                authorization: [{
                    actor: 'slimshadyxvx',
                    permission: 'active',
                }],
                data: {
                    author: 'slimshadyxvx',
                    id: 4,
                    description: "lol",
                },
            }]
        }, {
                blocksBehind: 3,
                expireSeconds: 30,
            });
        return result;
    }
};

