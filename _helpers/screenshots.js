/*
    Every common ad size configuration listed here
    Use for src and dest configs in Gulp | ./screenshots.js
    Copy and paste the ones needed or copy in the whole thing and remove the ones that are not
*/

var screenshots = [
    {"webpage": "dist/160x600/index.html", "filename": "_160x600", "height": 600, "width": 160},
    {"webpage": "dist/300x250/index.html", "filename": "_300x250", "height": 250, "width": 300},
    {"webpage": "dist/300x600/index.html", "filename": "_300x600", "height": 600, "width": 300},
    {"webpage": "dist/728x90/index.html", "filename": "_728x90", "height": 90, "width": 728},
    {"webpage": "dist/120x240/index.html", "filename": "_120x240", "height": 240, "width": 120},
    {"webpage": "dist/200x200/index.html", "filename": "_200x200", "height": 200, "width": 200},
    {"webpage": "dist/250x250/index.html", "filename": "_250x250", "height": 250, "width": 250},
    {"webpage": "dist/300x50/index.html", "filename": "_300x50", "height": 50, "width": 300},
    {"webpage": "dist/300x1050/index.html", "filename": "_300x1050", "height": 1050, "width": 300},
    {"webpage": "dist/320x480/index.html", "filename": "_320x480", "height": 480, "width": 320},
    {"webpage": "dist/320x50/index.html", "filename": "_320x50", "height": 50, "width": 320},
    {"webpage": "dist/970x90/index.html", "filename": "_970x90", "height": 90, "width": 970},
    {"webpage": "dist/970x250/index.html", "filename": "_970x250", "height": 250, "width": 970}
];

/*
    Often times there are various size banners where the quality will need to vary.
    This is so that the static fallback image meets the requirement to be < 40kb.
    Not every scenario is accounted for here but instead demonstrates how to do it.

    This will most likely be necessary for these sizes:
        Lowering the quality significantly to meet 40kb - 300x600, 300x1050, 970x250
        Raising the quality significantly to make the fallback readable - 120x240, 200x200, 300x50, 320x50
*/
function createScreenshot(webpage, filename, height, width, callback){
    var page = require('webpage').create();
    page.clipRect = { top: 0, left: 0, width: width, height: height };

    page.open(webpage, function() {
        console.log('Creating screenshot: '  + webpage);
        // Set the quality for 4 standard sizes individually
        // Demonstrates high level quality control
        setTimeout(function() {
            if (width === 160 && height === 600) {
                page.render('screenshots/' + filename + '.jpg', {format: 'jpeg', quality: '80'});
            } else if (width === 300 && height === 250) {
                page.render('screenshots/' + filename + '.jpg', {format: 'jpeg', quality: '85'});
            } else if (width === 300 && height === 600) {
                page.render('screenshots/' + filename + '.jpg', {format: 'jpeg', quality: '60'});
            } else {
                page.render('screenshots/' + filename + '.jpg', {format: 'jpeg', quality: '90'});
            }
            page.close();
            callback.apply();
        }, 15000);
    });
};
