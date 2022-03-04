---
Title: Setup
---

## Install required dependencies (other than iond)

**Make sure to use unix/unix-like (or wsl on Windows) operating system. IDEP client binary (iond) installation guide can be found under the "Guides" section.**

### Rust

Rust is required to write and compile smart contracts.

You should use rustup, which is rust installer and version management tool. You can learn how to install it [here, at the rust's website](https://www.rust-lang.org/tools/install).


Once rustup is available, make sure you have the wasm32 target.

```bash
rustup default stable
cargo version
# If this is lower than 1.58.0, update
rustup update stable

rustup target list --installed
rustup target add wasm32-unknown-unknown
```

You will also need to create two wallets with iond.

```bash
iond keys add wallet1
```

```bash
iond keys add wallet2
```


Also, lets save ourselves some typing later, and define transaction flags right now:

```bash
export TXFLAGS=" --chain-id=SanfordNetworkV2 --gas auto --gas-adjustment 10"
```
