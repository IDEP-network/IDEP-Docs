---
title: Interacting with on chain contract
---

## Initialize

First you neeed to create the init message. You can either create json file with text editor, or do it directly in a terminal, like this:

```bash
INIT='{"purchase_price":{"amount":"100","denom":"idep"},"transfer_price":{"amount":"999","denom":"idep"}}'
```

Now we can instantiate the contract:

```bash
iond tx wasm instantiate $CODE_ID "$INIT" --from wallet1 --label "test contract deployment" $TXFLAGS -y
```

Get deployeed contracts address and save it:
```bash
iond query wasm list-contract-by-code $CODE_ID --output json
CONTRACT=$(iond query wasm list-contract-by-code $CODE_ID  --output json | jq -r '.contracts[-1]')
echo $CONTRACT
```

Now, some  query operations:

```bash
iond query wasm contract $CONTRACT
iond query bank balances $CONTRACT

# dump whole contract state
iond query wasm contract-state all $CONTRACT

# Keys are in hex format whilevalue is in base64.
# To view returnted data:
# (Though in certain cases the binary returneed is not ascii, hence thee encoding)
iond query wasm contract-state all $CONTRACT  --output "json" | jq -r '.models[0].key' | xxd -r -ps
iond query wasm contract-state all $CONTRACT  --output "json" | jq -r '.models[0].value' | base64 -d

# or try a "smart query", executing against the contract
iond query wasm contract-state smart $CONTRACT '{}'
# (since we didn't implement any valid QueryMsg, we just get a parse error back)
```

Once contract instance is created, we can register a name and transfer it, paying the price:

```bash
# in case the e person is incorrect the execute will fail
REGISTER='{"register":{"name":"fred"}}'
iond tx wasm execute $CONTRACT "$REGISTER" \
    --amount 100idep \
    --from wallet $TXFLAGS -y

# query name
NAME_QUERY='{"resolve_record": {"name": "fred"}}'
iond query wasm contract-state smart $CONTRACT "$NAME_QUERY"  --output json
# {"data":{"address":"idep1awadyj4c5xrhaqsmk36yr9dgt2z57wcedf5s39"}}

# purchase and then transfer the name record to wallet2 (change the "to" address to wallet2's address which was generated in previous steps)
TRANSFER='{"transfer":{"name":"fred","to":"idep1t4drw35er7lwlkyje3gwsnwehgwqaj77kl6mpc"}}'
iond tx wasm execute $CONTRACT "$TRANSFER" \
    --amount 999idep \
    --from wallet $TXFLAGS -y
```

Check contract's new owner:

```bash
NAME_QUERY='{"resolve_record": {"name": "fred"}}'
iond query wasm contract-state smart $CONTRACT "$NAME_QUERY"  --output json
# {"data":{"address":"idep1t4drw35er7lwlkyje3gwsnwehgwqaj77kl6mpc"}}
```
