/*   vim:set foldenable foldmethod=marker:
 *
 *   Nowardev (C) 2012  <nowardev(at)gmail.com>
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

import Qt 4.7

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
 
            background.opacity = 1
 
	    gear.opacity = 1 
 
        }
        if (stage == 2) {
 

	    gear.opacity = 0.8
// 	    letter.opacity = 1
        }
        if (stage == 3) {
 
            
	    gear.opacity = 0.6 
// 	    letter.opacity = 1
        }
        if (stage == 4) {
 
	    gear.opacity = 0.4
 
        }
        if (stage == 5) {

            
	    gear.opacity = 0.2 
 
        }
        if (stage == 6) {
 
	    gear.opacity = 0 
 
        }
    }
    
    //  OPACITY ANIMATION WHILE IS LOADING END!

 



// BACKGROUND IMAGE

    Image {
        id: background
	source: "images/background.jpeg"
	 anchors.fill: parent
 

        anchors {
            top: parent.top
            left: parent.left
            right: parent.right
            bottom: parent.bottom
        }

//         height: gear.y - 32

        opacity: 0
 
    }

 
    Image {
        id: gear

        height: iconSize
        width: iconSize
        smooth: true

        x: (background.width - width) / 2
        y: (background.height - height) / 2

        source: "images/gear.png"

        opacity: 0
        Behavior on opacity { NumberAnimation { duration: 1000; easing { type: Easing.InOutQuad } } }

        NumberAnimation {
            id: animateRotation
            target: gear
            properties: "rotation"
            from: 0
            to: 360
            duration: 5000

            loops: Animation.Infinite
            running: true
        }

    }


}

  
