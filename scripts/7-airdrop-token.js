import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const bundleDropModule = sdk.getBundleDropModule(
  "0x81079692CA48069C7a9304ef692B73caCcFc80E0"
);

const tokenModule = sdk.getTokenModule(
  "0x740C4Ddf5193C93C1DF8a6ecE8b78EAf0c002352"
);

(async () => {
  try {
    // const walletAddresses = await bundleDropModule.getAllClaimerAddresses("0");
    const walletAddresses = [
      "0x2F069F429d036aeBD2dC13de8B63C16AE9f8bB1a",
      "0xdcd0527cc1D33411C63171c4F9488e3E0be88858",
    ];
    if (walletAddresses.length === 0) {
      console.log(
        "No NFTs have been claimed yet, maybe get some friends to claim your free NFTs!"
      );
      process.exit(0);
    }
    const airdropTargets = walletAddresses.map((address) => {
      const randomAmount = Math.floor(
        Math.random() * (10000 - 1000 + 1) + 1000
      );
      console.log("✅ Going to airdrop", randomAmount, "tokens to", address);

      return {
        address,
        amount: ethers.utils.parseUnits(randomAmount.toString(), 18),
      };
    });
    console.log("🌈 Starting airdrop...");
    await tokenModule.transferBatch(airdropTargets);
    console.log(
      "✅ Successfully airdropped tokens to all the holders of the NFT!"
    );
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();
