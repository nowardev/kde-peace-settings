//Copyright (C) 2012 nowardev nowardev@gmail.com

//This file is part of kde-peace-settings.

//kde-peace-settings is free software: you can redistribute it and/or modify
//it under the terms of the GNU General Public License as published by
//the Free Software Foundation, either version 3 of the License, or
//(at your option) any later version.
//
//This program is distributed in the hope that it will be useful,
//but WITHOUT ANY WARRANTY without even the implied warranty of
//MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//GNU General Public License for more details.
//
//You should have received a copy of the GNU General Public License
//along with this program.  If not, see <http://www.gnu.org/licenses/>.


///GNOME3 LIKE PANELS
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
function gnome3(){
	
	
	var panel = new Panel
	if (panelIds.length == 1) {
		// we are the only panel, so set the location for the user panel.location = 'bottom'
		
		panel.location = 'top'
		//panel.hiding= 'autohide' //"windowscover" or "windowsbelow" 
		
		panel.length = (screenrect.width/2)-5*screenrect.width/96 
		panel.height = screenrect.height/30
		
		panel.alignment = "left"
		
	}
	var activitymanager= panel.addWidget( "activitymanager")
	var menubar = panel.addWidget("menubar")
	//menubar.writeConfig("useButtonFormFactor", "false")
	
	
	var panel = new Panel
	if (panelIds.length == 2) {
		// we are the only panel, so set the location for the user panel.location = 'bottom'
		
		panel.location = 'top'
		//panel.hiding= 'autohide' //"windowscover" or "windowsbelow" 
		
		panel.length = 5*screenrect.width/48 
		panel.height = screenrect.height/30
		panel.alignment = "center"
		
	}
	panel.addWidget("panelspacer_internal")
	panel.addWidget("panelspacer_internal")
	var clock = panel.addWidget("digital-clock")
	clock.writeConfig("showDate", "true")
	clock.writeConfig("showDay", "true")
	clock.writeConfig("showSeconds", "true")
	clock.writeConfig("showYear", "true")
	clock.writeConfig("showShadow", "false")
	//clock.writeConfig("showTimezone", "true")
	clock.writeConfig("plainClockFont", "Serif,12,-1,5,75,0,0,0,0,0")
	//clock.writeConfig("dateStyle","3")
	
	clock.writeConfig("useCustomColor", "true")
	clock.writeConfig("plainClockColor", "255,255,255")
	clock.writeConfig("plainClockDrawShadow", "false")
	
	var panel = new Panel
	if (panelIds.length == 3) {
		// we are the only panel, so set the location for the user panel.location = 'bottom'
		
		panel.location = 'top'
		//panel.hiding= 'autohide' //"windowscover" or "windowsbelow" 
		
		panel.length = (screenrect.width/2)-5*screenrect.width/96
		panel.height = screenrect.height/30
		
		panel.alignment = "right"
		
	}
	
	
	panel.addWidget("panelspacer_internal")
	
	
	
	
	var mixer = panel.addWidget("veromix-plasmoid")
	var printer = panel.addWidget("printmanager")
	var notification = panel.addWidget ("notifier")
	var network = panel.addWidget("org.kde.networkmanagement")
	var notification = panel.addWidget ("notifications")
	var battery = panel.addWidget("battery")
	
	
	
	
	//var systemtray = panel.addWidget("systemtray")
	//systemtray.writeConfig("DefaultAppletsAdded","false")
	//systemtray.writeConfig("ShowHardware","false")
	//systemtray.writeConfig("ShowCommunications","false")
	//systemtray.writeConfig("ShowApplicationStatus","false")
	//systemtray.writeConfig("ShowSystemServices","false")
	//systemtray.writeConfig("ShowUnknown","false")
	//systemtray.writeConfig("alwaysShown","battery,notifier,KMix")
	
	
	
	
	
	
	
	
	
	var widget = "org.kde.telepathy-presence"
	/*check if the widget is installed and add if it is to your panel*/
	if (knownWidgetTypes.indexOf(widget) > -1) {
		var widget = panel.addWidget(widget)
		
	} 
	else {
		
		
		var widget = "ktp_presence"
		/*check if the widget is installed and add if it is to your panel*/
		if (knownWidgetTypes.indexOf(widget) > -1) {
			var widget = panel.addWidget(widget)
			
		} 
		else {
			print("your system doesn't provide "+widget )
		}
	}
	
	
	
	var launcher = panel.addWidget("simplelauncher")
	launcher.writeConfig("format", "Description")
	launcher.writeConfig("showMenuTitles", "true")
	launcher.writeConfig("views", "Settings,SaveSession,LockScreen,SuspendDisk,Restart,Shutdown")
	
	launcher.writeConfig("icon", "system-shutdown")
	//launcher.writeConfig("icon", "applications-engineering")
	
	var panel = new Panel
	if (panelIds.length == 4) {
		// we are the only panel, so set the location for the user panel.location = 'bottom'
		
		panel.location = 'bottom'
		panel.hiding= 'windowscover' //"windowscover" or "windowsbelow" autohide
		panel.alignment = 'center'
		
		panel.height = screenrect.height/20
		//panel.alignment = 'left'
		panel.length = screenrect.width-64
	}
	
	// check if homerunlauncher is installed , if not check if shelf is  installed if not add the standard launcher
	var widget = "homerunlauncher"
	/*check if the widget is installed and add if it is to your panel*/
	if (knownWidgetTypes.indexOf(widget) > -1) {
		var widget = panel.addWidget(widget)
		
	} 
	else {
		var widget = "takeoff"
		/*check if the widget is installed and add if it is to your panel*/
		if (knownWidgetTypes.indexOf(widget) > -1) {
			
			var widget = panel.addWidget(widget)
			widget.writeConfig("iconLocation", "start-here-kde")
			
			
		} 
		else {
			var launcher = panel.addWidget("launcher")
			// 			launcher.currentConfigGroup = new Array('Shortcuts')
			// 			launcher.globalShortcut = "F13"
			
			
		}
		
	}
	
	
	
	
	var quick = panel.addWidget("quickaccess") 
	
	panel.addWidget("pastebin")
	var pager = panel.addWidget("pager")
	pager.writeGlobalConfig("rows", "2")
	
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
	icontasks.writeConfig("Items","file:///usr/share/applications/firefox.desktop?wmClass=Firefox,file:///usr/share/applications/kde4/kate.desktop?wmClass=Kate,file:///usr/share/applications/kde4/konversation.desktop?wmClass=Konversation,file:////usr/share/applications/kde4/dolphin.desktop?wmClass=Dolphin,file:///usr/share/applications/chromium-browser.desktop?wmClass=Chromium-browser,file:///usr/share/applications/kde4/konsole.desktop?wmClass=Konsole,file:///usr/share/applications/kde4/ksnapshot.desktop?wmClass=Ksnapshot,file:///usr/share/applications/kde4/systemsettings.desktop?wmClass=Systemsettings")
	
	
	
	
	
	
	
	
	
	
	
	
	
}




gnome3()