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

///MAC ACTIVITY

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
function activitymac(){
	
	
	var activity   = new Activity("desktop")
	activity.name = i18n("Mac Activity")
	activity.wallpaperPlugin = "image"
	activity.wallpaperMode = "SingleImage"
	activity.currentConfigGroup = Array("Wallpaper", "image")
	activity.writeConfig("wallpaper", "nowardev-mac")
	activity.writeConfig("previewPlugins","imagethumbnail,jpegthumbnail,kffmpegthumbnailer") 
	
	
	
	
	var widget ="plasma_applet_daisy"
	/*check if the widget is installed and add if it is to your panel*/
	if (knownWidgetTypes.indexOf(widget) > -1) {
		
		var widget = activity.addWidget(widget)
		
		widget.currentConfigGroup = new Array('Configuration')
		widget.writeConfig("middleclickaction","run")
		widget.writeConfig("icospacing","0.25")
		widget.writeConfig("icodimension","52")
		widget.writeConfig("floating","false")
		widget.writeConfig("drawersize","30")
		widget.writeConfig("drawerrotation","1.6")
		widget.writeConfig("click_effects","true")
		widget.writeConfig("background_opacity","0.6")
		widget.writeConfig("acceptdrops","true")
		widget.writeConfig("player","Amarok 2.x")
		widget.writeConfig("plugin","plasma_applet_daisy")
		widget.writeConfig("position","buttom_center")
		widget.writeConfig("reservespace","true")
		widget.writeConfig("showclosetask","true")
		widget.writeConfig("showindicons","true")
		widget.writeConfig("showmirror","true")
		widget.writeConfig("showondesk","true")
		widget.writeConfig("showtaskoflauncher","false")
		widget.writeConfig("showtooltips","true")
		widget.writeConfig("showtooltips_inactive","true")
		widget.writeConfig("showtooltips_launchers","true")
		widget.writeConfig("taskpreviews","true")
		widget.writeConfig("theme","default")
		widget.writeConfig("theme_t","alternative")
		widget.writeConfig("tip_type","thumbnail")
		widget.writeConfig("total_launchers","9")
		widget.writeConfig("type","standard_dock")
		widget.writeConfig("zoomtype","simple")
		widget.writeConfig("zvalue","25")
		
		
		
	} 
	else {
		print("your system doesn't provide "+widget )
		
	}
	
	
	
	var nowplaying = activity.addWidget("nowplaying")
	var mediaplayer = activity.addWidget("mediaplayer")
	
	activity.reloadConfig()
}
activitymac()
//loadTemplate("org.kde.plasma-desktop.macPanel")






