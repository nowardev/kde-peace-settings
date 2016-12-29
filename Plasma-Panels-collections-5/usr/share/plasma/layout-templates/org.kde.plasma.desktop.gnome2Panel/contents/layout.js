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

///GNOME2LIKE PANELS  
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


var screenrect = screenGeometry(0);


function gnome2(){

var panel = new Panel
var panelScreen = panel.screen
panel.location = "top"
panel.height = screenrect.height/30

var menu_old = panel.addWidget("org.kde.plasma.kicker")
menu_old.currentConfigGroup = ["General"]
menu_old.writeConfig("appNameFormat","1")
menu_old.writeConfig("favoriteApps","google-chrome.desktop,systemsettings.desktop,org.kde.dolphin.desktop,org.kde.konsole.desktop,org.kde.kate.desktop,vlc.desktop")
// menu_old.writeConfig("favoriteApps","preferred://browser,systemsettings.desktop,org.kde.dolphin.desktop,org.kde.kate.desktop")
// menu_old.writeConfig("customButtonImage","/pathtofile")

var placeswidth = screenrect.height/3
var places= panel.addWidget("org.kde.placesWidget")
places.writeConfig("showHidden","true")
places.writeConfig("widgetWidth", placeswidth )

var icon = panel.addWidget("org.kde.plasma.icon")
icon.writeConfig("url","file:///usr/share/applications/systemsettings.desktop")

var help = panel.addWidget("org.kde.plasma.icon")
help.writeConfig("url","file:///usr/share/applications/org.kde.Help.desktop")

var icon = panel.addWidget("org.kde.plasma.icon")
icon.writeConfig("url","file:///usr/share/applications/org.kde.konsole.desktop")

// var icon = panel.addWidget("org.kde.plasma.icon")
// icon.writeConfig("url","preferred://browser")
var spacer = panel.addWidget("org.kde.plasma.panelspacer")
spacer.currentConfigGroup = ["General"]
spacer.writeConfig("length", screenrect.width-screenrect.width/2 )

var network = panel.addWidget("org.kde.plasma.networkmanagement")
var printer = panel.addWidget("org.kde.plasma.printmanager")
var bluetooth = panel.addWidget("org.kde.plasma.bluetooth")

var kdeconnect = panel.addWidget("org.kde.kdeconnect")
var netspeed = panel.addWidget("org.kde.netspeedWidget")
netspeed.currentConfigGroup = ["Appearance"]
netspeed.writeConfig("fontSize","40")

var dayofweek = panel.addWidget("org.kde.contrib.dayofweek")
var dayofmonth = panel.addWidget("org.kde.contrib.dayofmonth")




var calendar = panel.addWidget("org.kde.plasma.digitalclock")
var userswitcher = panel.addWidget("org.kde.plasma.userswitcher")
// var volume = panel.addWidget("org.kde.plasma.volume")
var lockout = panel.addWidget("org.kde.plasma.lock_logout")
lockout.currentConfigGroup = ["General"]
lockout.writeConfig("show_lockScreen","false")
var trash = panel.addWidget("org.kde.plasma.trash")


panel.reloadConfig()

var panel = new Panel
var panelScreen = panel.screen
panel.location = "bottom"
panel.height = screenrect.height/30

var shodesktop = panel.addWidget("org.kde.plasma.showdesktop")
var task = panel.addWidget("org.kde.plasma.taskmanager")
task.currentConfigGroup = ["General"]
task.writeConfig("showTooltip","false")
var pager = panel.addWidget("org.kde.plasma.pager")
panel.reloadConfig()

}

gnome2()
