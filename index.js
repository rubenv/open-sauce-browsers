module.exports = function(session, options) { 
    function testBrowser(name, version) {
        var config = {
            'browserName': name,
            'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER || 'test',
            'build': process.env.TRAVIS_BUILD_NUMBER,
            'name': session
        };

        if (version) {
            config.version = version;
        }

        return config;
    }

    // Disabled: Android, seems broken on Sauce Labs.

    var browsers = [
        //testBrowser('android', '4.3'),
        testBrowser('chrome'),
        testBrowser('firefox'),
        testBrowser('internet explorer', 11),
        testBrowser('iphone', '7.1'),
        testBrowser('safari', 7),
    ];

    if (options && options.legacy) {
        //browsers.push(testBrowser('android', '4.0'));
        browsers.push(testBrowser('internet explorer', 10));
        browsers.push(testBrowser('internet explorer', 8));
        browsers.push(testBrowser('internet explorer', 9));
        browsers.push(testBrowser('iphone', '6.1'));
        browsers.push(testBrowser('safari', 5));
        browsers.push(testBrowser('safari', 6));
    }

    return browsers;
};
