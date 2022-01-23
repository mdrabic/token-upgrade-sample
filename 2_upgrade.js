import Run from "run-sdk";
import dotenv from "dotenv";

dotenv.config();
const purse = process.env.PURSE;
const owner = process.env.FIRST_OWNER;
const location = "cdc507b4c7bef8afc3df8392859ebb5662084d0fbeca97fc316039ce43b97fdc_o1";

const options = { network: "main", purse: purse, owner: owner };
const run = new Run(options);

async function upgrade() {
  run.activate();
  run.trust("*"); //don't do this for a production token
  run.trust(location.substring(0, location.length - 3));

  const OldAsdfToken = await run.load(location);
  await OldAsdfToken.sync();

  const NewAsdfToken = class AsdfToken extends Token {
    static send(address) {
      this.owner = address;
    }
  };

  Object.assign(NewAsdfToken, OldAsdfToken);

  // Except the bindings, which are set by Run
  ["origin", "location", "nonce", "owner", "satoshis"].forEach((x) => {
    delete NewAsdfToken[x];
  });

  OldAsdfToken.upgrade(NewAsdfToken);
  await OldAsdfToken.sync();

  console.log(`deployedLocation=${NewAsdfToken.location}`);
}

upgrade().catch((e) => console.log(e));
