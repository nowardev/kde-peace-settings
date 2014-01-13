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

///UNKOOL  PANELS
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

var screenrect = screenGeometry(0)
function unkool7(){
	
	
	var panel = new Panel
	if (panelIds.length == 1) {
		// we are the only panel, so set the location for the user panel.location = 'bottom'
		
		panel.location = 'bottom'
		//panel.hiding= 'windowscover' //"windowscover" or "windowsbelow" autohide
		//panel.alignment = 'center'
		panel.height = screenrect.height/20;
		//panel.width = 40
		//panel.alignment = 'left'
		//panel.length = screenrect.width-64;
	}
	
	
	
	var launcher = panel.addWidget("lancelot_launcher")
	
	panel.addWidget("showdesktop") 
	//var quick = panel.addWidget("quickaccess") 
	//var pager = panel.addWidget("pager")
	//pager.writeGlobalConfig("rows", "2")
	
	var icontasks = panel.addWidget("icontasks")
	icontasks.writeConfig("groupClick","1")
	icontasks.writeConfig("iconScale","49")
	icontasks.writeConfig("launcherIcons","false")
	icontasks.writeConfig("maxRows","1")
	icontasks.writeConfig("mediaButtons","true")
	icontasks.writeConfig("middleClick","0")
	icontasks.writeConfig("previewSize","200")
	icontasks.writeConfig("rotate","false")
	icontasks.writeConfig("showOnlyCurrentActivity","false")
	icontasks.writeConfig("showOnlyCurrentDesktop","false")
	icontasks.writeConfig("showOnlyCurrentScreen","false")
	icontasks.writeConfig("showProgress","true")
	icontasks.writeConfig("showSeparator","0")
	icontasks.writeConfig("sortingStrategy","2")
	icontasks.writeConfig("spacing","0")
	icontasks.writeConfig("style","1")
	icontasks.writeConfig("toolTips","1")
	icontasks.writeConfig("unity","true")
	//icontasks.writeConfig("Enabled","true")
	icontasks.currentConfigGroup = new Array('Launchers') //CONFIGURE THE LAUNCHERS 
	icontasks.writeConfig("Items","file:////usr/share/applications/kde4/dolphin.desktop?wmClass=Dolphin,file:///usr/share/applications/chromium-browser.desktop?wmClass=Chromium-browser,file:///usr/share/applications/kde4/konsole.desktop?wmClass=Konsole,file:///usr/share/applications/kde4/systemsettings.desktop?wmClass=Systemsettings")
	
	
	
	// var notification = panel.addWidget ("notifications")
	
	
	
	var systemtray = panel.addWidget("systemtray")
	systemtray.writeConfig("DefaultAppletsAdded","false")
	systemtray.writeConfig("ShowHardware","true")
	systemtray.writeConfig("ShowCommunications","true")
	systemtray.writeConfig("ShowApplicationStatus","true")
	systemtray.writeConfig("ShowSystemServices","true")
	systemtray.writeConfig("ShowUnknown","false")
	systemtray.writeConfig("alwaysShown","battery,notifier,KMix,org.kde.networkmanagement")
	
	
	var clock = panel.addWidget("digital-clock")
	clock.writeConfig("showDate", "false")
	clock.writeConfig("showDay", "false")
	clock.writeConfig("showSeconds", "false")
	clock.writeConfig("showYear", "false")
	clock.writeConfig("showShadow", "false")
	clock.writeConfig("showYear", "false")
	//clock.writeConfig("showTimezone", "true")
	clock.writeConfig("plainClockFont", "Serif,12,-1,5,75,0,0,0,0,0")
	clock.writeConfig("useCustomColor", "true")
	clock.writeConfig("plainClockColor", "255,255,255")
	clock.writeConfig("plainClockDrawShadow", "false")
	
	
}




unkool7()