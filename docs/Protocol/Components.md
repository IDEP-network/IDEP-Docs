---
Title: Components
---

This section provides an overview of the IDEP Network, component by component. For more information, please refer to specific pages which go into more detail.

**[Image coming soon]**

### Validators
___
IDEP Network validators are responsible for proposing new blocks to the blockchain, and confirming blocks proposed by
other validators. A validator is a full node capable of proposing and signing blocks. Validators must have adequate infrastructure
to prevent downtime, and $IDEP holders can become delegators. Delegators can delegate to validators if they believe validators
will maintain proper uptime, and will grow the blockchain through governance in what delegators feel is the right direction.
Validators perform all the requested computations in each block via the compute module — which means all computations also occur
as part of the consensus process. Validators run Intel SGX chips, and have gone through remote attestation, a process by which Intel
SGX chips are verified, and successfully completed a network registration process. As part of registration, validators are provisioned
with the secret keys they need to participate in private computations. Validators run the IDEP Network code, and execute WASM code within a TEE.
They are responsible for achieving consensus on computation results, and proposing and/or validating new blocks in the IDEP Network’s blockchain. Validators also participate in governance.

### Secret Contracts
___

Secret Contracts are code executing over encrypted data. Secret Contracts are currently written in Rust (though this could potentially be expanded in the future to include AssemblyScript), and compiled to WASM. Secret Contracts are public, while the data they use is not. This enables users to have confidence that contracts will perform as functioned, while simultaneously ensuring user data cannot be viewed by any counterparty.

Contracts are stored on the IDEP blockchain, where their code is publicly available. They execute inside the trusted part of the IDEP Network.

### Modules
___

The IDEP Network blockchain currently contains the following modules. For a full description of each module, click to view module code.

* [auth](https://github.com/cosmos/cosmos-sdk/tree/v0.38.3/x/auth)
* [vesting](https://github.com/cosmos/cosmos-sdk/tree/v0.38.3/x/auth/vesting)
* [bank](https://github.com/cosmos/cosmos-sdk/tree/v0.38.3/x/bank)
* [crisis](https://github.com/cosmos/cosmos-sdk/tree/v0.38.3/x/crisis)
* [distribution](https://github.com/cosmos/cosmos-sdk/tree/v0.38.3/x/distribution)
* [evidence](https://github.com/cosmos/cosmos-sdk/tree/v0.38.3/x/evidence)
* [genutil](https://github.com/cosmos/cosmos-sdk/tree/v0.38.3/x/genutil)
* [gov](https://github.com/cosmos/cosmos-sdk/tree/v0.38.3/x/gov)
* [mint](https://github.com/cosmos/cosmos-sdk/tree/v0.38.3/x/mint)
* [params](https://github.com/cosmos/cosmos-sdk/tree/v0.38.3/x/params)
* [params client](https://github.com/cosmos/cosmos-sdk/tree/v0.38.3/x/params/client)
* [slashing](https://github.com/cosmos/cosmos-sdk/tree/v0.38.3/x/slashing)
* [staking](https://github.com/cosmos/cosmos-sdk/tree/v0.38.3/x/staking)
* [supply](https://github.com/cosmos/cosmos-sdk/tree/v0.38.3/x/supply)
* [upgrade](https://github.com/cosmos/cosmos-sdk/tree/v0.38.3/x/upgrade)
* [upgrade client](https://github.com/cosmos/cosmos-sdk/tree/v0.38.3/x/upgrade/client)

### Compute Module
___
SCRT Labs is implementing the compute module, or x/compute that IDEP Network is using. This module enables Secret Contract functionality (including encryption and decryption of state), and encrypted input/outputs for users.

modules

### Bootstrap Node
___ 
The bootstrap node is the first node to join the network. It is identical to other nodes, but is responsible for certain initialization processes.