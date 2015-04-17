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
import QtQuick.Layouts 1.1
import QtQuick.Window 2.2
import org.kde.plasma.plasmoid 2.0
import org.kde.plasma.core 2.0 as PlasmaCore

Item {
	id: main
	
	property bool vertical: (plasmoid.formFactor == PlasmaCore.Types.Vertical)
	
	property double horizontalScreenWidthPercent: plasmoid.configuration.horizontalScreenWidthPercent
// 	property double buttonSize: plasmoid.configuration.buttonSize
	property bool showTitle: plasmoid.configuration.showTitle
	
	anchors.fill: parent
	Layout.preferredWidth: vertical ? parent.width : Screen.width * horizontalScreenWidthPercent
	Layout.minimumWidth:  parent.height
	Layout. minimumHeight : formFactor == PlasmaCore.Types.Vertical ? width  : 1
	Layout.maximumWidth: Layout.preferredWidth
	Layout.preferredHeight: parent.height //vertical ? Math.min(theme.defaultFont.pointSize * 4, parent.width) : parent.height
 
	Layout.maximumHeight: Layout.preferredHeight
	
	property bool noWindowVisible: false
	property int controlButtonsSpacing: 10
	
	property int bp: plasmoid.configuration.buttonsPosition;
// 	property bool showControlButtons: plasmoid.configuration.showControlButtons
// 	property bool showMinimize: showControlButtons && plasmoid.configuration.showMinimize
	property bool doubleClickClose: plasmoid.configuration.doubleClickClose
	property bool doubleClickMaximizes: plasmoid.configuration.doubleClickMaximizes
// 	property bool doubleClickMinimizes: plasmoid.configuration.doubleClickMinimizes
	property bool middleClickCloseWindow: plasmoid.configuration.middleClickCloseWindow
	property bool wheelUpMaximizes: plasmoid.configuration.wheelUpMaximizes
	property bool wheelDownMinimizes: plasmoid.configuration.wheelDownAction === 1
	property bool wheelDownUnmaximizes: plasmoid.configuration.wheelDownAction === 2
	
	Plasmoid.preferredRepresentation: Plasmoid.fullRepresentation

	//
	// MODEL
	//
	PlasmaCore.DataSource {
		id: tasksSource
		engine: 'tasks'
		onSourceAdded: {
			connectSource(source);
		}
		connectedSources: 'tasks'
	}
	// should return always one item
	PlasmaCore.SortFilterModel {
		id: activeWindowModel
		filterRole: 'Active'
		filterRegExp: 'true'
		sourceModel: tasksSource.models.tasks
		onCountChanged: {
			noWindowVisible = count === 0
		}
		
	}
// 	  var oldid = tasksSource.models.tasks.activeTaskId()
	function toggleMaximized() {
		var service = tasksSource.serviceForSource('tasks')
		var operation = service.operationDescription('toggleMaximized')
		operation.Id = tasksSource.models.tasks.activeTaskId()
		service.startOperationCall(operation)
        }
	function toggleMinimized() {
            if(oldid){
		var service = tasksSource.serviceForSource('tasks')
		var operation = service.operationDescription('setMaximized')
		operation.Id = oldid
                service.startOperationCall(operation)
            }else {
                setMinimized()
            }
        }
	        
	
	function windowClose() {
		var service = tasksSource.serviceForSource('tasks')
		var operation = service.operationDescription('close')
		operation.Id = tasksSource.models.tasks.activeTaskId()
		service.startOperationCall(operation)
	}
	
	function setMaximized(maximized) {
		var service = tasksSource.serviceForSource('tasks')
		var operation = service.operationDescription('setMaximized')
		operation.Id = tasksSource.models.tasks.activeTaskId()
		operation.maximized = maximized
		service.startOperationCall(operation)
	}
	
	function setMinimized() {
		var service = tasksSource.serviceForSource('tasks')
		var operation = service.operationDescription('setMinimized')
		operation.Id = tasksSource.models.tasks.activeTaskId()
              
		operation.minimized = true
		service.startOperationCall(operation)
	}
	
	Text {
		id: noWindowText
		anchors.verticalCenter: parent.verticalCenter
		anchors.leftMargin: 10
		anchors.left: parent.left
		text: i18n('^_^')
		color: theme.textColor
		width: parent.width - 10
		elide: Text.ElideRight
		
		visible: noWindowVisible
	}
	
//         Text {
// 		id: terst
// 		anchors.verticalCenter: parent.verticalCenter
// 		anchors.leftMargin: 29
// 		anchors.left: parent.left
// 		text: i18n('stocaz'+oldid)
// 		color: theme.textColor
// 		width: parent.width - 10
// 		elide: Text.ElideRight
// 		
// 		visible: true
// 	}

	//
	// ACTIVE WINDOW INFO
	//
	ListView {
		id: activeWindowListView
		anchors.fill: parent
		width: parent.width
		
		model: activeWindowModel
		
		delegate: Item {
			width: parent.width
			height: main.height
			
			// window icon
			PlasmaCore.IconItem {
				id: iconItem
				
				width: parent.height
				height: parent.height
				
				source: DecorationRole
			}
			
			// window title
			Text {
				id: windowTitleText
				anchors {
					left: iconItem.right
					verticalCenter: parent.verticalCenter
				}
				text:  DisplayRole
				color: theme.textColor
				wrapMode: Text.WordWrap
				maximumLineCount: parent.height / 20
				width: parent.width - iconItem.width
				elide: Text.ElideRight
				visible: showTitle
			}
		}
	}

	MouseArea {
		anchors.fill: parent
		
		hoverEnabled: true
		
		acceptedButtons: Qt.LeftButton | Qt.MiddleButton
		
		onEntered: {
			controlButtonsArea.mouseInWidget = true //showControlButtons && !noWindowVisible
		}
		
		onExited: {
			controlButtonsArea.mouseInWidget = false
		}
		
		onWheel: {
			if (wheel.angleDelta.y > 0) {
				if (wheelUpMaximizes) {
					setMaximized(true)
				}
			} else {
				if (wheelDownMinimizes) {
					setMinimized()
				} else if (wheelDownUnmaximizes) {
					setMaximized(false)
				}
			}
		}
		
		onDoubleClicked: {
			if (mouse.button == Qt.LeftButton && doubleClickMaximizes) {
				toggleMaximized()
			}
// 			else if (mouse.button == Qt.LeftButton && doubleClickMinimizes){
// //                             toggleMaximized()
//                             toggleMinimized()
//                         }
                         if (mouse.button == Qt.RightButton){
                            toggleMaximized()
                        }
		}
		
		onClicked: {
			if (mouse.button == Qt.MiddleButton && middleClickCloseWindow) {
			   windowClose()
			}
//                         if (mouse.button == Qt.LeftButton){
//                             toggleMaximized()
//                         }
		}
		
	}
	
	Item {
		id: controlButtonsArea
		
		visible: true //showControlButtons
		
		height: parent.height //* buttonSize
		width: height // + (showMinimize ? height + controlButtonsSpacing : 0)
		
		 anchors.verticalCenter: parent.verticalCenter
		 anchors.left: parent.left
		
// 		anchors.leftMargin: (bp === 1 || bp === 3) ? parent.width - width : 0
// 		anchors.topMargin: (bp === 2 || bp === 3) ? parent.height - height : 0
		
		property bool mouseInWidget: true //false
		property bool mouseInside:  true //mouseInWidget || closeButton.mouseInside || minimizeButton.mouseInside
		
// 		ControlButton {
// 			id: closeButton
// 			iconElementId: 'close'
// 			windowOperation: 'close'
// 			
// 			anchors.leftMargin: parent.anchors.leftMargin > 0 && showMinimize ? parent.height + controlButtonsSpacing : 0
// 			
// 			visible: true
// 		}
// 		
// 		ControlButton {
// 			id: minimizeButton
// 			iconElementId: 'remove'
// 			windowOperation: 'toggleMinimized'
// 			
// 			anchors.leftMargin: parent.anchors.leftMargin > 0 && showMinimize ? 0 : parent.height + controlButtonsSpacing
// 			
// 			visible: showMinimize
// 		}
		
	}
	
}
