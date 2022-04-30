---
title: Run Full Node
---
## How To Join IDEP Network as a Full Node

This document details how to join the IDEP Network Sanford-X testnet as a full node. Once your full node is running, you can turn it into a validator in the optional last step.

## Requirements
___ 
* Ubuntu/Debian host (with ZFS or LVM to be able to add more storage easily)
* A public IP address
* Open ports TCP `26656 & 26657` *Note: If you're behind a router or firewall then you'll need to port forward on the network device.*
* Reading Tendermint: Running in production
* RPC address of an already active node. You can use any node that exposes RPC services.
* Refer to Intel Processor Specifications if you're unsure if your processor supports SGX

### Minimum requirements

* 16GB RAM
* 512GB SDD
* 1 dedicated core of any Intel Skylake processor (Intel® 6th generation) or better (Xeon gen3 (Ice Lake) NOT supported)
* Motherboard with support for SGX in the BIOS

### Recommended requirements

* 32GB RAM
* 1TB SSD
* 2 dedicated cores of any Intel Skylake processor (Intel® 6th generation) or better (Xeon gen3 (Ice Lake) NOT supported)
* Motherboard with support for SGX in the BIOS

## Installation

1. Step up SGX on your local machine
See instructions for setup and verification. See registration if you'd like a more comprehensive overview on what's happening in these steps.

### 1. Download the IDEP Network package installer for Debian/Ubuntu:
```bash
wget https://github.com/idepnetwork/<RELEASE>
```
 check the hash of the downloaded binary
```bash
echo "<hash> release" | sha256sum --check
```
[(How to verify releases)]

### 2. Install the package:

```bash
sudo dpkg -i idepnetwork<RELEASE>.deb
```
Verify the installation by doing:
```bash
iond version
```

### 3. Initialize your installation of the IDEP Network.

Choose a **moniker** for yourself, and replace `<MONIKER>` with your moniker below. This moniker will serve as your public nickname in the network.
```bash
iond init <MONIKER> --chain-id Sanford-X
```

### 4. Download a copy of the Genesis Block file: genesis.json
```bash
wget -O ~/.iond/config/genesis.json "https://github.com/idepnetwork/gensis.json"
```

### 5. Validate the checksum for the `genesis.json` file you have just downloaded in the previous step:
```bash
echo "759e1b6761c14fb448bf4b515ca297ab382855b20bae2af88a7bdd82eb1f44b9 $HOME/.iond/config/genesis.json" | sha256sum --check
```

### 6. Validate that the genesis.json is a valid genesis file:
```bash
iond validate-genesis
```
### 7. The rest of the commands should be run from the home folder (/home/<your_username>)
```bash
cd ~
```
### 8. Initialize secret enclave

You can choose between two ways, 8a (automatic) or 8b (manual):

Note: if this machine has been registered before, and have the following files:
```bash
/home/user/.sgx_secrets/
├── consensus_seed.sealed
└── new_node_seed_exchange_keypair.sealed
```
you can move them to /opt/idep/.sgx_secrets and skip to step 16 (if not working, try registering anyway).

### 8a. Initialize secret enclave - Automatic Registration (EXPERIMENTAL)
* **Note**: Make sure SGX is running or this step might fail.

* Make sure the directory `/opt/idep/.sgx_secrets` exists:
```bash
mkdir -p /opt/idep/.sgx_secrets
```

Create env variables:
```bash
export SCRT_ENCLAVE_DIR=/usr/lib
export SCRT_SGX_STORAGE=/opt/idep/.sgx_secrets
```

Register:

```bash
iond auto-register --node http://<IP>:1317 --registration-node http://<IP>>:26667
```

If this step was successful, you can skip straight to step 16

### 8b. Initialize secret enclave - Manual Registration (legacy)
Make sure the directory `/opt/idep/.sgx_secrets/` exists:
```bash
mkdir -p /opt/idep/.sgx_secrets/
```
Make sure SGX is running or this step might fail.
```bash
iond init-enclave
```

