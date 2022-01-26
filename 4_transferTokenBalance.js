import Run from "run-sdk";
import dotenv from "dotenv";
dotenv.config();

const owner = process.env.SECOND_OWNER_WALLET;
const oldOwner = process.env.FIRST_OWNER;
const purse = process.env.PURSE;

const options = { network: "main", purse: purse, owner: oldOwner };
const run = new Run(options);
const tokenJigLocation = "paste location here";

async function transferTokens() {
  run.activate();
  run.trust("*");
  run.trust(contractLocation.substring(0, contractLocation.length - 3));
  const tokenJig = await run.load(tokenJigLocation);
  await tokenJig.sync();
  await tokenJig.send(owner); /* sends the full amount */
  await run.sync();
}

transferTokens().catch((e) => console.log(e));
