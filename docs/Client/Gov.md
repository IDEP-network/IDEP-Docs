---
title: Gov
---

The gov module is responsible for the basic functionalities of governance for the IDEP Network.

## Available Commands
___
| Command | Description |
|---------|-------------|
| vote | The `vote`  command allows you to submit a vote for the given governance proposal. |
| votes | The `votes` command queries votes on a proposal. |
| proposal | The `proposal` command queries the details of a single proposal |
| proposals | The `proposals` command queries proposals with specified filters. |
| proposer | The `proposer` command allows users to query the proposer for a given proposal. |
| tally | The `tally` command allows users to query the tally of a given proposal vote. |
| submit-proposal | The `submit-proposal` allows users to submit a governance proposal and to optionally include an initial deposit. |
| deposit | The `deposit` command allows users to deposit tokens for a given proposal. |


## Examples
___

#### iond tx gov vote [proposal-id]
```
iond tx gov vote
```

Example:
```
iond tx gov vote <proposal-id> <option> --from=<idep1...> --fees=<ammount>
```

#### iond query gov votes
```
iond query gov votes [proposal-id] [flags]
```

#### iond query gov proposal
```
iond query gov proposal [proposal-id] [flags]
```

#### iond query gov proposals
```
iond query gov proposals [flags]
```

flags:
___
| Name | Type | Description |
|------|---------|-------------|
| --depositor	 | Address | Filter proposals by depositor address. | 
| --limit	 | uint | Limit to the latest [number] of proposals. Default to all proposals. |
| --status	 | string | Filter proposals by status. |
| --voter	 | Address | Filter proposals by voter address. |

#### iond query gov proposer
```
iond query gov proposer [proposal-id] [flags]
```

#### iond query gov tally
```
iond query gov tally [proposal-id] [flags]
```

#### iond tx gov submit-proposal
The submit-proposal command allows users to submit a governance proposal and to optionally include an initial deposit.
Proposal title, description, type and deposit can be given directly or through a proposal JSON file.
Available Commands: `community-pool-spend`, `param-change`, `software-upgrade`, `cancel-software-upgrade`.
```
iond tx gov submit-proposal [command] [flags]
```

Example:
```
iond tx gov submit-proposal --title="Community Pool Spend" --description="Pool for new project" --type="Text" --deposit="9001udep" --from idep1..
```
Example 2:
```
iond tx gov submit-proposal community-pool-spend <path/to/proposal.json> --from=<key_or_address>
```
proposal.json:
```json
{
    "title": "Community Pool Spend",
    "description": "Pool for new project",
    "recipient": "idep1jg3j2daytay2qgf6d3aftdxjwqzhe655z485c2",
    "amount": "9001idep",
    "deposit": "9001idep"
}
```
Example 3:   
Cancel a software upgrade along with an initial deposit.
```
iond tx gov submit-proposal cancel-software-upgrade [flags]
```
flags:
___
| Name | Type | Required |Description |
|------|------|----------|------------|
| --deposit	 | Coin | Yes | Deposit of the proposal. |
| --title	 | string | Yes | Title of proposal. |
| --deposit	 | string | Yes | Description of proposal. |

#### iond tx gov deposit
```
iond tx gov deposit [proposal-id] [deposit] [flags]
```


 