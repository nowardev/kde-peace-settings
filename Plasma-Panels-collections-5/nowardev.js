 var panel = new Panel
var panelScreen = panel.screen
panel.location = "top"

var kickoff = panel.addWidget("org.kde.plasma.kickoff")
kickoff.writeConfig("favorites","org.kde.kontact.desktop,systemsettings.desktop,google-chrome.desktop,org.kde.ksysguard.desktop,vlc.desktop,org.kde.dolphin.desktop,org.kde.kate.desktop")
kickoff.writeConfig("showAppsByName","true")
kickoff.currentConfigGroup = ["Shortcuts"]
kickoff.writeConfig("global", "Ctrl+Shift+F1")

var icontasks = panel.addWidget("org.kde.plasma.icontasks")
icontasks.currentConfigGroup = ["General"]
icontasks.writeConfig("highlightWindows","true")
icontasks.writeConfig("launchers","file:///usr/share/applications/systemsettings.desktop,file:///usr/share/applications/org.kde.konsole.desktop,file:///usr/share/applications/org.kde.dolphin.desktop,file:///usr/share/applications/org.kde.ksysguard.desktop,file:///usr/share/applications/google-chrome.desktop,file:///usr/share/applications/vlc.desktop,file:///usr/share/applications/org.kde.kdenlive.desktop,file:///usr/share/applications/org.kde.kate.desktop")
icontasks.writeConfig("middleClickAction","NewInstance")
icontasks.writeConfig("showToolTips","false")

var network = panel.addWidget("org.kde.plasma.networkmanagement")
var printer = panel.addWidget("org.kde.plasma.printmanager")
// var volume = panel.addWidget("org.kde.plasma.volume")
var kdeconnect = panel.addWidget("org.kde.kdeconnect")

var systemtray = panel.addWidget("org.kde.plasma.systemtray")
systemtray.currentConfigGroup = ["General"]
systemtray.writeConfig("extraItems","org.kde.kdeconnect,org.kde.plasma.mediacontroller,org.kde.plasma.notifications,org.kde.plasma.devicenotifier,org.kde.plasma.clipboard,org.kde.plasma.battery")
systemtray.writeConfig("knownItems","org.kde.kdeconnect,org.kde.ktp-contactlist,org.kde.plasma.mediacontroller,org.kde.plasma.printmanager,org.kde.plasma.notifications,org.kde.plasma.devicenotifier,org.kde.plasma.clipboard,org.kde.plasma.battery")

var netspeed = panel.addWidget("org.kde.netspeedWidget")
netspeed.currentConfigGroup = ["Appearance"]
netspeed.writeConfig("fontSize","40")

var  activeWindowControlmM = panel.addWidget("org.kde.activeWindowControl")
activeWindowControlmM.currentConfigGroup = ["Appearance"]
activeWindowControlmM.writeConfig("buttonSize","1")
activeWindowControlmM.writeConfig("buttonsOrder","2")
activeWindowControlmM.writeConfig("buttonsPosition","3")
activeWindowControlmM.writeConfig("buttonsVerticalCenter","true")
activeWindowControlmM.writeConfig("controlButtonsSpacing","0")
activeWindowControlmM.writeConfig("horizontalScreenWidthPercent","0.023")
activeWindowControlmM.writeConfig("showButtonAlways","true")
activeWindowControlmM.writeConfig("showControlButtons","true")
activeWindowControlmM.writeConfig("showMaximize","true")
activeWindowControlmM.writeConfig("showMinimize","true")
activeWindowControlmM.writeConfig("showWindowIcon","false")
activeWindowControlmM.writeConfig("showWindowTitle","false")
activeWindowControlmM.writeConfig("widthFineTuning","6")

var dayofmonth = panel.addWidget("org.kde.contrib.dayofmonth")
var dayofweek = panel.addWidget("org.kde.contrib.dayofweek")

var lockout = panel.addWidget("org.kde.plasma.lock_logout")
lockout.currentConfigGroup = ["General"]
lockout.writeConfig("show_lockScreen","false")

var calendar = panel.addWidget("org.kde.plasma.digitalclock")
var userswitcher = panel.addWidget("org.kde.plasma.userswitcher")

var  activeWindowControlX = panel.addWidget("org.kde.activeWindowControl")
activeWindowControlX.currentConfigGroup = ["Appearance"]
activeWindowControlX.writeConfig("buttonSize","1")
activeWindowControlX.writeConfig("buttonsOrder","4")
activeWindowControlX.writeConfig("buttonsPosition","3")
activeWindowControlX.writeConfig("buttonsVerticalCenter","true")
activeWindowControlX.writeConfig("horizontalScreenWidthPercent","0.022000000000000002")
activeWindowControlX.writeConfig("showButtonAlways","true")
activeWindowControlX.writeConfig("showClose","true")
activeWindowControlX.writeConfig("showControlButtons","true")
activeWindowControlX.writeConfig("showWindowIcon","false")
activeWindowControlX.writeConfig("showWindowTitle","false")


// var kickoff = panel.addWidget("org.kde.plasma.kickoff")
// kickoff.writeConfig("favorites","org.kde.kontact.desktop,systemsettings.desktop,google-chrome.desktop,org.kde.ksysguard.desktop,vlc.desktop,org.kde.dolphin.desktop,org.kde.kate.desktop)
// kickoff.writeConfig("showAppsByName"."true")
// kickoff.currentConfigGroup = ["Shortcuts"]
// kickoff.writeConfig("global", "Ctrl+Shift+F1")



//panel.addWidget("org.kde.plasma.showActivityManager")
// panel.addWidget("org.kde.plasma.pager")
// panel.addWidget("org.kde.plasma.taskmanager")

 
//     var  activeWindowControl3= panel.addWidget("org.kde.maximizenowardevButton")
//       var  activeWindowControl4= panel.addWidget("org.kde.closenowardevButton")

/* 
var  activeWindowControl= panel.addWidget("org.kde.nowadevButtons")
activeWindowControl.currentConfigGroup = ["Appearance"]
activeWindowControl.writeConfig("buttonSize", "1")

activeWindowControl.writeConfig("showControlButtons", "true")
activeWindowControl.writeConfig("showClose", "true")
activeWindowControl.writeConfig("showMinimize", "true")
activeWindowControl.writeConfig("showMaximize", "true")*/

panel.reloadConfig()
