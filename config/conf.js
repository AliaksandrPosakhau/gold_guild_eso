exports.config = {
    directConnect: true,
  
    capabilities: {
       browserName: 'chrome', 
       acceptInsecureCerts: true,
       shardTestFiles: false,

       chromeOptions: {
      args: [
        // disable chrome's wakiness
        '--disable-infobars',
        '--window-size=1800,900',
        '--disable-extensions',
        'verbose',
        'log-path=/tmp/chromedriver.log',
        '--disable-web-security',
        '--allow-running-insecure-content',
        "--headless",
        '--allow-cross-origin-auth-prompt',
        '--no-sandbox',
      ],
      prefs: {
        // disable chrome's annoying password manager
        'profile.password_manager_enabled': false,
        credentials_enable_service: false,
        password_manager_enabled: false,
      },
    },
 
    },

    
  
    baseUrl:'https://us.tamrieltradecentre.com/pc/Trade',
    framework: 'mocha',
  
    specs: ['../tests/*.js'],
  
    mochaOpts: {
      timeout: 120000
    }
  };
