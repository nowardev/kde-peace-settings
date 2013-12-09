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

// RemoveOldPanels() //load the function 
// RemoveOldPanels() //reload the function  to avoid plasma crashes 
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
		panel.height = screenrect.height/25;
		
		panel.alignment = "left"
		
	}
	
	var launcher = panel.addWidget("launcher")
	launcher.currentConfigGroup = new Array('Shortcuts')
	launcher.globalShortcut = "F13"
	
	// 	var launcher = panel.addWidget("launcher")
	//launcher.writeConfig("icon", "start-here")
	
	
	var widget = "kwinbutton"
	/*check if the widget is installed and add if it is to your panel*/
	if (knownWidgetTypes.indexOf(widget) > -1) {
		var widget = panel.addWidget(widget)
		widget.writeConfig("ActionType", "1")
		widget.writeConfig("Maximized", "1")
		
	} 
	else {
		print("your system doesn't provide "+widget )
		
	}  
	
	
	
	
	
	var menubar = panel.addWidget("menubar")
	
		
	var weather = panel.addWidget("weather")
	weather.writeConfig("Share","false")
	weather.writeConfig("pressureUnit","5008")
	weather.writeConfig("source","wettercom|weather|Verona, Veneto, IT|IT0VE0284;Verona")
	weather.writeConfig("speedUnit","9001")
	weather.writeConfig("temperatureUnit","6001")
	weather.writeConfig("updateInterval","30")
	weather.writeConfig("visibilityUnit","2007")
	
	panel.addWidget("showdesktop")
	
	var panel = new Panel
	if (panelIds.length == 2) {
		// we are the only panel, so set the location for the user panel.location = 'bottom'
		
		panel.location = 'top'
		//panel.hiding= 'autohide' //"windowscover" or "windowsbelow" 
		
		panel.length = (screenrect.width/2)+(screenrect.width/16)
		panel.height = screenrect.height/25
		
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
	
	var array = ["konqbrowser.desktop","qupzilla.desktop","midori.desktop","rekonq.desktop","chromium-browser.desktop","firefox.desktop","chrome.desktop","opera-browser.desktop", "konversation.desktop","dolphin.desktop","kate.desktop","konsole.desktop","ksnapshot.desktop","kdenlive.desktop","vlc.desktop","systemsettings.desktop"] 
	//loop over the array checking if exist the file if it exist print stuff 
	var taskmanager=[]
	for(var i=0; i<array.length; i++){ 
		
		
		if (applicationExists(array[i])){  
			if(array[i]=="konqbrowser.desktop"){
				taskmanager.push("file://"+applicationPath(array[i])+"?wmClass=Konqueror")
 
			}
			else  if (array[i]=="firefox.desktop"){
				taskmanager.push("file://"+applicationPath(array[i])+"?wmClass=Firefox")
 
				
			}
			else if(array[i]=="opera-browser.desktop"){
				taskmanager.push("file://"+applicationPath(array[i])+"?wmClass=Opera")
 
			}
			else if(array[i]=="chromium-browser.desktop"){
				taskmanager.push("file://"+applicationPath(array[i])+"?wmClass=Chromium-browser")
 
			}
			else if(array[i]=="midori.desktop"){
				taskmanager.push("file://"+applicationPath(array[i])+"?wmClass=Midori")
 
			}
			
			else if(array[i]=="qupzilla.desktop"){
				taskmanager.push("file://"+applicationPath(array[i])+"?wmClass=Qupzilla")
 
			}
			else if(array[i]=="konversation.desktop"){
				taskmanager.push("file://"+applicationPath(array[i])+"?wmClass=Konversation")
 
			}
			else if(array[i]=="dolphin.desktop"){
				taskmanager.push("file://"+applicationPath(array[i])+"?wmClass=Dolphin")

			}
			else if(array[i]=="kate.desktop"){
				taskmanager.push("file://"+applicationPath(array[i])+"?wmClass=Kate")
 
			}
			else if(array[i]=="konsole.desktop"){
				taskmanager.push("file://"+applicationPath(array[i])+"?wmClass=Konsole")
 
			}
			else if(array[i]=="ksnapshot.desktop"){
				taskmanager.push("file://"+applicationPath(array[i])+"?wmClass=Ksnapshot")
			 
			}
			else if(array[i]=="vlc.desktop"){
				taskmanager.push("file://"+applicationPath(array[i])+"?wmClass=Vlc")
				 
			}
			else if(array[i]=="kdenlive.desktop"){
				taskmanager.push("file://"+applicationPath(array[i])+"?wmClass=Kdenlive")
				 
			}
			else if(array[i]=="systemsettings.desktop"){
				taskmanager.push("file://"+applicationPath(array[i])+"?wmClass=Systemsettings")
				 
			}
			
		}
		else{
			print (array[i]+" do not exist ")
		}
		
	}
	
// 	print(taskmanager)
	taskmanager.toString()
	icontasks.writeConfig("Items", taskmanager)
	
	
	
	
	
	var systemtray = panel.addWidget("systemtray")
	systemtray.writeConfig("auto","battery,Desktop Sharing,notifier,KGpg,org.kde.networkmanagement,Resize and Rotate,KMix")
	
	var launcher = panel.addWidget("simplelauncher")
	launcher.writeConfig("format", "Description")
	launcher.writeConfig("showMenuTitles", "true")
	launcher.writeConfig("views", "Settings,SwitchUser,SaveSession,LockScreen,Logout,Standby,SuspendDisk,SuspendRAM,Restart,Shutdown")
	launcher.writeConfig("icon", "system-shutdown")
	
	
	var widget = "kwinbutton"
	/*check if the widget is installed and add if it is to your panel*/
	if (knownWidgetTypes.indexOf(widget) > -1) {
		var widget1 = panel.addWidget(widget)
		widget1.writeConfig("ActionType", "2")
		widget1.writeConfig("Maximized", "1")
		var widget2 = panel.addWidget(widget)
		widget2.writeConfig("ActionType", "3")
		widget2.writeConfig("Maximized", "1")
		
	} 
	else {
		print("your system doesn't provide "+widget )
		
	}
	
	var widget ="adjustableclock"
	/*check if the widget is installed and add if it is to your panel*/
	if (knownWidgetTypes.indexOf(widget) > -1) {
		
		
		
		var clock =  panel.addWidget("adjustableclock") 
		clock.writeConfig("clipboardExpressions","Clock.toString(Clock.Time\\, {'short': true}),Clock.toString(Clock.Time),,Clock.toString(Clock.Date\\, {'short': true}),Clock.toString(Clock.Date),,Clock.toString(Clock.DateTime\\, {'short': true}),Clock.toString(Clock.DateTime),Clock.toString(Clock.Year) + '-' + Clock.toString(Clock.Month) + '-' + Clock.toString(Clock.DayOfMonth) + ' ' + Clock.toString(Clock.Hour) + ':' + Clock.toString(Clock.Minute) + ':' + Clock.toString(Clock.Second),,Clock.toString(Clock.Timestamp)")
		clock.writeConfig("theme","progress")
	}
	else{
		var clock = panel.addWidget("digital-clock")
		clock.writeConfig("showDate", "true")
		clock.writeConfig("showDay", "true")
		clock.writeConfig("showSeconds", "true")
		clock.writeConfig("showShadow", "false")
		clock.writeConfig("showYear", "true")
		//clock.writeConfig("showTimezone", "true")
		clock.writeConfig("plainClockFont", "Serif,12,-1,5,75,0,0,0,0,0")
		clock.writeConfig("useCustomColor", "true")
		clock.writeConfig("plainClockColor", "255,255,255")
		clock.writeConfig("plainClockDrawShadow", "false")
	}
 

	
	
// 	var widget = "kwinbutton"
// 	/*check if the widget is installed and add if it is to your panel*/
// 	if (knownWidgetTypes.indexOf(widget) > -1) {
// 		var spacer = panel.addWidget("panelspacer_internal")
// 		
// 	} 
// 	else {
// 		print("skypping spacer")
// 		
// 	}
	

	
	
	
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
