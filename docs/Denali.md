---
title: Joining IDEP's Public Testnet Denali
---

![Denali](/img/Denali1.png)

## Quick rundown

* Make sure you have completed the [installation](Installation.md) successfully.

* Initialize your node with your moniker

* Copy the genesis file from the IDEP repo and place it in the nodes config directory

* Start the node
```
iond init <moniker> --chain-id Test-Denali

iond keys add <accountname>

wget https://raw.githubusercontent.com/IDEP-network/testnet-binaries/main/Denali-0.0.1/genesis.json?token=APTYVG5VFPHLIWZB6NPQSIDBDSF7O

mv genesis.json ~/ion/config/

iond start --p2p.persistent_peers=95a7b71ab6ad8fad5f1ed3b49472683adea92cf1@142.93.65.220:26656,dc07da4be6ff285a1be2e9501fa92efef248d025@64.225.75.108:26656
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
