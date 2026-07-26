#!/usr/bin/env node
// AI-Assisted
const fs = require('fs');
const path = require('path');

const binPath = path.resolve(__dirname, '../dist/module/index.js');

fs.chmodSync(binPath, 0o755);
// End AI-Assisted
