---
title: Validators Overview
---

## Introduction

The IDEP Network utilizes the [Tendermint Core](https://github.com/tendermint/tendermint) consensus engine which relies 
on a network of validators that are responsible for committing new blocks in the blockchain. These validators participate
in the consensus protocol by broadcasting votes which contain cryptographic signatures signed by each validator's private key.

Validator candidates can bond their own IDEP tokens and have IDEP tokens "delegated", or staked, to them by token holders.
The IDEP Network will have a maximum total of 125 validators. The validators are determined by who has the most stake delegated
to them, the top 125 validators with the (most) highest number of staked tokens will become IDEP Network validators.

Validators and their delegators will earn IDEP tokens as block provisions and tokens as transaction fees through execution
of the Tendermint consensus protocol. Note that validators can set commission on the fees their delegators receive as additional incentive.

If validators double sign, are frequently offline or do not participate in governance, their staked IDEP tokens (including IDEP tokens of users that delegated to them) can be slashed. The penalty depends on the severity of the violation.

## Community

To get the latest news on becoming a validator please reach out to us on our community chat:

[Discord](https://discord.gg/Jrarctk4hG) - Community discussions and support.