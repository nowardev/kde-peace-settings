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
////////function remove in case of error of first remove :S
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



//start another function to create panels layout
var screenrect = screenGeometry(0);  // get the geometry of your screen 


function nowardev(){
var panel = new Panel
if (panelIds.length == 1) {
    // panel.location = 'bottom'
    panel.location = 'top'
    //panel.hiding= 'autohide' //"windowscover" or "windowsbelow" 
}

panel.height = 30


 var launcher = panel.addWidget("launcher");
//launcher.writeConfig("icon", "start-here");
panel.addWidget("showdesktop")
  panel.addWidget("panelspacer_internal");
//var runcommand = panel.addWidget("runcommand");
//runcommand.writeConfig("width",screenrect.width/10 );
panel.addWidget("pastebin");


var quick = panel.addWidget("quickaccess"); 
  
  


var icontasks = panel.addWidget("icontasks");
icontasks.writeConfig("groupClick","1");
icontasks.writeConfig("iconScale","49");
icontasks.writeConfig("launcherIcons","false");
icontasks.writeConfig("maxRows","1");
icontasks.writeConfig("mediaButtons","true");
icontasks.writeConfig("middleClick","0");
icontasks.writeConfig("previewSize","200");
icontasks.writeConfig("rotate","false");
icontasks.writeConfig("showOnlyCurrentActivity","false");
icontasks.writeConfig("showOnlyCurrentDesktop","false");
icontasks.writeConfig("showOnlyCurrentScreen","false");
icontasks.writeConfig("showProgress","true");
icontasks.writeConfig("showSeparator","0");
icontasks.writeConfig("sortingStrategy","2");
icontasks.writeConfig("spacing","0");
icontasks.writeConfig("style","2");
icontasks.writeConfig("toolTips","0");
icontasks.writeConfig("unity","true");
//icontasks.writeConfig("Enabled","true")

icontasks.currentConfigGroup = new Array('Launchers')
icontasks.writeConfig("Items","file:///usr/share/applications/firefox.desktop?wmClass=Firefox,file:///usr/share/applications/kde4/kate.desktop?wmClass=Kate,file:///usr/share/applications/kde4/konversation.desktop?wmClass=Konversation,file:////usr/share/applications/kde4/dolphin.desktop?wmClass=Dolphin,file:///usr/share/applications/chromium-browser.desktop?wmClass=Chromium-browser,file:///usr/share/applications/kde4/konsole.desktop?wmClass=Konsole,file:///usr/share/applications/kde4/ksnapshot.desktop?wmClass=Ksnapshot,file:///usr/share/applications/kde4/systemsettings.desktop?wmClass=Systemsettings");

 


// var quick = panel.addWidget("quickaccess"); 

// panel.addWidget("trash");


  
// var translatoid = panel.addWidget("translatoid");

// var yawp = panel.addWidget("yaWP");

// yawp.writeConfig("animation.daysnames","8");
// yawp.writeCodnfig("animation.details","1");
// yawp.writeConfig("animation.duration","500");
// yawp.writeConfig("animation.icon","3");
// yawp.writeConfig("animation.page","8");
// yawp.writeConfig("custom.fontcolor.lowtemp","30,28,27");
// yawp.writeConfig("custom.fontcolor.normal","20,19,18");
// yawp.writeConfig("custom.fontcolor.shadows","255,255,255,100");
// yawp.writeConfig("custom.fontcolor.usage","false");
// yawp.writeConfig("custom.theme.background.enabled","false");
//yawp.writeConfig("custom.theme.enabled","false");
//yawp.writeConfig("custom.theme.file","");
//yawp.writeConfig("panel.forecast.days","1");
//yawp.writeConfig("panel.forecast.format","3");
//yawp.writeConfig("panel.layout.compact","false");
//yawp.writeConfig("panel.today.format","3");
//yawp.writeConfig("panel.tooltip.extended.enabled","true");
//yawp.writeConfig("panel.tooltip.extended.format","5");
//yawp.writeConfig("start delay","0");
//yawp.writeConfig("system.distance","2007");
//yawp.writeConfig("system.pressure","5007");
//yawp.writeConfig("system.speed","9001");
//yawp.writeConfig("system.temperature","6001");
//yawp.writeConfig("text.shadows","false");
//yawp.writeConfig("theme","default");
//yawp.writeConfig("traverse locations","false");
//yawp.writeConfig("traverse locations timeout","30");
//yawp.writeConfig("update interval","45")
 
// yawp.currentConfigGroup = new Array('locations')

//yawp.writeConfig("city01","accuweather,Verona\\, Italy(Veneto),Italy,it,EUR.IT.IT020.VERONA,Europe/Rome");
//yawp.writeConfig("selected","0");

// yawp.currentConfigGroup = new Array('ExtenderItems')

//yawp.writeConfig(" extenderItemPosition","0");



//qlaunch.writeConfig("iconSize", "24")
 

var pager = panel.addWidget("pager");
pager.writeGlobalConfig("rows", "2");


var systemtray = panel.addWidget("systemtray");

var clock = panel.addWidget("digital-clock");
clock.writeConfig("showDate", "false");
clock.writeConfig("showDay", "false");
clock.writeConfig("showSeconds", "true");
clock.writeConfig("showYear", "false");
clock.writeConfig("showShadow", "false");
//clock.writeConfig("showTimezone", "true");
clock.writeConfig("plainClockFont", "Serif,12,-1,5,75,0,0,0,0,0");
clock.writeConfig("useCustomColor", "true");
clock.writeConfig("plainClockColor", "255,255,255");
clock.writeConfig("plainClockDrawShadow", "false");

var  lockout = panel.addWidget("lockout")
//lockout.writeConfig("showHibernateButton","true")
lockout.writeConfig("showLogoutButton","true")
lockout.writeConfig("showLockButton","false")
lockout.writeConfig("showSleepButton","false")
lockout.writeConfig("showSwitchUserButton","true")
 
}

nowardev()


 