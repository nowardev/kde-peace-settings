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
var biggestId = 0;

for (var i in activityIds) {
    var activity = activityById(activityIds[i]);
    for (var j in activity.widgetIds) {
        if (j > biggestId) {
            biggestId = j
        }
    }
}

for (var i in panelIds) {
    var panel = panelById(panelIds[i]);
    for (var j in panel.widgetIds) {
        if (j > biggestId) {
            biggestId = j
        }
    }
}

for (var i in panelIds) {
    var panel = panelById(panelIds[i]);
    for (var j in panel.widgetIds) {
        var widget = panel.widgetById(panel.widgetIds[j]);
        if (widget.type == "systemtray") {
            widget.currentConfigGroup = new Array('Applets', biggestId+1);
            widget.writeConfig('plugin', 'notifications');
            widget.reloadConfig();
        }
    }
}