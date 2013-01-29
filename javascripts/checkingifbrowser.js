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

 
 
//  var texteditor=defaultApplication("text/plain")test.split(" ")
 
 
//  print (texteditor[0]) 
// var test=defaultApplication("video/x-ogm+ogg").split(",")
// var test2= test.split(" ")
// var hello = test[0]
//  print (hello)
//  
// print (defaultApplication("browser"))
// print (defaultApplication("filemanager"))
// print (defaultApplication("mailer"))
// print (defaultApplication("terminal"))
// print (defaultApplication("imClient"))
 
//  var re = /%U/gi;
// var str = "minghia %U";
// var newstr = str.replace(re, " ");
// print (str)
// print(newstr);
//  var test =defaultApplication("text/plain").split(" ")
//  print (test[0])
//create an array with destkop files  
var array = ["firefox.desktop","chromium-browser.desktop","chrome.desktop","konqbrowser.desktop","midori.desktop","qupzilla.desktop","opera-browser.desktop"] 
//loop over the array checking if exist the file if it exist print stuff 
var k=0
for(var i=0; i<array.length; i++){ 


 if (applicationExists(array[i])){  
   if (array[i]=="firefox.desktop"){
		var taskmanager[k]="file://"applicationPath(array[i])"?wmClass=Firefox,"
		print ( "file://"+applicationPath(array[i])+"?wmClass=Firefox")
		k=k++
 		}
  else if(array[i]=="opera-browser.desktop"){
	print ( "file://"+applicationPath(array[i])+"?wmClass=Opera")
		  }
  else if(array[i]=="chromium-browser.desktop"){
	print ( "file://"+applicationPath(array[i])+"?wmClass=Chromium-browser")
		  }
  else if(array[i]=="midori.desktop"){
	print ( "file://"+applicationPath(array[i])+"?wmClass=Midori")
		  }
  else if(array[i]=="konqbrowser.desktop"){
	print ( "file://"+applicationPath(array[i])+"?wmClass=Konqueror")
		  }
  else if(array[i]=="qupzilla.desktop"){
	print ( "file://"+applicationPath(array[i])+"?wmClass=Qupzilla")
		  }
	 }
	else{
		print (array[i]+" do not exist ")
	}
   
 }
// var array="tex/plain , browser, filemanger, mailer, imClient, terminal, video/quicktime".split(",")
//  for(var i=0; i<array.length; i++){ 
//    var testing = defaultApplication("\""+array[i]+"\"")
//   print (  testing)
// //   print (str)
// }
//loadTemplate("org.kde.plasma-desktop.gnome2Panel")
 