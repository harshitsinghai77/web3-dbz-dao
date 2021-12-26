import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x81079692CA48069C7a9304ef692B73caCcFc80E0"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Gi",
        description: "This NFT will give you access to DBZDao!",
        image: readFileSync("scripts/assets/dbz_dress.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
