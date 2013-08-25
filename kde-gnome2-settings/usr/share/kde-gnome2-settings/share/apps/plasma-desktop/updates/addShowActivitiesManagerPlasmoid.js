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
function findWidgetsIn(containment, type)
{
    var widgetIds = containment.widgetIds
    for (id in widgetIds) {
        var widget = containment.widgetById(widgetIds[id])
        if (widget.type == type) {
             return widget;
        }
    }
    
    return false;
}

this.findWidgets = function(type)
{
    for (i in panelIds) {
        if (findWidgetsIn(panelById(panelIds[i]), type)) {
            return true;
        }
    }

    for (i in activityIds) {
        if (findWidgetsIn(activityById(activityIds[i]), type)) {
             return true;
	}
    }
    
    return false;
}

if (!findWidgets('org.kde.showActivityManager')) {
    var panels = panels()
    var found = false
    for (i in panels) {
	found = findWidgetsIn(panels[i], 'launcher')
	if (found) {
	  var showWidget = panels[i].addWidget("org.kde.showActivityManager")
	  showWidget.index = found.index + 1;
	  break;
	}
    }
    
    if (!found && panels.length > 0) {
      var showWidget = panels[i].addWidget("org.kde.showActivityManager")
      showWidget.index = 0;
    }
}
