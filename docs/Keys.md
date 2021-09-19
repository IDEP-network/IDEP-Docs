---
title: Keys
---

## Helpful commands regarding keys
<br/>

## Account:

### Generate new keys

You need an account private and public key pair to be able to receive funds, send txs, bond tx, etc.

```
iond keys add <account_name>
```

### Show all your available keys:
```
iond keys list
```

### Recover keys with mnemonic seed phrase:
```
iond keys add <account_name> --recover
```

## Validator:

### Generate new validator keys:

```
iond tx staking create-validator --amount <amount> --from <accAddress> --pubkey $(iond tendermint show-validator) --commission-rate <rate> --commission-max-rate <rate> --commission-max-change-rate <rate> --min-self-delegation <min-self-delegation-amount> --chain-id Test-Denali
```

### Show your nodes validator consensus address:

```
iond tendermint show-address
```

### Show your nodes validator pubkey:
```
iond tendermint show-validator
```

### Show your nodes validator *operators* address:
```
iond keys show <key address> --bech val
```

