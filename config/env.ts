const { processEnv } = require('@next/env');
const fs = require('fs');
const path = require('path');

module.exports = function loadEnvConfig({ dir = process.cwd(), dev = false } = {}) {
  const mode = process.env.MODE || (dev ? 'development' : 'production');
  const dotenvFiles = [`.env.${mode}.local`, '.env.local', `.env.${mode}`, '.env'];

  const cachedLoadedEnvFiles = [];

  for (const envFile of dotenvFiles) {
    // only load .env if the user provided has an env config file
    const dotEnvPath = path.join(dir, envFile);

    try {
      const stats = fs.statSync(dotEnvPath);

      // make sure to only attempt to read files
      if (!stats.isFile()) {
        continue;
      }

      const contents = fs.readFileSync(dotEnvPath, 'utf8');
      cachedLoadedEnvFiles.push({
        path: envFile,
        contents,
      });
    } catch (err) {
      if (err.code !== 'ENOENT') {
        console.error(`Failed to load env from ${envFile}`, err);
      }
    }
  }

  const combinedEnv = processEnv(cachedLoadedEnvFiles, dir);

  return { combinedEnv, loadedEnvFiles: cachedLoadedEnvFiles };
};
