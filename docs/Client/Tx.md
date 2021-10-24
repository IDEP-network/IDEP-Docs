---
title: Tx
---

Tx allows you to sign or broadcast transactions

| Command | Description |
|---------|-------------|
| tx | The `show-address` command queries a transaction by hash in a block that's been committed.|
| txs | The `show-node-id` command searches for transactions that match the exact given events where results are paginated.|
| sign | The `show-validator` command signs transactions that are generated offline. |
| broadcast | The `broadcast` command broadcasts a signed transaction to the IDEP network. |
| multisign | The `multisign` command signs the same transaction by multiple accounts. |

## Available Commands
___
### iond query tx *hash*
```
iond query tx 6352278EA34E6CAD7A536BB36A9B12934C6DEEAAAF6D6356522998EF0758A6E2
```

___
### iond query txs
```
iond query txs --events 'message.sender=<iaa...>&message.action=xxxx' --page 1 --limit 30
```

### iond tx sign [flags]
Sign transactions in generated offline file. The file created with the --generate-only flag.

```
iond tx sign <file> [flags]
```

Flags

| Name | Type | Required | Default | Description | 
|------|------|----------|---------|-------------|
|--append | bool | true | true | Attach a signature to an existing signature. |
|--from | bool | true |  | Key name for signature. |
|--offline | bool | true |  | Offline mode. |
|--signature-only | bool | true |  | Print only the generated signature, then exit. |
|--multisig	 | bool | | true | Address of the multisig account on behalf of which the transaction shall be signed. |

___
### iond tx broadcast
```
iond tx broadcast signed.json --chain-id=Test-Denali
```

___
### iond tx multisign
Sign a transaction by multiple accounts. The tx could be broadcasted only when the number of signatures meets the multisig-threshold.
```
iond tx multisign <file> <key-name> <[signature]...> [flags]
```
Generate an offline tx by multisig key
```
iond tx bank send <from> <to> 69idep --fees=500idep --chain-id=Test-Denali --from=<multisig-keyname> --generate-only > unsigned.json
```

### Sign the multisig tx

Query the multisig address
```
iond keys show <multisig-keyname>
```
##### Sign the `unsigned.json`

Assume the multisig-threshold is 2, here we sign the unsigned.json by 2 of the signers

Sign the tx by signer-1:
```
iond tx sign unsigned.json --from=<signer-keyname-1> --chain-id=Test-Denali --multisig=<multisig-address> --signature-only > signed-1.json
```

Sign the tx by signer-2:
```
iond tx sign unsigned.json --from=<signer-keyname-2> --chain-id=Test-Denali --multisig=<multisig-address> --signature-only > signed-2.json
```

##### Merge the signatures
Merge all the signatures into `signed.json`

```
iond tx multisign --chain-id=Test-Denali unsigned.json <multisig-keyname> signed-1.json signed-2.json > signed.json
```

Now broadcast the tx the same was as you would a regular one.