### 9. Check that initialization was successful
Attestation certificate should have been created by the previous step
```bash
ls -lh /opt/idep/.sgx_secrets/attestation_cert.der
```

### 10. Check your certificate is valid
Should print your 64 character registration key if it was successful.
```bash
PUBLIC_KEY=$(iond parse /opt/idep/.sgx_secrets/attestation_cert.der  2> /dev/null | cut -c 3-)
echo $PUBLIC_KEY
```

### 11. Config `IDEPcli`, to point to a working node and import a key with some $IDEP
The steps using `IDEPcli` can be run on any machine, they don't need to be on the full node itself. We'll refer to the machine where you are using `IDEPcli` as the "CLI machine" below.

To run the steps with `IDEPcli` on another machine, set up the CLI there.

Configure `IDEPcli`. Initially you'll be using the bootstrap node, as you'll need to connect to a running node and your own node is not running yet.
```bash
IDEPcli config chain-id sanford-x
IDEPcli config node http://<ip>>:26657/
IDEPcli config output json
```

Set up a key. Make sure you back up the mnemonic and the keyring password.
```bash
IDEPcli keys add <key-alias>
```
This will output your address, a 45 character-string starting with `idep1....` Then you can fund it with some $IDEP.

### 12. Register your node on-chain

Run this step on the CLI machine. If you're using a different CLI machine than the full node, copy `/opt/idep/.sgx_secrets/attestation_cert.der` from the full node to the CLI machine.
```bash
IDEPcli tx register auth /opt/idep/.sgx_secrets/attestation_cert.der -y --from <key-alias>
```

### 13. Pull & check your node's encrypted seed from the network

Run this step on the CLI machine.
```bash
SEED=$(IDEPcli query register seed $PUBLIC_KEY | cut -c 3-)
echo $SEED
```
### 14. Get additional network parameters
Run this step on the CLI machine.

These are necessary to configure the node before it starts.
```bash
IDEPcli query register idep-network-params
ls -lh ./io-master-cert.der ./node-master-cert.der
```
If you're using a different CLI machine than the validator node, copy `node-master-cert.der` from the CLI machine to the validator node.

### 15. Configure your IDEP node
From here on, run commands on the full node again.
```bash
mkdir -p ~/.iond/.node
iond configure-secret node-master-cert.der $SEED
```

### 16. Add persistent peers and seeds to your configuration file.
```bash
perl -i -pe 's/seeds = ""/seeds = "7649dcfda0eb77b38fde8e817da8071faea3cd13\@bootstrap.scrt.network:26656,ac74aa5908816a54c0da62b6f1cbfa9cc4a8a4ff\@45.77.125.31:26656"/' ~/.iond/config/config.toml
```
You may use the following peers, or you can choose your own from [this list].
```bash
perl -i -pe 's/persistent_peers = ""/persistent_peers = "555d083ffc6b4acca46fa0c78a545bb799f72296\@morty.secretnodes.com:26656,7c9f5e1cd79c4d5ee83e2a82b133efe0bd74732d\@secret-ibc.blockngine.io:26656,7ecc77c5d79520cd613488e69bfbb324ac22280c\@node.securesecrets.org:26656,4378c3df119539623d190e6b81e359b57b152675\@135.148.55.229:10656,971911193b09a17c347565d311a3cc4f6004156d\@peer.node.scrtlabs.com:26656"/' ~/.iond/config/config.toml
```

### 17. Listen for incoming RPC requests so that light nodes can connect to you:
```bash
perl -i -pe 's/laddr = .+?26657"/laddr = "tcp:\/\/0.0.0.0:26657"/' ~/.iond/config/config.toml
```

### 18. Enable IDEP-node as a system service:
Note that the `idep-node` system file is created in a previous step.
```bash
sudo systemctl enable secret-node
```
### 19. Start `IDEP-node` as a system service:
```bash
sudo systemctl start secret-node
```
### 20. If everything above worked correctly, the following command will show your node streaming blocks (this is for debugging purposes only, kill this command anytime with Ctrl-C):
```bash
journalctl -f -u idep-node
```

