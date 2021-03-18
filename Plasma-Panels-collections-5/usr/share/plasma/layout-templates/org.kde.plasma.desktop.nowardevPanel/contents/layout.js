//Copyright (C) 2016 nowardev nowardev@gmail.com

//This file is part of kde-peace-settings.

//kde-peace-settings is free software: you can redistribute it and/or modify
//it under the terms of the GNU General Public License as published by
//the Free Software Foundation, either version 3 of the License, or
//(at your option) any later version.
//
//This program is distributed in the hope that it will be useful,
//but WITHOUT ANY WARRANTY; without even the implied warranty of
//MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//GNU General Public License for more details.
//
//You should have received a copy of the GNU General Public License
//along with this program.  If not, see <http://www.gnu.org/licenses/>.

///nowardev PANEL

function remove()
{
	for (i in panelIds) {
		
		
		panelById(panelIds[i]).remove()
	}
	
}
//////////////////////////////////////////////////////////


/////function remove standard///////////////////////////////
function RemoveOldPanels()
{
	for (i in panelIds) {
		// panelById(panelIds[i]).remove()
		p = panelById(panelIds[i]);
		if (typeof p === "undefined") {
			print("E: Couldn't find first panel")
			remove() //load the remove function in case of problems
		}
		else 	{
			panelById(panelIds[i]).remove()
		}
	}
}

RemoveOldPanels() //load the function
//////////////////////////////////////////////////////////

var panel = new Panel
var panelScreen = panel.screen
panel.location = "top"

var kickoff = panel.addWidget("org.kde.plasma.kickoff")
kickoff.currentConfigGroup = ["General"]
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
panel.reloadConfig()

/*
 //Copyright (C) 2018 nowardev nowardev@gmail.com

///Copyright (C) 2016 nowardev nowardev@gmail.com

//This file is part of kde-peace-settings.

//kde-peace-settings is free software: you can redistribute it and/or modify
//it under the terms of the GNU General Public License as published by
//the Free Software Foundation, either version 3 of the License, or
//(at your option) any later version.
//
//This program is distributed in the hope that it will be useful,
//but WITHOUT ANY WARRANTY; without even the implied warranty of
//MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//GNU General Public License for more details.
//
//You should have received a copy of the GNU General Public License
//along with this program.  If not, see <http://www.gnu.org/licenses/>.

///nowardev PANEL

var screenrect = screenGeometry(0);

function remove()
{
	for (i in panelIds) {
		
		
		panelById(panelIds[i]).remove()
	}
	
}
//////////////////////////////////////////////////////////


/////function remove standard///////////////////////////////
function RemoveOldPanels()
{
	for (i in panelIds) {
		// panelById(panelIds[i]).remove()
		p = panelById(panelIds[i]);
		if (typeof p === "undefined") {
			print("E: Couldn't find first panel")
            print((screenrect.width/2)-(screenrect.width/16))
            print((screenrect.width/2)+(screenrect.width/16))
            print (  gridUnit )
            
			remove() //load the remove function in case of problems
		}
		else 	{
			panelById(panelIds[i]).remove()
		}
	}
}
  RemoveOldPanels() //load the function
//////////////////////////////////////////////////////////

var panel = new Panel
var panelScreen = panel.screen
panel.location = "top"
panel.height = screenrect.height/35;
panel.length = "40" ;
panel.maxLength= 100
panel.minLength= "100"
panel.alignment = "left"

var kickoff = panel.addWidget("org.kde.plasma.kickoff")
kickoff.currentConfigGroup = ["General"]
kickoff.writeConfig("favorites","org.kde.kontact.desktop,systemsettings.desktop,google-chrome.desktop,org.kde.ksysguard.desktop,vlc.desktop,org.kde.dolphin.desktop,org.kde.kate.desktop")
kickoff.writeConfig("showAppsByName","true")
kickoff.currentConfigGroup = ["Shortcuts"]
kickoff.writeConfig("global", "Ctrl+Shift+F1")


panel.addWidget("org.kde.plasma.appmenu");


var panel1 = new Panel
var panelScreen = panel1.screen
panel1.location = "top"
panel1.height = screenrect.height/35;
panel1.length = 1080
panel1.alignment = "right"
panel1.maxLength= (screenrect.width/2)+(screenrect.width/16)
panel1.minLength= 1107



var icontasks = panel1.addWidget("org.kde.plasma.icontasks")
icontasks.currentConfigGroup = ["General"]
icontasks.writeConfig("highlightWindows","true")
icontasks.writeConfig("launchers","file:///usr/share/applications/systemsettings.desktop,file:///usr/share/applications/org.kde.konsole.desktop,file:///usr/share/applications/org.kde.dolphin.desktop,file:///usr/share/applications/org.kde.ksysguard.desktop,file:///usr/share/applications/google-chrome.desktop,file:///usr/share/applications/vlc.desktop,file:///usr/share/applications/org.kde.kdenlive.desktop,file:///usr/share/applications/org.kde.kate.desktop")
icontasks.writeConfig("middleClickAction","NewInstance")
icontasks.writeConfig("showToolTips","false")

var network = panel1.addWidget("org.kde.plasma.networkmanagement")
var printer = panel1.addWidget("org.kde.plasma.printmanager")
var volume = panel1.addWidget("org.kde.plasma.volume")
var kdeconnect = panel1.addWidget("org.kde.kdeconnect")
var notifications = panel1.addWidget ("org.kde.plasma.notifications")
var mediacontroller = panel1.addWidget ("org.kde.plasma.mediacontroller")
var devicenotifier = panel1.addWidget ("org.kde.plasma.devicenotifier")
var battery = panel1.addWidget("org.kde.plasma.battery")

// var systemtray = panel1.addWidget("org.kde.plasma.systemtray")
// systemtray.currentConfigGroup = ["General"]
// systemtray.writeConfig("extraItems","org.kde.kdeconnect,org.kde.plasma.mediacontroller,org.kde.plasma.notifications,org.kde.plasma.devicenotifier,org.kde.plasma.clipboard,org.kde.plasma.battery")
// systemtray.writeConfig("knownItems","org.kde.kdeconnect,org.kde.ktp-contactlist,org.kde.plasma.mediacontroller,org.kde.plasma.printmanager,org.kde.plasma.notifications,org.kde.plasma.devicenotifier,org.kde.plasma.clipboard,org.kde.plasma.battery")

var netspeed = panel1.addWidget("org.kde.netspeedWidget")
netspeed.currentConfigGroup = ["Appearance"]
netspeed.writeConfig("fontSize","40")

var  activeWindowControlmM = panel1.addWidget("org.kde.activeWindowControl")
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

var dayofmonth = panel1.addWidget("org.kde.contrib.dayofmonth")
var dayofweek = panel1.addWidget("org.kde.contrib.dayofweek")

var lockout = panel1.addWidget("org.kde.plasma.lock_logout")
lockout.currentConfigGroup = ["General"]
lockout.writeConfig("show_lockScreen","false")

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

var calendar = panel1.addWidget("org.kde.plasma.digitalclock")


var  activeWindowControlX = panel1.addWidget("org.kde.activeWindowControl")
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
var userswitcher = panel1.addWidget("org.kde.plasma.userswitcher")
panel1.reloadConfig()


//var commandwidget = panel1.addWidget("com.github.zren.commandoutput")
//commandwidget.writeConfig("command","echo $USER")


*/
