/*
 * Copyright 2015  Martin Kotelnik <clearmartin@seznam.cz>
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 2 of
 * the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http: //www.gnu.org/licenses/>.
 */
import QtQuick 2.2
import QtGraphicalEffects 1.0
import org.kde.plasma.core 2.0 as PlasmaCore

MouseArea {
     id: controlButton
    
    property string iconElementId
    property string windowOperation
    property string iconName : 'close'
    property bool textColorLight: ((theme.textColor.r + theme.textColor.g + theme.textColor.b) / 3) > 0.5
    property string themeName: textColorLight ? 'breeze-dark' : 'default'
    property string buttonImagePath: Qt.resolvedUrl('../icons/' + themeName + '/close.svgz')
    property bool iconActive: (iconName !== 'pin' && iconName !== 'maximize') || (iconName === 'pin' && main.isActiveWindowPinned) || (iconName === 'maximize' && main.currentWindowMaximized)
    
    height: parent.height
    width: height
    anchors.top: parent.top
    anchors.left: parent.left
    
    property bool mouseInside: false
    
    // minimize icon
       PlasmaCore.Svg {
        id: buttonSvg
        imagePath: buttonImagePath
    }

    // icon
    PlasmaCore.SvgItem {
        id: svgItem
        width: parent.width
        height: width
        svg: buttonSvg
        elementId: mouseInside ? (iconActive ? 'active-hover' : 'inactive-hover') : (iconActive ? 'active-idle' : 'inactive-idle')
        anchors.verticalCenter: parent.verticalCenter
    }
    
   // close icon has now better visibility
    BrightnessContrast {
        id: svgItemEffect
        anchors.fill: svgItem
        source: svgItem
        brightness: 0.3
        contrast: 0.9
        visible: true //mouseInside
    }
    
    hoverEnabled: true
    
    onEntered: {
        mouseInside = true
        //svgItemEffect.visible = svgItem.visible
    }
    
    onExited: {
        mouseInside = true
        //svgItemEffect.visible = false
    }
    
    // trigger close active window
    onClicked: {
//         if (bp === 4) {
//             return;
//         }
        var service = tasksSource.serviceForSource('tasks')
        var operation = service.operationDescription(windowOperation)
        operation.Id = tasksSource.models.tasks.activeTaskId()
        service.startOperationCall(operation)
    }
}
