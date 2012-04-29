var activity = new Activity("desktop");

folderview = activity.addWidget("folderview");
folderview.writeConfig("url", "desktop:/");

var screenrect = screenGeometry(0);
//if (!(screenrect.right < 1024 || screenrect.bottom < 768)) {
//    activity.addWidget("twitter");
//}

var panel = new Panel("panel");
panel.location = "bottom";
launcher = panel.addWidget("launcher");
launcher.globalShortcut = "Alt+F1"
panel.addWidget("pager");
panel.addWidget("tasks");
panel.addWidget("showdesktop");

systray = panel.addWidget("systemtray");
i = 0;
if (hasBattery) {
    systray.currentConfigGroup = new Array("Applets", ++i);
    systray.writeConfig("plugin", "battery");
}
systray.currentConfigGroup = new Array("Applets", ++i);
systray.writeConfig("plugin", "message-indicator");
systray.currentConfigGroup = new Array("Applets", ++i);
systray.writeConfig("plugin", "org.kde.networkmanagement");
systray.currentConfigGroup = new Array("Applets", ++i);
systray.writeConfig("plugin", "notifier");

clock = panel.addWidget("digital-clock");
clock.writeConfig("showDate", "true");
clock.writeConfig("displayEvents", "false");
