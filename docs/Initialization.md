---
Title: Initialization
---

## Manual Setup of a new Node

**These instructions are for setting up a brand new full node from scratch.**

Initialize the node:
```
iond init <moniker> --chain-id Test-Denali
```
Note Monikers can contain only ASCII characters. Using Unicode characters is not supported and renders your node unreachable.

By default, the init command creates your ~/.ion directory with subfolders config and data. In the config directory, the most important files for configuration are app.toml and config.toml.
```
iond keys add <accountname>
```
Make sure you save your mnemonic in a secure location!

Next make your way to the nodes config directory:
```
cd ~/.ion/config/
```
Remove the genesis.json and replace it with the one provided for the network you are trying to connect to.

## Start the node

You can now start the node with the following command:
```
iond start --p2p.persistent_peers=95a7b71ab6ad8fad5f1ed3b49472683adea92cf1@142.93.65.220:26656,dc07da4be6ff285a1be2e9501fa92efef248d025@64.225.75.108:26656
```
**Note** The following example is taken from the testnet Denali, and will be different for mainnet.

Now check the status of your node with:
```
iond status
```
You can stop the node at any time using Ctrl+C.