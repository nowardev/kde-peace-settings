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
function defaults_applications(){
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

	print(applicationPath("systemsettings.desktop"))
 	 print (pathdefault_browser+" " + pathdefault_imclient+" " +pathdefault_office+" " + pathdefault_terminal +" "+pathdefault_filemanager +" "+ pathdefault_mailer +" "+pathdefault_videoplayer+" "+pathdefault_imageviewer)
 }
 
 defaults_applications()