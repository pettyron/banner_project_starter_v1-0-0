var page = require('webpage').create();

var webroot = './';
var screenshotPrefix = 'JobName_Fallback';

var screenshots = [
    {"webpage": "dist/160x600/index.html", "filename": "_160x600", "height": 600, "width": 160},
    {"webpage": "dist/300x250/index.html", "filename": "_300x250", "height": 250, "width": 300},
    {"webpage": "dist/300x600/index.html", "filename": "_300x600", "height": 600, "width": 300},
    {"webpage": "dist/728x90/index.html", "filename": "_728x90", "height": 90, "width": 728}
];

function createScreenshot(webpage, filename, height, width, callback){
    var page = require('webpage').create();
    page.clipRect = { top: 0, left: 0, width: width, height: height };

    page.open(webpage, function() {
        console.log('Creating screenshot: '  + webpage);
        setTimeout(function() {
            if (width === 300 && height === 600) {
                page.render('screenshots/' + filename + '.jpg', {format: 'jpeg', quality: '60'});
            } else {
                page.render('screenshots/' + filename + '.jpg', {format: 'jpeg', quality: '80'});
            }
            page.close();
            callback.apply();
        }, 15000);
    });
};

function process(){
    if (screenshots.length > 0) {
        var screenshot = screenshots[0];
        screenshots.splice(0, 1);
        createScreenshot(webroot + screenshot.webpage, screenshotPrefix + screenshot.filename, screenshot.height, screenshot.width, process);
    } else {
        phantom.exit();
    }
}

process();
