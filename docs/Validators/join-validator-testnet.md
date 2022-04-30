---
title: Join as a Validator
---

## How to become a validator on IDEP Network

In order to become an active validator, you must have more stake than the bottom validator.
You may still execute the following steps, but you will not be active and therefore **won't receive staking rewards**.

### 1. Run a new full node on a new machine.
In order to become a validator, you node must be fully synced with the network. You can check this by doing:
```
iond status
```
When the value of` catching_up` is *false*, your node is fully synced with the network.
```
"sync_info": {
"latest_block_hash": "7BF95EED4EB50073F28CF833119FDB8C7DFE0562F611DF194CF4123A9C1F4640",
"latest_app_hash": "7C0C89EC4E903BAC730D9B3BB369D870371C6B7EAD0CCB5080B5F9D3782E3559",
"latest_block_height": "668538",
"latest_block_time": "2020-10-31T17:50:56.800119764Z",
"earliest_block_hash": "E7CAD87A4FDC47DFDE3D4E7C24D80D4C95517E8A6526E2D4BB4D6BC095404113",
"earliest_app_hash": "",
"earliest_block_height": "1",
"earliest_block_time": "2021-09-15T14:02:31Z",
"catching_up": false
},
```

### 2. Set your `minimum-gas-price parameter

We recommend starting with 0.0125uidep per gas unit:
```
perl -i -pe 's/^minimum-gas-prices = .+?$/minimum-gas-prices = "0.0125uidep"/' ~/.iond/config/app.toml
sudo systemctl restart secret-node
```

Your validator will not accept transactions that specify `--gas-price` lower than the` minimun-gas-price` you set here.

### 3. Generate a new key pair for yourself (change `<key-alias>` with any word of your choice, this is just for your internal/personal reference):
```
IDEPcli keys add <key-alias>
```

:::caution
BACKUP YOUR MNEMONICS! Please make sure you also backup your validator
:::

Note: If you already have a key you can import it with the bip39 mnemonic with idepcli keys add `<key-alias>` --recover or with idepcli keys export (exports to stderr!!) & idepcli keys import.

### 4. Transfer tokens to your delegator's address:
This is the idep wallet from which you delegate your funds to you own validator. You must delegate at least 1 IDEP (1000000uidep) from this wallet to your validator.

To create a secret wallet, run:
```
IDEPcli keys add <key-alias>
```
Make sure to backup the mnemonic you got from the above command!

Then transfer funds to address you just created.

### 5. Check that you have the funds:
```
IDEPcli q bank balances $(secretcli keys show -a <key-alias>)
```
If you get the following message, it means that you have no tokens yet:

ERROR: unknown address: account idep1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx does not exist

#6. Join the network as a new validator: replace `<MONIKER>` with the moniker you configured in step 3 of creating a full-node, and adjust the amount you want to stake

remember 1 IDEP = 1,000,000 uidep, and so the command below stakes 100 IDEP.

```
IDEPcli tx staking create-validator \
--amount=100000000uscrt \
--pubkey=$(iond tendermint show-validator) \
--identity={KEYBASE_IDENTITY} \
--details="To infinity and beyond!" \
--commission-rate="0.10" \
--commission-max-rate="0.20" \
--commission-max-change-rate="0.01" \
--min-self-delegation="1" \
--moniker=<MONIKER> \
--from=<key-alias>
```
### 7. Check that you have been added as a validator:
```
IDEPcli q staking validators | jq '.[] | select(.description.moniker == "<MONIKER>")'
```
Or run: `IDEPcli q staking validators | grep moniker`. You should see your moniker listed.

:::danger
### Dangers in running a validator
:::
There are a couple of scenarios that can lead to losing a precentage of your and your delegators' stake. These are called slashing events.

The following is updated as of APR 30, 2022.

#### Slashing for downtime
Conditions for downtime:

It's based on actual blocktime as opposed to being based on theoretical blocktime ie (SignedBlocksWindow & MinSignedPerWindow network parameters).

Signing less than `MinSignedPerWindow` blocks out of every `SignedBlocksWindow` window will result in a downtime slash. Blocktime tends to fluctuate on the network.

Parameters: 11250 blocks out of every 22500-blocks.

* For a block time of 6.8 seconds, this roughly translates to being up for 21.25 hours out of every 42.5-hour window.

* For a block time of 6.4 seconds, this roughly translates to being up for 20 hours out of every 40-hour window.

Penalties for downtime:

* Slashing of 0.01% of your and your delegators' staking amount.
* Jailing for 10 minutes of your validator node. You don't earn block rewards for this period and at the end must manually unjail your node with secretcli tx slashing unjail --from `<key-alias>`.

#### Slashing for double-signing
Conditions for double-signing:

* Your validator signs the same block height twice.

* Penalties for double-signing:

* Slashing of 5% of your and your delegators' staking amount.
* Jailing forever (tombstoned) of your validator node. You cannot earn block rewards anymore with this validator and you and your delegators must redelegate your stake to a different validator.

### Protecting your validator agains DDoS attacks

See Sentry Nodes.

### Staking more tokens 

(remember 1 IDEP = 1,000,000 uidep)

In order to stake more tokens beyond those in the initial transaction, run:
```
IDEPcli tx staking delegate $(IDEPcli keys show <key-alias> --bech=val -a) <amount>uscrt --from <key-alias>
```

### Editing your Validator

```
IDEPcli tx staking edit-validator \
--moniker "<new-moniker>" \
--website "https://idep.network" \
--identity 6A0D65E29A4CBC8E \
--details "We come in peace!" \
--chain-id <chain_id> \
--from <key_name> \
--commission-rate "0.10"
```

### Seeing your rewards from being a validator
```
IDEPcli q distribution rewards $(IDEPcli keys show -a <key-alias>)
```

### Seeing your commissions from your delegators
```
secretcli q distribution commission $(secretcli keys show -a <key-alias> --bech=val)
```

### Withdrawing rewards
```
secretcli tx distribution withdraw-rewards $(secretcli keys show --bech=val -a `<key-alias>`) --from `<key-alias>`
```

### Withdrawing rewards+commissions
```
secretcli tx distribution withdraw-rewards $(secretcli keys show --bech=val -a `<key-alias>`) --from `<key-alias>` --commission
```

### Removing your validator

Currently deleting a validator is not possible. If you redelegate or unbond your self-delegations then your validator will become offline and all your delegators will start to unbond.

###  Changing your validator's commission-rate

You are currently unable to modify the `--commission-max-rate` and `--commission-max-change-rate`" parameters.

Modifying the commision-rate can be done using this:
```
IDEPcli tx staking edit-validator --commission-rate="0.05" --from <key-alias>
```

### Slashing
___ 

#### Unjailing

To unjail your jailed validator
```
IDEPcli tx slashing unjail --from <key-alias>
```

#### Signing Info

To retrieve a validator's signing info:
```
IDEPcli q slashing signing-info <validator-conspub-key>
```

#### Query Parameters
You can get the current slashing parameters via:
```
IDEPcli q slashing params
```

#### Query Parameters
You can get the current slashing parameters via:
```
IDEPcli q slashing params
```