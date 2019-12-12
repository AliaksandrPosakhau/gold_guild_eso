exports.config = {
    directConnect: true,
  
    capabilities: {
       browserName: 'chrome',       
    },
  
    baseUrl:'https://us.tamrieltradecentre.com/pc/Trade',
    framework: 'mocha',
  
    specs: ['../tests/*.js'],
  
    mochaOpts: {
      timeout: 120000
    }
  };
