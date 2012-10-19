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

///GNOME2 ACTIVITY
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
function activitygnome2(){
	
	var activity = new Activity("folderview")
	activity.name = i18n("Gnome2 Activity")
	activity.writeConfig("alignToGrid","true")
	activity.writeConfig("blankLabel","false")
	activity.writeConfig("clickForFolderPreviews","true")
	activity.writeConfig("customIconSize","48")
	activity.writeConfig("customLabel","")
	activity.writeConfig("drawShadows","true")
	activity.writeConfig("filter","0")
	activity.writeConfig("filterFiles","*")
	activity.writeConfig("flow","1")
	activity.writeConfig("formfactor","0")
	activity.writeConfig("iconsLocked","false")
	activity.writeConfig("mimeFilter","")
	activity.writeConfig("numTextLines","2")
	activity.writeConfig("url","desktop:/")
	activity.writeConfig("wallpaperplugin","image")
	activity.writeConfig("previewPlugins","imagethumbnail,jpegthumbnail,kffmpegthumbnailer")
	
	
	
	//activity.wallpaperPlugin = "image"
	//activity.wallpaperMode = "SingleImage"
	//activity.currentConfigGroup = Array("Wallpaper", "image")
	//activity.writeConfig("wallpaper", "name image or location")
	
	
	var dolphin = activity.addWidget("icon")
	dolphin.writeConfig("Url", "dolphin.desktop")
	dolphin.geometry = new QRectF(0, screenrect.height/7, screenrect.width/10, screenrect.height/10)
	
	var a = screenrect.height/9
	var b = screenrect.height/5 
	
	var trash = activity.addWidget("trash")
	trash.geometry = new QRectF(0, a + b , screenrect.width/12, screenrect.height/12)
	
	
	var launcher = activity.addWidget("lancelot_part")
	launcher.writeConfig("iconLocation", "drive-harddisk")
	launcher.writeConfig("iconClickActivation", "true")
	launcher.writeConfig("contentsExtenderPosition", "1")
	launcher.writeConfig("searchHistory", "firefox")
	launcher.writeConfig("showSearchBox", "true")
	launcher.writeConfig("partData","model=Devices%2FFixed&type=list&version=1.0\nmodel=Devices%2FRemovable&type=list&version=1.0\n")
	
	//panel.length = (screenrect.width/2)-5*screenrect.width/96 
	//panel.height = 27
	//panel.alignment = "left"
	//menubar.writeConfig("useButtonFormFactor", "false")
	//panel.width = 40 
	//panel.alignment = 'left'
	
	
	
	
}

activitygnome2()

//loadTemplate("org.kde.plasma-desktop.gnome2Panel")
