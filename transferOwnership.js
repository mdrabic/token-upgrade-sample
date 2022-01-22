import Run from "run-sdk";
import dotenv from "dotenv";

dotenv.config();
const purse = process.env.PURSE;
const owner = process.env.FIRST_OWNER;
const newOwner = process.env.SECOND_OWNER_WALLET;
const postUpgradeLocation = "6bbdb3d5785a5ccc9bd07c8c9573206e914f8542e3fdb45500b14fe860fc6598_o1";

const options = { network: "main", purse: purse, owner: owner };
const run = new Run(options);

async function transferOwnership(address) {
  run.activate();
  run.trust("*"); //don't do this for a production token
  run.trust(postUpgradeLocation.substring(0, postUpgradeLocation.length - 3));

  const AsdfToken = await run.load(postUpgradeLocation);
  await AsdfToken.sync();

  AsdfToken.send(address);

  await AsdfToken.sync();

  console.log(`deployedLocation=${AsdfToken.location}`);
}

transferOwnership(newOwner).catch((e) => console.log(e));
