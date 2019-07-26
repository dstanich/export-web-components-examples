const fs = require('fs');
const del = require('del');
const { execSync } = require('child_process');
const process = require('process');

// Build output
const DIR_BUILD = 'build';
const BUILD_VANILLA = `${DIR_BUILD}/vanilla-web-component`;
const BUILD_SAMPLE_APPS = `${DIR_BUILD}/sample-apps`;
const BUILD_MIXED_APPS = `${DIR_BUILD}/mixed-apps`;

// Source folders
const SRC_VANILLA_WEB_COMPONENT = '00-vanilla-web-component';
const SRC_SAMPLE_APPS = '01-sample-apps';

const EXEC_OPTS = { stdio: 'inherit' };

// Reset build dir
if (fs.existsSync(DIR_BUILD)) {
  del.sync(DIR_BUILD);
}

// Run all builds
buildStep00();
buildStep01();

function logEntry(statement) {
  console.log('****************************');
  console.log(`** ${statement} **`);
  console.log('****************************');
}

function buildStep00() {
  const STEP = '00-vanilla web component';
  logEntry(`BUILDING STEP ${STEP}`);

  // Create dir
  fs.mkdirSync(BUILD_VANILLA, { recursive: true });

  // Copy files
  execSync(`cp -R ${SRC_VANILLA_WEB_COMPONENT}/* ${BUILD_VANILLA}`, EXEC_OPTS);

  logEntry(`COMPLETE STEP ${STEP}`);
}

function buildStep01() {
  const STEP = '01-sample apps';
  logEntry(`BUILDING STEP ${STEP}`);

  // Create dirs
  ['angular', 'react', 'vue'].forEach(framework => {
    fs.mkdirSync(`${BUILD_SAMPLE_APPS}/${framework}`, { recursive: true });
  });

  // Angular
  let frameworkDir = 'angular';
  execSync(
    `npm --prefix ${SRC_SAMPLE_APPS}/${frameworkDir} install`,
    EXEC_OPTS
  );
  execSync(
    `npm --prefix ${SRC_SAMPLE_APPS}/${frameworkDir} run build`,
    EXEC_OPTS
  );
  execSync(
    `cp -R ${SRC_SAMPLE_APPS}/${frameworkDir}/dist/groceries/* ${BUILD_SAMPLE_APPS}/${frameworkDir}`,
    EXEC_OPTS
  );

  // React
  frameworkDir = 'react';
  execSync(
    `npm --prefix ${SRC_SAMPLE_APPS}/${frameworkDir} install`,
    EXEC_OPTS
  );
  execSync(
    `npm --prefix ${SRC_SAMPLE_APPS}/${frameworkDir} run build`,
    EXEC_OPTS
  );
  execSync(
    `cp -R ${SRC_SAMPLE_APPS}/${frameworkDir}/build/* ${BUILD_SAMPLE_APPS}/${frameworkDir}`,
    EXEC_OPTS
  );

  // Vue
  frameworkDir = 'vue';
  execSync(
    `npm --prefix ${SRC_SAMPLE_APPS}/${frameworkDir} install`,
    EXEC_OPTS
  );
  execSync(
    `npm --prefix ${SRC_SAMPLE_APPS}/${frameworkDir} run build`,
    EXEC_OPTS
  );
  execSync(
    `cp -R ${SRC_SAMPLE_APPS}/${frameworkDir}/dist/* ${BUILD_SAMPLE_APPS}/${frameworkDir}`,
    EXEC_OPTS
  );

  logEntry(`COMPLETE STEP ${STEP}`);
}
