/*   vim:set foldenable foldmethod=marker:
 * 
 *   Nowardev (C) 2013  <nowardev(at)gmail.com>
 *
 *   This program is free software; you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License version 2,
 *   or (at your option) any later version, as published by the Free
 *   Software Foundation
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details
 *
 *   You should have received a copy of the GNU General Public
 *   License along with this program; if not, write to the
 *   Free Software Foundation, Inc.,
 *   51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */

import QtQuick 1.1




Item {
  id: main
  
  width: screenSize.width
  height: screenSize.height
  
  
  // width: 300
  // height: 300
  
  /* property declarations --------------------------{{{ */
  property int stage
  property int iconSize: (screenSize.width <= 1024) ? 32 : 64
  
  /* }}} */
  
  /* signal declarations ----------------------------{{{ */
  
  /* }}} */
  
  /* JavaScript functions ---------------------------{{{ */
  
  
  /* }}} */
  
  /* object properties ------------------------------{{{ */
  
  /* }}} */
  
  /* child objects ----------------------------------{{{ */
  
  
  
  
  //  OPACITY ANIMATION WHILE IS LOADING
  onStageChanged: {
    if (stage == 1) {
      dot1.opacity =1
      logo.opacity = 0.12
      
      
    }
    if (stage == 2) {
      dot1.opacity =0.5 
      dot2.opacity =1
      logo.opacity =  1
      
    }
    if (stage == 3) {
      dot2.opacity =0.5
      dot3.opacity =1
      logo.opacity = 0.12 
      
    }
    if (stage == 4) {
      dot3.opacity =0.5
      dot4.opacity =1
      logo.opacity = 1
      
    }
    if (stage == 5) {
      dot4.opacity =0.5
      dot5.opacity =1
      logo.opacity =   0.12 
      
    }
    if (stage == 6) {
      dot1.opacity =1
      dot2.opacity =1
      dot3.opacity =1
      dot4.opacity =1
      logo.opacity = 1
    }
  }
//  OPACITY ANIMATION WHILE IS LOADING END!
  
  
  
  
  
  // BACKGROUND IMAGE
  Image {
    id: background
    source: "images/background.png"
    anchors.fill: parent
    
    
    anchors {
      top: parent.top
      left: parent.left
      right: parent.right
    }
    opacity: 1
  }
  
  Image {
    id: logo
    height: iconSize /2
    width: iconSize / 2
    smooth: true
    x: (parent.width - width) / 2
    y: (parent.height - height) / 2
    source: "images/logo.png"
    opacity: 0.25
    Behavior on opacity { NumberAnimation { duration: 1000; easing { type: Easing.Linear } } }
     }  
  
  Rectangle {
    id: dot3
    width: 5
    height: 5
    color: "white"
    border.color: "white"
    opacity: 0.25
    border.width: 1
    radius: iconSize*0.5
    anchors.horizontalCenter: logo.horizontalCenter
    anchors.top : logo.bottom
    Behavior on opacity { NumberAnimation { duration: 1000; easing { type: Easing.InOutElastic } } }
  }
  
  
  
  
  Rectangle {
    id: dot2
    width: 5
    height: 5
    radius: 50
    color: "white"
    border.color: "white"
    opacity: 0.25
    border.width: 1
    anchors.right: dot3.left
    anchors.rightMargin: 5
    anchors.verticalCenter : dot3.verticalCenter
    Behavior on opacity { NumberAnimation { duration: 1000; easing { type: Easing.Linear } } }
  }
  
  
  Rectangle {
    id: dot1 
    width: 5
    height: 5
    radius: 50
    color: "white"
    border.color: "white"
    opacity: 0.25
    border.width: 1
    anchors.right: dot2.left
    anchors.rightMargin: 5
    anchors.verticalCenter : dot3.verticalCenter
    Behavior on opacity { NumberAnimation { duration: 1000; easing { type: Easing.InOutElastic } } }
  }
  
  
  Rectangle {
    id: dot4 
    width: 5
    height: 5
    radius: 50
    color: "white"
    border.color: "white"
    opacity: 0.25
    border.width: 1
    anchors.left: dot3.right
    anchors.leftMargin: 5
    anchors.verticalCenter : dot3.verticalCenter
    Behavior on opacity { NumberAnimation { duration: 1000; easing { type: Easing.InOutElastic } } }
  }
  
  Rectangle {
    id: dot5 
    width: 5
    height: 5
    radius: 50
    color: "white"
    border.color: "white"
    opacity: 0.25
    border.width: 1
    anchors.left: dot4.right
    anchors.leftMargin: 5
    anchors.verticalCenter : dot3.verticalCenter
    Behavior on opacity { NumberAnimation { duration: 1000; easing { type: Easing.InOutElastic } } }
  }
  
  
}

