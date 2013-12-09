/**
 * Copyright Jari Zwarts 2013
 * http://jari.io/
 * Licensed under the MIT license
 * Please read the LICENSE file for the entire license.
 * Made with <3 for GDT
 */

var Error = {
    html: "",
    load: function () {
        require('fs').readFile('mods/jariz-error/html/error.html', { encoding: 'UTF-8' }, function (e, d) {
            Error.html = d;
        });
        window.onerror = Error.error;
    },

    errored: false,

    error: function (errorMsg, url, lineNumber) {
        if (Error.errored) return;
        else Error.errored = true;

        //collect log
        var log = Error.logObject = Error.log(arguments);

        //inject template
        $("html").html(Error.html);

        $("#exception").html(errorMsg);
        $("#message").html("The exception occurred in " + url + ":" + lineNumber);
        $("#contact").attr("href", "mailto:support@greenheartgames.com?subject=Error%20info%from%JariZ%27s%20better%20error%20mod&body="+encodeURIComponent(JSON.stringify(log)))

        new PrettyJSON.view.Node({
            el: $('#log'),
            data: log
        });
    },

    log2clipboard: function() {
        require("nw.gui").Clipboard.get().set(JSON.stringify(Error.logObject));
    },

    logObject: {},

    log: function (args) {
        var log = {};

        log.Error = {"Message": args[0], "URL": args[1], "Line": args[2]};

        log.GameVersion = GameManager.VERSION;
        log.GameId = GameManager.gameId;
        //gamemanager info
        log.GameInfo = {
            State: GameManager.state,
            Idle: GameManager.isIdle(),
            CurrentFeature: GameManager.currentFeature,
            PlannedFeatures: GameManager.plannedFeatures,
            GameTime: GameManager.gameTime,
            GUID: GameManager.getGUID(),
            systemPause: GameManager.systemPause,
            loadInProgress: GameManager.loadInProgress,
            playerPause: GameManager.playerPause,
            currentMission: GameManager.currentMission,
            currentResearches: GameManager.currentResearches,
            currentHwProject: GameManager.currentHwProject,
            currentRnDProject: GameManager.currentRnDProject,
            currentContract: GameManager.currentContract,
            uiSettings: GameManager.uiSettings,
            flags: GameManager.flags,
            spawnedPoints: GameManager.spawnedPoints
        };
        if (GameManager.company) log.CompanyInfo = GameManager.company;
        log.Environment = process.env;
        log.NPM = {};
        log.NPM.Versions = process.versions;
        log.NPM.Features = process.features;

        return log;

    },

    test: function () {
        throw new TypeError("Testing the error page");
    }
};