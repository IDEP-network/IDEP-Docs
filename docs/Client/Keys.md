---
title: Keys
---

Keys allows you to manage your local tendermint keystore (wallets) for iond.

## Available Commands
___
| Command | Description |
|---------|-------------|
| list | The `list` command lits all the keys stored by this key manager along with their associated name, type, address and pubkey. |
| add | The `add` command lets add an encrypted private key, encrypt it, and save to disk.|
| delete | The `delete` deletes the given key. |
| import | The `import` command imports private keys into the local keybase. |
| export | The `export` command exports private keys. |
| mnemonic | The `mnemonic` command computes the bip39 mnemonic for some input entropy. |
| parse | The `parse` command parses address from hex to bech32 and vice versa. |
| show | The `show` command retrieves key information by name or address. |

## Examples
___

#### iond keys list [flags]
```
iond keys list
```

#### iond keys add [flags]
```
iond keys add
```
You must enter a password that is atleast 8 characters long.

:::caution

Write down your mnemonic in a safe place! It is the only way to recover your account if you ever forget your password!
:::

#### iond keys delete *key-name* [flags]
```
iond keys delete mainkey
```

#### iond keys import *keyname* *keyfile* [flags]
```
iond keys import mainkey examplefile 
```

#### iond keys export *keyname* [flags]
```
iond keys export mainkey [flags]
```

```
iond keys export mainkey --output-file=<path-to-keystore>
```

#### iond keys mnemonic [flags]
```
iond keys mnemonic [flags]
```

To pass your own entropy, use unsafe-entropy mode.
```
iond keys mnemonic --unsafe-entropy
```

#### iond keys parse [hex-or-bech32-address]
```
iond keys parse <hex-or-bech32-address> [flags]
```

#### iond keys show *key-name* [flags]

flags
___
| Name | Default | Description |
|------|---------|-------------|
| --address	 | false | Output the address only (overrides --output) | 
| --bech	 | The Bech32 prefix encoding for a key (acc/val/cons) | 
| --device	 | Output the address in a ledger device | 
| --device	 | K out of N required signatures | 
| --pubkey	 | false | Output the public key only (overrides --output) |

```
iond keys show mainkey
```

Get validator address.
```
iond keys show mainkey --bech val
```