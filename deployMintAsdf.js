import { AsdfToken } from "./AsdfToken.js";
import Run from "run-sdk";
import dotenv from "dotenv";

dotenv.config();
const purse = process.env.PURSE;
const owner = process.env.FIRST_OWNER;

const options = { network: "main", purse: purse, owner: owner };
const run = new Run(options);

async function deploy() {
  run.activate();
  run.trust("*"); //don't do this for a production token
  run.deploy(AsdfToken);
  await run.sync();
  console.log(`deployedLocation=${AsdfToken.location}`);
}

async function mint(amount, contractLocation) {
  run.activate();
  run.trust("*");
  //Haste Contract
  run.trust(contractLocation.substring(0, contractLocation.length - 3)); // Contract Location without _suffix
  const contract = await run.load(contractLocation);

  const amountToMint = parseInt(amount * Math.pow(10, 6));
  const mintedCoin = contract.mint(amountToMint, run.owner.address);
  await mintedCoin.sync();
  console.log(mintedCoin.amount);
  console.log(mintedCoin.location);
}

// run only deploy() then run only mint()
// deploy().catch((e) => console.log(e));
//mint(42000, "8f831ee3bbf454f96d38d7e0e7571db58570af722b64363fced579349cb1d647_o1").catch((e) => console.log(e));


