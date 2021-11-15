const {Builder, By} = require('selenium-webdriver');
require ('chromedriver');
jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;

describe ('desc', function(){

    it('Test', async function(){
        let driver = await new Builder().forBrowser('chrome').build();
        async function waitTitle(){
            const titles = await driver.findElements(By.css('.td-content>h1'));
            return !!titles.length;
        }

        await driver.get("https://www.selenium.dev/documentation/webdriver/");
        await driver.wait(waitTitle, 5000);
        const title1 = await driver.findElement(By.css('.td-content>h1'));
        let text = await title1.getText();
        expect (text).toBe('WebDriver')
      
        // const headerItems = await driver.findElements(By.css('.navbar-collapse .nav-link'));
        // await headerItems[2].click();
        const headerItem = await driver.findElement(By.css('.breadcrumb-item a[href = "/documentation/"]'));
        await headerItem.click();

        await driver.wait(waitTitle, 5000);
        const title2 = await driver.findElement(By.css('.td-content>h1'));
      
        // await driver.executeScript('arguments[0].style.backgroundColor = "red"', title2);
        // await driver.sleep(5000);
        
        text = await title2.getText();
        console.log(text);
        expect(text).toBe('The Selenium Browser Automation Project');
        console.log("Finish!");
              
        await driver.quit();

    });

});