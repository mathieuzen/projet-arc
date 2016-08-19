/**
 * Module dependencies.
 */

var Snap = require('democracyos-snap.js');
var bus = require('bus');
var o = require('component-dom');

exports = module.exports = function refresh(ctx) {
    ctx = ctx || document;

    var snapper = new Snap({
        element: o('#snap-content')[0],
        disable: 'right',
        touchToDrag: false,
        hyperextensible: false
    });

    var myToggleButton = o('#toggleButton', ctx);

    myToggleButton && myToggleButton.on('click', function(e) {
        var sidebar = document.getElementById("sidebar-wrapper");
        e.preventDefault();
        if (sidebar.style.width == "250px") {
            sidebar.style.width = "0px";
        } else {
            sidebar.style.width = "250px";
        }
    });

    $(window).resize(function() {
        var sidebar = document.getElementById("sidebar-wrapper");
        if ($(window).width() >= 1200) {
            sidebar.style.width = 250;
        } else {
            sidebar.style.width = 0;
        }
    });

    bus.on('page:change', onPageChange);

    function onPageChange() {
        snapper.close();
    };

    exports.snapper = snapper;
    exports.close = snapper.close;
    exports.destroy = function() {
        bus.off('page:change', onPageChange);
    };
}
