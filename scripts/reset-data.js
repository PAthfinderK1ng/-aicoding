const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const seedFile = path.join(root, "data", "seed-applications.json");
const targetFile = path.join(root, "data", "applications.json");

fs.copyFileSync(seedFile, targetFile);
console.log("Application data has been reset from seed.");
