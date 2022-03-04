---
title: Obtain, Compile, Upload
---

## Obtain

While writing smart contracts is a huge topic in itself, for the purposes of this tutorial, we're going to use one of the examplees provided by the cosmwasm.

### Download

Use the following commands to clone the repository with needed code:

```bash
git clone https://github.com/CosmWasm/cw-plus.git

cd cw-plus/contracts/cw20-base
```

```bash
# get the code
git clone https://github.com/InterWasm/cw-contracts
cd cw-contracts
git checkout main
cd contracts/nameservice
```

## Compile

One of options is to compile the contract with the rust's stable toolchain.

```bash
rustup default stable
cargo wasm
```

After the compilation is finished, you should be able to find a file in `target/wasm32-unknown-unknown/release/cw_nameservice.wasm`. It will be about 1.7mb (you can check the size with `ls -lh` command). You can get much smaller version, with thee following command. It instructs the compiler to discard all unused code:

```bash
`RUSTFLAGS='-C link-arg=-s' cargo wasm
```

The results is file about 165kB big. This helps to limit gas usage substantially.

## Upload


You can now upload the contract to the chain.

```bash
cd target/wasm32-unknown-unknown/release
RES=$(iond tx wasm store cw_nameservice.wasm --from wallet1 $TXFLAGS -y --output json -b block)
```

You can find the contract's code in output of the above command, but it is simpler to use following command:

```bash
CODE_ID=$(echo $RES | jq -r '.logs[0].events[-1].attributes[0].value')
```

As there are no contracts yet, this should return an empty list:

```bash
iond query wasm list-contract-by-code $CODE_ID --output json
```
