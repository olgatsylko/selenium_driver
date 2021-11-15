const {Builder, By} = require('selenium-webdriver');
require ('chromedriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();

  await driver.get("https://www.selenium.dev/documentation/webdriver/");
  await driver.sleep(5000);

  const title1 = await driver.findElement(By.css('.td-content>h1'));
  let text = await title1.getText();
  console.log(text);
  console.log("Log 1");

  const headerItems = await driver.findElements(By.css('.navbar-collapse .nav-link'));
  await headerItems[2].click();
  console.log("Log 2");
  await driver.sleep(5000);
  
  const title2 = await driver.findElement(By.css('.td-content>h1'));

  // await driver.executeScript('arguments[0].style.backgroundColor = "red"', title2);
  // await driver.sleep(5000);
  
  text = await title2.getText();
  console.log(text);
  console.log("Log 3");

  await driver.quit();

})();