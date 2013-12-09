(function () {
    GDT.loadJs([
        "mods/jariz-error/js/resources.js",
        "mods/jariz-error/js/Error.js",
    ], function () {
        Error.load();
    }, function () {
    });
})();