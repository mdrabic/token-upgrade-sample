# Run Token Upgrade Sample

Demonstrates how to transfer ownership of a [Run Token](https://run.network/docs/#tokens). 

## Installing
1. `nvm use`
2. `npm -i`

## Environment
Create a `.env`, add the following:
1. `PURSE` - the private key of the purse used to pay for transactions. This may be the same as `OWNER`.
2. `FIRST_OWNER` - the private key of the owner who will be the initial owner of the Token.
3. `SECOND_OWNER_WALLET` - the wallet address of the owner post-transfer of ownership.

## Steps to Run
1. Change any of the token attributes in `AsdfToken.js`
2. `node 1_deployMint.js` will deploy the class. Save the output `deployedClassLocation`. 
     1. Optionally edit `1_deployMint.js` to run `mint()` if you want to increase the original supply
3. open `2_upgrade.js` and set the value of `location` to `deployedClassLocation` or the location output from `mint()`. Run `node 2_upgrade.js`. Save the output `deployedLocation`.
4. open `3_transferOwnership.js` and set the value of `location` to `deployedLocation` value returned from upgrading. Run `node 3_transferOwnership.js`.

## Validation
Use whats on chain or run explorer to validate the change of ownership
