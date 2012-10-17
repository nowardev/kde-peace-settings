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
       p = panelById(panelIds[i]);
       if (typeof p === "undefined") {
       print("E: Couldn't find first panel");
       remove() //load the remove function in case of problems
       }
        else 	{
	  panelById(panelIds[i]).remove()
	  	} 
                                    }
}
//RemoveOldPanels() //load the function 
 //////////////////////////////////////////////////////////
var screenrect = screenGeometry(0);  
function activitymac(){
  
 
 var activity   = new Activity("desktop")
activity.name = i18n("Mac Activity");


var daisy = activity.addWidget("plasma_applet_daisy")

daisy.writeConfig("middleclickaction","run");
daisy.writeConfig("icospacing","0.25");
daisy.writeConfig("icodimension","52");
daisy.writeConfig("floating","false");
daisy.writeConfig("drawersize","30");
daisy.writeConfig("drawerrotation","1.6");
daisy.writeConfig("click_effects","true");
daisy.writeConfig("background_opacity","0.6");
daisy.writeConfig("acceptdrops","true");
daisy.writeConfig("player","Amarok 2.x")
daisy.writeConfig("plugin","plasma_applet_daisy")
daisy.writeConfig("position","buttom_center")
daisy.writeConfig("reservespace","true")
daisy.writeConfig("showclosetask","true")
daisy.writeConfig("showindicons","true")
daisy.writeConfig("showmirror","true")
daisy.writeConfig("showondesk","true")
daisy.writeConfig("showtaskoflauncher","false")
daisy.writeConfig("showtooltips","true")
daisy.writeConfig("showtooltips_inactive","true")
daisy.writeConfig("showtooltips_launchers","true")
daisy.writeConfig("taskpreviews","true")
daisy.writeConfig("theme","default")
daisy.writeConfig("theme_t","alternative")
daisy.writeConfig("tip_type","thumbnail")
daisy.writeConfig("total_launchers","9")
daisy.writeConfig("type","standard_dock")
daisy.writeConfig("wallpaperplugin","image")
daisy.writeConfig("wallpaperpluginmode","SingleImage")
daisy.writeConfig("zoomtype","simple")
daisy.writeConfig("zvalue","25")

 
var nowplaying = activity.addWidget("nowplaying")
var mediaplayer = activity.addWidget("mediaplayer")


}
activitymac()

 






//loadTemplate("org.kde.plasma-desktop.macPanel")
