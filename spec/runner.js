let Jasmine = require("jasmine");
let jasmine = new Jasmine();

(async() => {
    jasmine.loadConfig("spec/support/jasmine.json");
    jasmine.configureDefaultReporter({showColors: true});
    await jasmine.execute();
})();


