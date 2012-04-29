// Harald Sitter, apachelogger@ubuntu.com 2010-04-10
// Copyright Harald Sitter, may be copied under the GNU GPL 2 or later

for (var i = 0; i < panelIds.length; ++i) {
    var panel = panelById(panelIds[i]);
    var widgetIds = panel.widgetIds;

    for (var j = 0; j < widgetIds.length; ++j) {
        var widget = panel.widgetById(widgetIds[j]);

        if (widget && (widget.type == 'launcher') &&
            (widget.readConfig("icon", "") == "kubuntu-menu")) {
                widget.writeConfig("icon", "start-here-kubuntu");
        } // if launcher
    } // for widgets in panel
} // for panel