```
-- Logs begin at Mon 2022-04-28 12:11:24 UTC. --
Nov 09 11:16:31 idep-node-01 iond[619529]: 11:16AM INF indexed block height=12 module=txindex
Nov 09 11:16:35 idep-node-01 iond[619529]: 11:16AM INF Ensure peers module=pex numDialing=0 numInPeers=0 numOutPeers=0 numToDial=10
Nov 09 11:16:35 idep-node-01 iond[619529]: 11:16AM INF No addresses to dial. Falling back to seeds module=pex
Nov 09 11:16:36 idep-node-01 iond[619529]: 11:16AM INF Timed out dur=4983.86819 height=13 module=consensus round=0 step=1
Nov 09 11:16:36 idep-node-01 iond[619529]: 11:16AM INF received proposal module=consensus proposal={"Type":32,"block_id":{"hash":"0AF9693538AB0C753A7EA16CB618C5D988CD7DC01D63742DC4795606D10F0CA4","parts":{"hash":"58F6211ED5D6795E2AE4D3B9DBB1280AD92B2EE4EEBAA2910F707C104258D2A0","total":1}},"height":13,"pol_round":-1,"round":0,"signature":"eHY9dH8dG5hElNEGbw1U5rWqPp7nXC/VvOlAbF4DeUQu/+q7xv5nmc0ULljGEQR8G9fhHaMQuKjgrxP2KsGICg==","timestamp":"2021-11-09T11:16:36.7744083Z"}
Nov 09 11:16:36 idep-node-01 iond[619529]: 11:16AM INF received complete proposal block hash=0AF9693538AB0C753A7EA16CB618C5D988CD7DC01D63742DC4795606D10F0CA4 height=13 module=consensus
Nov 09 11:16:36 idep-node-01 iond[619529]: 11:16AM INF finalizing commit of block hash=0AF9693538AB0C753A7EA16CB618C5D988CD7DC01D63742DC4795606D10F0CA4 height=13 module=consensus num_txs=0 root=E4968C9B525DADA22A346D5E158C648BC561EEC351F402A611B9DA2706FD8267
Nov 09 11:16:36 idep-node-01 iond[619529]: 11:16AM INF minted coins from module account amount=6268801uscrt from=mint module=x/bank
Nov 09 11:16:36 idep-node-01 iond[619529]: 11:16AM INF executed block height=13 module=state num_invalid_txs=0 num_valid_txs=0
Nov 09 11:16:36 idep-node-01 iond[619529]: 11:16AM INF commit synced commit=436F6D6D697449447B5B373520353520323020352032342031312032333820353320383720313137203133372031323020313638203234302035302032323020353720343520363620313832203138392032333920393920323439203736203338203131322035342032332033203233362034375D3A447D
Nov 09 11:16:36 idep-node-01 iond[619529]: 11:16AM INF committed state app_hash=4B371405180BEE3557758978A8F032DC392D42B6BDEF63F94C2670361703EC2F height=13 module=state num_txs=0
^C
```
You are now a full node. 🎉

### 21. Optimization
In order to be able to handle NFT minting and other Secret Contract-heavy operations, it's recommended to update your SGX memory enclave cache:
```bash
sed -i.bak -e "s/^contract-memory-enclave-cache-size *=.*/contract-memory-enclave-cache-size = \"15\"/" ~/.secretd/config/app.toml
```

### 22. Get your node ID with:
```bash
iondd tendermint show-node-id
```
Be sure to point your CLI to your running node instead of the bootstrap node
```
idepcli config node tcp://localhost:26657
```
If someone wants to add you as a peer, have them add the above address to their `persistent_peers` in their `~/.iond/config/config.toml`.

And if someone wants to use your node from their `IDEPcli` then have them run:
```
idepcli config chain-id Sanford-X
idepcli config output json
idepcli config node tcp://<your-public-ip>:26657
```

### 23. Optional: make your full node into a validator
To turn your full node into a validator, see Joining Mainnet as a Validator.