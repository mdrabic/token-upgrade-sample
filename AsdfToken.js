import "run-sdk";
class AsdfToken extends Token {}

AsdfToken.upgradable = true;
AsdfToken.interactive = false;
AsdfToken.decimals = 6;
AsdfToken.symbol = "Asdf";
AsdfToken.supply = 200000000 * Math.pow(10, 6);
AsdfToken.metadata = { name: "Asdf Token", emoji: "💊" };

export { AsdfToken };
