const {Builder, By} = require('selenium-webdriver');
require ('chromedriver');
jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;

describe ('Test web site - navigation', function(){

    it('Test 1', async function(){
        let driver = await new Builder().forBrowser('chrome').build();
        driver.manage().window().maximize();
        async function waitTitle(){
            const titles = await driver.findElements(By.css('.CDt4Ke .Rn3Z1b'));
            return !!titles.length;
        }
        await driver.get("https://chromedriver.chromium.org/home");
        await driver.wait(waitTitle, 5000);
        const title1 = await driver.findElement(By.css('.CDt4Ke .Rn3Z1b'));
        let text = await title1.getText();
        expect (text).toBe('ChromeDriver')
      
        const headerItems = await driver.findElements(By.css('#WDxLfe .K1Ci7d .PsKE7e'));
        await headerItems[2].click();

        await driver.wait(waitTitle, 5000);
        const title2 = await driver.findElement(By.css('.tyJCtd .Rn3Z1b'));
      
        await driver.executeScript('arguments[0].style.backgroundColor = "red"', title2);
        await driver.sleep(5000);
        
        text = await title2.getText();
        console.log(text);
        expect(text).toBe('Chrome Extensions');
      
        await driver.quit();

    });

});