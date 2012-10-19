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

///NOWARDEV PANELS 
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
RemoveOldPanels() //reload the function  to avoid plasma crashes 
//////////////////////////////////////////////////////////



//start another function to create panels layout
var screenrect = screenGeometry(0);  // get the geometry of your screen 


function nowardevdouble(){
	var panel = new Panel
	if (panelIds.length == 1) {
		// panel.location = 'bottom'
		
		panel.location = 'top'
		//panel.hiding= 'autohide' //"windowscover" or "windowsbelow" 
		
		panel.length = (screenrect.width/2)-(screenrect.width/16);
		panel.height = screenrect.height/30;
		
		panel.alignment = "left"
		
	}
	
	var launcher = panel.addWidget("launcher")
	launcher.currentConfigGroup = new Array('Shortcuts')
	launcher.globalShortcut = "F13"
	
	// 	var launcher = panel.addWidget("launcher")
	//launcher.writeConfig("icon", "start-here")
	
	
	// 			var widget = "kwinbutton"
	// 			/*check if the widget is installed and add if it is to your panel*/
	// 			if (knownWidgetTypes.indexOf(widget) > -1) {
		// 				var widget = panel.addWidget(widget)
	// 				widget.writeConfig("ActionType", "1")
	// 				widget.writeConfig("Maximized", "1")
	// 				
	// 			} 
	// 			else {
		// 				print("your system doesn't provide "+widget )
	// 				
	// 			}	
	
	
	
	
	
	var menubar = panel.addWidget("menubar")
	
	var clock = panel.addWidget("digital-clock")
	clock.writeConfig("showDate", "false")
	clock.writeConfig("showDay", "false")
	clock.writeConfig("showSeconds", "false")
	clock.writeConfig("showYear", "false")
	clock.writeConfig("showShadow", "false")
	//clock.writeConfig("showTimezone", "true")
	clock.writeConfig("plainClockFont", "Serif,12,-1,5,75,0,0,0,0,0")
	clock.writeConfig("useCustomColor", "true")
	clock.writeConfig("plainClockColor", "255,255,255")
	clock.writeConfig("plainClockDrawShadow", "false")
	
	
	var panel = new Panel
	if (panelIds.length == 2) {
		// we are the only panel, so set the location for the user panel.location = 'bottom'
		
		panel.location = 'top'
		//panel.hiding= 'autohide' //"windowscover" or "windowsbelow" 
		
		panel.length = (screenrect.width/2)+(screenrect.width/16)
		panel.height = screenrect.height/30
		
		panel.alignment = "right"
		
	}
	
	
	var pastebin = panel.addWidget("pastebin")
	
	
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
	icontasks.writeConfig("sortingStrategy","1")
	icontasks.writeConfig("spacing","0")
	icontasks.writeConfig("style","2")
	icontasks.writeConfig("toolTips","0")
	icontasks.writeConfig("unity","true")
	//icontasks.writeConfig("Enabled","true")
	
	icontasks.currentConfigGroup = new Array('Launchers')
	icontasks.writeConfig("Items","file:///usr/share/applications/kde4/konqbrowser.desktop?wmClass=Konqueror,file:///usr/share/applications/firefox.desktop?wmClass=Firefox,file:///usr/share/applications/kde4/konversation.desktop?wmClass=Konversation,file:////usr/share/applications/kde4/dolphin.desktop?wmClass=Dolphin,file:///usr/share/applications/kde4/kate.desktop?wmClass=Kate,file:///usr/share/applications/kde4/konsole.desktop?wmClass=Konsole,file:///usr/share/applications/kde4/ksnapshot.desktop?wmClass=Ksnapshot,file:///usr/share/applications/vlc.desktop?wmClass=Vlc,file:///usr/share/applications/kde4/systemsettings.desktop?wmClass=Systemsettings")
	
	
	
	
	
	var systemtray = panel.addWidget("systemtray")
	
	
	var launcher = panel.addWidget("simplelauncher")
	launcher.writeConfig("format", "Description")
	launcher.writeConfig("showMenuTitles", "true")
	launcher.writeConfig("views", "Settings,SwitchUser,SaveSession,LockScreen,Logout,Standby,SuspendDisk,SuspendRAM,Restart,Shutdown")
	launcher.writeConfig("icon", "system-shutdown")
	
	
	var widget = "kwinbutton"
	/*check if the widget is installed and add if it is to your panel*/
	if (knownWidgetTypes.indexOf(widget) > -1) {
		var widget = panel.addWidget(widget)
		widget.writeConfig("ActionType", "2")
		widget.writeConfig("Maximized", "1")
		
	} 
	else {
		print("your system doesn't provide "+widget )
		
	}
	
	var widget = "kwinbutton"
	/*check if the widget is installed and add if it is to your panel*/
	if (knownWidgetTypes.indexOf(widget) > -1) {
		var widget = panel.addWidget(widget)
		widget.writeConfig("ActionType", "3")
		widget.writeConfig("Maximized", "1")
		
	} 
	else {
		print("your system doesn't provide "+widget )
		
	}
	
	
	var spacer = panel.addWidget("panelspacer_internal")
	
	
	
	var widget = "kwinbutton"
	/*check if the widget is installed and add if it is to your panel*/
	if (knownWidgetTypes.indexOf(widget) > -1) {
		var widget = panel.addWidget(widget)
		widget.writeConfig("ActionType", "4")
		widget.writeConfig("Maximized", "1")
		
	} 
	else {
		print("your system doesn't provide "+widget )
		
	}  
}

nowardevdouble()


// var systemtray = panel.addWidget("systemtray")
// systemtray.writeConfig("DefaultAppletsAdded","false")
// systemtray.writeConfig("ShowHardware","true")
// systemtray.writeConfig("ShowCommunications","true")
// systemtray.writeConfig("ShowApplicationStatus","true")
// systemtray.writeConfig("ShowSystemServices","true")
// systemtray.writeConfig("ShowUnknown","false")
//systemtray.writeConfig("alwaysShown","battery,notifier,KMix,org.kde.networkmanagement")
