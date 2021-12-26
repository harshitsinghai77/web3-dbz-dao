import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0xd40cfBED8c844D8d8EBFF5258b6bfA4D397E0Bc3");

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "DbzDAO Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "DragonBall",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();
