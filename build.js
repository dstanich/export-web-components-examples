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
const SRC_EXPORT_EXAMPLES = '02-export-examples';
const SRC_MIXED_APPS = '03-using-exported-components';

const EXEC_OPTS = { stdio: 'inherit' };

// Reset build dir
if (fs.existsSync(DIR_BUILD)) {
  del.sync(DIR_BUILD);
}

// Run all builds
buildLandingPage();
buildStep00();
buildStep01();
buildStep02();
buildStep03();

function logEntry(statement) {
  console.log('****************************');
  console.log(`** ${statement} **`);
  console.log('****************************');
}

function buildLandingPage() {
  const STEP = 'xx-Landing page';
  logEntry(`BUILDING STEP ${STEP}`);
  fs.mkdirSync(DIR_BUILD, { recursive: true });
  execSync(`cp index.html ${DIR_BUILD}`, EXEC_OPTS);
  logEntry(`COMPLETE STEP ${STEP}`);
}

function buildStep00() {
  const STEP = '00-vanilla web component';
  logEntry(`BUILDING STEP ${STEP}`);

  fs.mkdirSync(BUILD_VANILLA, { recursive: true });
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

function buildStep02() {
  const STEP = '02-export examples';
  logEntry(`BUILDING STEP ${STEP}`);

  // Angular
  let frameworkDir = 'angular';
  execSync(
    `npm --prefix ${SRC_EXPORT_EXAMPLES}/${frameworkDir} install`,
    EXEC_OPTS
  );
  execSync(
    `npm --prefix ${SRC_EXPORT_EXAMPLES}/${frameworkDir} run build:wc 2>/dev/null`,
    EXEC_OPTS
  );

  // React
  frameworkDir = 'react';
  execSync(
    `npm --prefix ${SRC_EXPORT_EXAMPLES}/${frameworkDir} install`,
    EXEC_OPTS
  );
  execSync(
    `npm --prefix ${SRC_EXPORT_EXAMPLES}/${frameworkDir} run build:wc`,
    EXEC_OPTS
  );

  // Vue
  frameworkDir = 'vue';
  execSync(
    `npm --prefix ${SRC_EXPORT_EXAMPLES}/${frameworkDir} install`,
    EXEC_OPTS
  );
  execSync(
    `npm --prefix ${SRC_EXPORT_EXAMPLES}/${frameworkDir} run build:wc`,
    EXEC_OPTS
  );

  logEntry(`COMPLETE STEP ${STEP}`);
}

function buildStep03() {
  const STEP = '03-using exported component';
  logEntry(`BUILDING STEP ${STEP}`);

  // Create dirs
  [/*'angular', */ 'react-based' /*, 'vue'*/].forEach(framework => {
    fs.mkdirSync(`${BUILD_MIXED_APPS}/${framework}`, { recursive: true });
  });

  // React based
  let frameworkDir = 'react-based';
  execSync(`npm --prefix ${SRC_MIXED_APPS}/${frameworkDir} install`, EXEC_OPTS);
  execSync(
    `npm --prefix ${SRC_MIXED_APPS}/${frameworkDir} run build`,
    EXEC_OPTS
  );
  execSync(
    `cp -R ${SRC_MIXED_APPS}/${frameworkDir}/build/* ${BUILD_MIXED_APPS}/${frameworkDir}`,
    EXEC_OPTS
  );

  // Vanilla based
  frameworkDir = 'vanilla-based';
  execSync(
    `cp -R ${SRC_MIXED_APPS}/${frameworkDir}/* ${BUILD_MIXED_APPS}/${frameworkDir}`,
    EXEC_OPTS
  );

  logEntry(`COMPLETE STEP ${STEP}`);
}
