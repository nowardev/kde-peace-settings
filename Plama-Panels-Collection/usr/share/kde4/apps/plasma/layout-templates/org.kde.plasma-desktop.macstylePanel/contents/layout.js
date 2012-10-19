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
//MAC PANELS 

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
		p = panelById(panelIds[i])
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


var screenrect = screenGeometry(0) // get information about your screen h w 

//start another function to create panels layout
function macstyle(){
	var panel = new Panel
	if (panelIds.length == 1) {
		// panel.location = 'bottom'
		panel.location = 'top'
	}
	
	
	panel.height = screenrect.height/28;
	
	
	var launcher = panel.addWidget("simplelauncher")
	launcher.writeConfig("format", "Description")
	launcher.writeConfig("showMenuTitles", "true")
	launcher.writeConfig("views", "Applications,Favorites,Computer,Settings,RunCommand,Leave")
	
	
	
	var menubar = panel.addWidget("menubar")
	//menubar.writeConfig("useButtonFormFactor", "false")
	
	
	panel.addWidget("panelspacer_internal")
	
	panel.addWidget("pastebin")
	
	var quick = panel.addWidget("quickaccess") 
	
	var firefox = panel.addWidget("quicklaunch")
	firefox.writeConfig("iconUrls","file:///usr/share/applications/firefox.desktop")
	
	
	var systemsettings = panel.addWidget("quicklaunch")
	systemsettings.writeConfig("iconUrls","file:////usr/share/applications/kde4/systemsettings.desktop")
	
	
	panel.addWidget("trash")
	
	panel.addWidget("panelspacer_internal")
	
	var weather = panel.addWidget("weather")
	weather.writeConfig("Share","false")
	weather.writeConfig("pressureUnit","5008")
	weather.writeConfig("source","wettercom|weather|Verona, Veneto, IT|IT0VE0284;Verona")
	weather.writeConfig("speedUnit","9001")
	weather.writeConfig("temperatureUnit","6001")
	weather.writeConfig("updateInterval","30")
	weather.writeConfig("visibilityUnit","2007")
	
	var systemtray = panel.addWidget("systemtray")
	
	var pager = panel.addWidget("pager")
	pager.writeGlobalConfig("rows", "2")
	
	
	var clock = panel.addWidget("digital-clock")
	clock.writeConfig("showDate", "true")
	clock.writeConfig("showDay", "false")
	clock.writeConfig("showSeconds", "true")
	clock.writeConfig("showYear", "false")
	clock.writeConfig("showShadow", "false")
	//clock.writeConfig("showTimezone", "true")
	clock.writeConfig("plainClockFont", "Serif,12,-1,5,75,0,0,0,0,0")
	clock.writeConfig("useCustomColor", "true")
	clock.writeConfig("plainClockColor", "255,255,255")
	clock.writeConfig("plainClockDrawShadow", "false")
	
	var lockout = panel.addWidget("lockout")
	//lockout.writeConfig("showHibernateButton","true")
	lockout.writeConfig("showLogoutButton","true")
	lockout.writeConfig("showLockButton","false")
	lockout.writeConfig("showSleepButton","false")
	lockout.writeConfig("showSwitchUserButton","false")
	
	
}

macstyle()


