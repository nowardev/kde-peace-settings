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


var screenrect = screenGeometry(0); // get information about your screen h w 

//start another function to create panels layout
function chromeos(){
	
	var panel = new Panel
	if (panelIds.length == 1) {
		// we are the only panel, so set the location for the user panel.location = 'bottom'
		panel.location = 'bottom'
	}
	
	
	
	
	
	panel.height = screenrect.height/30
	
	var mixer = panel.addWidget("veromix-plasmoid")
	var notification = panel.addWidget ("notifier")
	var network = panel.addWidget("org.kde.networkmanagement")
	var printer = panel.addWidget("printmanager")
	var notification = panel.addWidget ("notifications")
	var battery = panel.addWidget("battery")
	
	panel.addWidget("showdesktop") ;
	var icontasks = panel.addWidget("icontasks")
	icontasks.writeConfig("showOnlyCurrentActivity","false")
	icontasks.writeConfig("showOnlyCurrentDesktop","false")
	icontasks.writeConfig("showOnlyCurrentScreen","false")
	icontasks.writeConfig("style","1")
	
	pager = panel.addWidget("pager")
	pager.writeGlobalConfig("rows", "1")
	
	panel.addWidget("trash")
	//panel.addWidget("smooth-tasks")
	//panel.addWidget("launcher")
	//panel.addWidget("pastebin")
	//panel.addWidget("tasks")
	// launcher = panel.addWidget("simplelauncher")
	// launcher.writeConfig("format", "Description")
	// launcher.writeConfig("showMenuTitles", "true")
	// launcher.writeConfig("views", "Applications,Favorites,Computer,Settings,RunCommand,Leave")
	//launcher.writeConfig("icon", "start-here")
// 	var launcher = panel.addWidget("launcher")
}

chromeos()


