---
title: Bank
---

The bank module is responsible for handling multi-asset coin transfers between accounts and tracking special-case
pseudo-transfers which must work differently with particular kinds of accounts (notably delegating/undelegating for vesting accounts). 
It exposes several interfaces with varying capabilities for secure interaction with other modules which must alter user balances.

In addition, the bank module tracks and provides query support for the total supply of all assets used in the application.

## Available Commands
___
| Command | Description |
|---------|-------------|
| total | The `total` command queries the total supply of tokens on chain.|
| balances | The `balances` command queries a specific account balance by address |
| send | The `send` command creates and/or signs and broadcasts a MsgSend transaction. |

## Examples
___

#### iond query bank total
```
iond query bank total
```

#### iond query bank balances [address]
```
iond query bank balances idep1jg3j2daytay2qgf6d3aftdxjwqzhe655z485c2
```

#### iond tx bank send [from]* [to]* [ammount]
```
iond tx bank send [from_key_or_address] [to_address] [amount] [flags]
```

