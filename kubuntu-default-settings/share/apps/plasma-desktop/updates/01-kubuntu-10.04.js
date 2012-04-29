/* for Kubuntu 10.04 we use KDE 4.4 which adds the ability to include
some Plasma widget in the systray.  This upgrade script checks for the
first panel and, if it contains a systray, adds battery, device
notifier and message indicator into the systray and removes them from
the panel

Harald Sitter, apachelogger@ubuntu.com 2010-04-02
Jonathan Riddell, jriddell@ubuntu.com 2010-02-18
Copyright Canonical Ltd, may be copied under the GNU GPL 2 or later
*/

// Returns widget type. This function is a wrapper to ensure renamed widgets
// get translated, to their new versions appropriately.
// @return name of target widget type
function getWidgetType(wtype)
{
    switch (wtype)
    {
    case 'indicatordisplay':
        return 'message-indicator';
    default:
        return wtype;
    }
}

function traverseConfigToTray(systray, widget, id)
{
    systray.currentConfigGroup = new Array("Applets", id, "Configuration");

    configkeys = widget.configKeys;
    for (traversed_c = 0; traversed_c < configkeys.length; ++traversed_c) {
        systray.writeConfig(configkeys[traversed_c],
                            widget.readConfig(configkeys[traversed_c],""));
    }
}

function isWidgetInTray(systray, wtype, max)
{
    return_value = false;

    systray.currentConfigGroup = new Array("Applets");
    for (j = 0; j < systray.configGroups.length; ++j) {
        systray.currentConfigGroup = new Array("Applets",
                                               systray.configGroups[j]);
        plugin = systray.readConfig("plugin", "");

        if (plugin == wtype) {
            return_value = true;
            break;
        }

        systray.currentConfigGroup = new Array("Applets");
    }

    return return_value;
}

function moveWidgetToTray(systray, widget, max_obj)
{
    var wtype = getWidgetType(widget.type);

    if (isWidgetInTray(systray, wtype, max_obj.max)) {
// TODO: should we temper with the widget anyway? i.e. remove it?
        return;
    }

    systray.currentConfigGroup = new Array("Applets", ++max_obj.max);
    systray.writeConfig("plugin", wtype);

    traverseConfigToTray(systray, widget, max_obj.max)

    widget.remove();
}

p = panelById(panelIds[0]);
if (typeof p === "undefined") {
    print("E: Couldn't find first panel");
    exit();
}

// unlock so that widget.remove() works
// BUG: .remove doesnt work but add, does? => inconsistency in API
var was_locked = false;
if (locked) {
    was_locked = true
    locked = false
}

ids = p.widgetIds;

foundWidgets = new Array();

for (i = 0; i < ids.length; ++i) {
    w = p.widgetById(ids[i]);
    if (w) {
        switch (w.type)
        {
        case 'systemtray':
            systray = w;
            break;
        case 'battery':
            // Do not check for hasBattery, if the user wouldnt have wanted the
            // widget they would have removed it by now!
            foundWidgets.push(w);
            break;
        case 'indicatordisplay':
            foundWidgets.push(w);
            break;
        case 'message-indicator':
            foundWidgets.push(w);
            break;
        case 'notifier':
            foundWidgets.push(w);
            break;
        }
    }
}

if (!(typeof systray === "undefined")) {
    systray.currentConfigGroup = new Array("Applets");

    max = 0;

    for (j = 0; j < systray.configGroups.length; ++j) {
        if (parseInt(systray.configGroups[j]) > max) {
            max = parseInt(systray.configGroups[j]);
        }
    }

    for (processed_w = 0; processed_w < foundWidgets.length; ++processed_w) {
        moveWidgetToTray(systray, foundWidgets[processed_w], this);
    }
}

// lock again, if it was locked before
if (was_locked) {
    locked = true
}
