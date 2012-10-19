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

 
 
var activity = new Activity("sal")
activity.name = i18n("ChromeOs Activity")
activity.writeConfig("EnabledEntries","plasma-sal-bookmarks.desktop,plasma-sal-contacts.desktop,plasma-sal-multimedia.desktop,plasma-sal-internet.desktop,plasma-sal-graphics.desktop,plasma-sal-games.desktop,plasma-sal-office.desktop")



}

chromeos()

//loadTemplate("org.kde.plasma-desktop.gnome2Panel")
 