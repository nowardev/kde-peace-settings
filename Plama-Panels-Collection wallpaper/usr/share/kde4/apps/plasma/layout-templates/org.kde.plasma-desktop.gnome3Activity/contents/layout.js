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

///GNOME3 DESKTOP
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
var x = screenrect.width
var y = screenrect.height
var xy = x+"x"+y
print (xy)

function activitygnome3(){
	
	var activity = new Activity("desktop")
	activity.name = i18n("Gnome3 Activity")
			
			var activitymanager  = activity.addWidget("activitymanager")
			
			
// 			activitymanager.writeConfig("desktop","-1")
// 			activitymanager.writeConfig("formfactor","2")
// 			activitymanager.writeConfig("geometry","0,-41,screenrect.width/4,screenrect.height/3")
// 			activitymanager.writeConfig("immutability","1")
// 			activitymanager.writeConfig("lastDesktop","-1")
// 			activitymanager.writeConfig("lastScreen","0")
// 			activitymanager.writeConfig("location","3")
// 			activitymanager.writeConfig("plugin","panel")
// 			activitymanager.writeConfig("screen","0")
// 			activitymanager.writeConfig("zvalue","0")
	activity.wallpaperPlugin = "image"
	activity.wallpaperMode = "SingleImage"
	activity.currentConfigGroup = Array("Wallpaper", "image")
	activity.writeConfig("wallpaper", "fabric-gnome")
//      activity.writeConfig("wallpaper", "/usr/share/wallpapers/fabric-gnome/contents/images/"+xy+".png")
// 	activity.writeConfig("wallpaperposition","2")
	activity.writeConfig("previewPlugins","imagethumbnail,jpegthumbnail,kffmpegthumbnailer") 
	activity.reloadConfig()
}




activitygnome3()
//loadTemplate("org.kde.plasma-desktop.gnome3Panel")
