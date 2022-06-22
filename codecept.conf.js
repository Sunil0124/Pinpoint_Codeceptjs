const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './Test/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://23.253.186.150:8235/ncsts/stsLogin.jsf',
      show: true,
      windowSize: '1200x900',
      keepCookies: true,
      waitForNavigation: [ "domcontentloaded", "networkidle0" ],
      //waitForAction: 500,
      //waitForNavigation: "domcontentloaded",
      // wait till complete dom is loaded
      getPageTimeout: 0,
      // timeout is disabled
      chrome: {
        args: ['--ignore-certificate-errors', '--window-size=1280,960'],
      },
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'Pinpoint',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}