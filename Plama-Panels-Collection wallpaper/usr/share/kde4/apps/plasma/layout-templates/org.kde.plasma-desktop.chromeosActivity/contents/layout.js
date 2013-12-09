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

///CHROMEOS ACTIVITY 
var screenrect = screenGeometry(0) // get information about your screen h w 

function chromeos(){

	//check which browser is installed and which one is the default one 
	
var default_browser=defaultApplication("browser").split(" ")
	var pathdefault_browser="file://"+applicationPath(default_browser[0]+".desktop")
	
	var default_filemanager=defaultApplication("filemanager").split(" ")
	var pathdefault_filemanager="file://"+applicationPath(default_filemanager[0]+".desktop")
	
	var default_terminal=defaultApplication("terminal").split(" ")
	var pathdefault_terminal="file://"+applicationPath(default_terminal[0]+".desktop")
	
	var default_office=defaultApplication("application/msword")
	if(default_office.match("libreoffice")){
	var default_office=default_office.split(" ")
	var pathdefault_office="file://"+applicationPath(default_office[0]+"-writer"+".desktop")
 
	}
	else{
	var default_office=default_office.split(" ")
	var pathdefault_office="file://"+applicationPath(default_office[0]+".desktop")
	}
	
	var default_imclient=defaultApplication("imClient").split(" ")
	var pathdefault_imclient="file://"+applicationPath(default_imclient[0]+".desktop")
	
	var default_mailer=defaultApplication("mailer").split(" ")
	var pathdefault_mailer="file://"+applicationPath(default_mailer[0]+".desktop")	
	
	var default_imageviewer=defaultApplication("image/png").split(" ")
	var pathdefault_imageviewer="file://"+applicationPath(default_imageviewer[0]+".desktop")	
	
	var default_videoplayer=defaultApplication("video/mp4") 
	
	if (default_videoplayer.match("/usr/bin/") ){
	 var default_videoplayer = default_videoplayer.replace("/usr/bin/","").split(" ")
	 
	}
	else {
	  default_videoplayer.split(" ")
	}
  	var pathdefault_videoplayer="file://"+applicationPath(default_videoplayer[0]+".desktop")	
	
	
	var activity = new Activity("sal")
	activity.name = i18n("ChromeOs Activity")
	activity.writeConfig("EnabledEntries","plasma-sal-multimedia.desktop,plasma-sal-internet.desktop,plasma-sal-graphics.desktop,plasma-sal-games.desktop,plasma-sal-office.desktop,wine-wine/,Education/,Settingsmenu/,plasma-sal-system.desktop,plasma-sal-utility.desktop,plasma-sal-development.desktop")
	activity.wallpaperPlugin = "image"
	activity.wallpaperMode = "SingleImage"
	activity.currentConfigGroup = Array("Wallpaper", "image")
	activity.writeConfig("wallpaper", "fabric")
	activity.writeConfig("previewPlugins","imagethumbnail,jpegthumbnail,kffmpegthumbnailer") 
	i=0
// 	var stripwidget = [pathdefault_browser , pathdefault_filemanager , pathdefault_imageviewer , pathdefault_imclient , pathdefault_mailer , pathdefault_office , pathdefault_terminal, pathdefault_videoplayer, "systemsettings.desktop", "kcalc.desktop"]
// 	
// 	for (i=0; i< stripwidget.lenght ; i++) {
// 		activity.currentConfigGroup = ['stripwidget', 'favourite-'+i]
// 		activity.writeConfig("url",stripwidget[i]	)
// 	}
	activity.currentConfigGroup = ['stripwidget', 'favourite-'+i]
	activity.writeConfig("url",pathdefault_browser	)
	i++
	activity.currentConfigGroup = ['stripwidget', 'favourite-'+i]	
	activity.writeConfig("url",pathdefault_filemanager)
	i++
	activity.currentConfigGroup = ['stripwidget', 'favourite-'+i]	
	activity.writeConfig("url",pathdefault_imageviewer)
	i++
	activity.currentConfigGroup = ['stripwidget', 'favourite-'+i]	
	activity.writeConfig("url",pathdefault_videoplayer)
	i++
	activity.currentConfigGroup = ['stripwidget', 'favourite-'+i]	
	activity.writeConfig("url",pathdefault_terminal)
	i++
	activity.currentConfigGroup = ['stripwidget', 'favourite-'+i]	
	activity.writeConfig("url",pathdefault_office)
	i++
	activity.currentConfigGroup = ['stripwidget', 'favourite-'+i]	
	activity.writeConfig("url",pathdefault_imclient)
	i++
	activity.currentConfigGroup = ['stripwidget', 'favourite-'+i]	
	activity.writeConfig("url",applicationPath("systemsettings.desktop"))
	i++
	var desktopfile = "kcalc.desktop"
	var executable  = "kcalc"
	if (applicationExists(executable)) {  
	activity.currentConfigGroup = ['stripwidget', 'favourite-'+i]	
	activity.writeConfig("url",applicationPath(desktopfile))	
	}
 
 
	
	
	activity.reloadConfig()
}

chromeos()

//loadTemplate("org.kde.plasma-desktop.chromeos2Panel")
 