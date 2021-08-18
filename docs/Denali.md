---
title: Joining IDEP's Public Testnet Denali
---

![Denali](/img/Denali1.png)

## Quick rundown

* Make sure you have completed the [installation](Installation.md) successfully.

* Initialize your node with your moniker

* Copy the genesis file from the IDEP repo and placedo it in the nodes config directory

* Start the node
```
iond init <moniker> --chain-id Test-Denali

iond keys add <accountname>

wget https://raw.githubusercontent.com/IDEP-network/testnet-binaries/main/Denali-0.0.1/genesis.json?token=APTYVG5VFPHLIWZB6NPQSIDBDSF7O

mv genesis.json ~/ion/config/

iond start --p2p.persistent_peers=3285f676050842aea5ce0c5968ef4b1579ffc8d9@104.131.46.133:26656,19f7aa0f2da7e6a01372be459a9c43bec6ac2191@64.225.75.108:26656
```

## Validator-Setup

Once the Full Node is up and running. Please share your IDEP address with the IDEP team. We will fund your address.
```
You can @ or DM denny007#3282 on Discord.
```
To get your Public Address
```
iond keys list
```
To get the Validator-pub-key
```
iond tendermint show-validator
```
Command to create a Validator
```
iond tx staking create-validator --amount <amount> --from <from-address> --pubkey <validator-pub-key> --commission-rate 0.01 --commission-max-rate 0.05 --commission-max-change-rate 0.005 --min-self-delegation 1 --chain-id Test-Denali
```
## FAQ

Example of a command to create a Validator
```
iond tx staking create-validator --amount 15000000000000idep --from idep1d2nqcwf9zz9fx7xlesyt0gc3utfxe2mk6nfwey --pubkey idepvalconspub1zcjduepqztw5yzm5wj0yc600aaemxlmda5488jv9hycxfnta3w7vz9jgpawqc9qnhs --commission-rate 0.01 --commission-max-rate 0.05 --commission-max-change-rate 0.005 --min-self-delegation 1 --chain-id Test-Denali
```
