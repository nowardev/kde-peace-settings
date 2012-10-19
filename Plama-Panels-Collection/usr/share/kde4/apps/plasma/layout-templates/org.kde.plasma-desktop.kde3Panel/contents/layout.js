//Copyright (C) 2012 nowardev nowardev@gmail.com

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

///KDE3 PANELS
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

//RemoveOldPanels() //load the function 
//////////////////////////////////////////////////////////



//start another function to create panels layout

var screenrect = screenGeometry(0); // get information about your screen h w 
function kde3(){
	var panel = new Panel
	if (panelIds.length == 1) {
		panel.location = 'bottom'
		// panel.location = 'top'
	}
	
	
	panel.height = screenrect.height/20
	
	
	//panel.addWidget("launcher")
	var launcher = panel.addWidget("simplelauncher")
	launcher.writeConfig("format", "Description")
	launcher.writeConfig("showMenuTitles", "true")
	launcher.writeConfig("views", "Applications,Favorites,Computer,Settings,RunCommand,Leave")
	panel.addWidget("showdesktop")
	
	
	
	
	
	var quick = panel.addWidget("quickaccess") 
	
	
	var quicklaunch = panel.addWidget("quicklaunch")
	quicklaunch.writeConfig("sectionCount" ,"2")
	quicklaunch.writeConfig("launchers" ,"file:///usr/share/applications/kde4/dolphin.desktop,file:///usr/share/applications/firefox.desktop,file:///usr/share/applications/kde4/systemsettings.desktop,file:///usr/share/applications/kde4/konsole.desktop")
	
	
	quicklaunch.currentConfigGroup = new Array('Configuration')
	quicklaunch.writeConfig("launcherNamesVisible" ,"false")
	quicklaunch.writeConfig("launchers","file:///usr/share/applications/kde4/konsole.desktop")
	quicklaunch.writeConfig("launcherNamesVisible" ,"false")
	quicklaunch.writeConfig("launcherNamesVisible" ,"false")
	
	panel.addWidget("pastebin")
	
	var  pager = panel.addWidget("pager")
	pager.writeGlobalConfig("rows", "2")
	pager.writeConfig("displayedText","0")
	pager.writeConfig("showWindowIcons","true")
	
	
	
	
	
	var tasks = panel.addWidget("tasks")
	tasks.writeConfig("showTooltip","false")
	
	var systemtray = panel.addWidget("systemtray")
	systemtray.writeConfig("DefaultAppletsAdded","false")
	systemtray.writeConfig("ShowHardware","true")
	systemtray.writeConfig("ShowCommunications","true")
	systemtray.writeConfig("ShowApplicationStatus","true")
	systemtray.writeConfig("ShowSystemServices","true")
	systemtray.writeConfig("ShowUnknown","false")
	//systemtray.writeConfig("alwaysShown","battery,notifier,KMix,org.kde.networkmanagement")
	
	var clock = panel.addWidget("digital-clock")
	clock.writeConfig("showDate", "true")
	clock.writeConfig("showDay", "true")
	clock.writeConfig("showSeconds", "true")
	clock.writeConfig("showShadow", "false")
	clock.writeConfig("showYear", "true")
	clock.writeConfig("plainClockFont", "Serif,12,-1,5,75,0,0,0,0,0")
	clock.writeConfig("useCustomColor", "true")
	clock.writeConfig("plainClockColor", "255,255,255")
	clock.writeConfig("plainClockDrawShadow", "false")
	
}

kde3()


