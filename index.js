const { error } = require('console');
const fs = require('fs')

const loadWallets = filename => 
    fs 
        .readFileSync(filename)
        .toString('utf-8')
        .split('\n');

let wallets = loadWallets('wallets.txt')

JSON.stringify('wallets')

const saveOutput = data => 
    fs.appendFile('result.txt', data, (err) => {
        console.log('Added a new string')
    })
    

for (let i = 0; i < wallets.length; i++) { 
    if (!wallets[i].startsWith("bc1", 0)) {
        saveOutput(wallets[i])
    }
}
