/*   
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
import QtMultimediaKit 1.1
Item {
	id: main

	width: screenSize.width
	height: screenSize.height
 
	property int stage
	property int iconSize: (screenSize.width <= 1024) ? 32 : 64

    
    //  OPACITY ANIMATION WHILE IS LOADING
    onStageChanged: {
        if (stage == 1) {
	    
            background.opacity = 1
	    playMusic1.play() 
	    gear1.opacity = 1
	    gear2.opacity = 0
	    gear3.opacity = 0
// 	    gear4.opacity = 0.2
// 	    gear4.opacity = 1
// 	    dot.opacity = 0.2 
	    
            kletter.opacity = 0.5
            dletter.opacity = 0
            eletter.opacity = 0


 
        }
        if (stage == 2) {
	    playMusic1.play() 
	    gear1.opacity = 0
	    gear2.opacity = 1
	    gear3.opacity = 0
// 	    gear4.opacity = 0.4
// 	    gear4.opacity = 0.8
// 	    dot.opacity = 0.4 
	  
            kletter.opacity = 1
            dletter.opacity = 0.5
            eletter.opacity = 0

        }
        if (stage == 3) {
	    gear1.opacity = 0
	    gear2.opacity = 0
	    gear3.opacity = 1
	     playMusic1.play() 
// 	    gear4.opacity = 0.6
// 	    gear4.opacity = 0.6
// 	    dot.opacity = 0.6
	    
            kletter.opacity = 1
            dletter.opacity = 1
            eletter.opacity = 0.5
            
 
        }
        if (stage == 4) {
	    gear1.opacity = 0.5
	    gear2.opacity = 0.5
	    gear3.opacity = 0.5
// 	    gear4.opacity = 0.8
// 	    gear4.opacity = 0.4
// 	    dot.opacity = 0.6
	    
            kletter.opacity = 1
            dletter.opacity = 1
            eletter.opacity = 1
 
        }
       
        if (stage == 5) {
	    playMusic2.play() 
	    gear1.opacity = 1
	    gear2.opacity = 1
	    gear3.opacity = 1
// 	    gear4.opacity = 1
	    gear4.opacity = 0.2
	    dot.opacity = 0.5
        }
         
        if (stage == 6) {
	    playMusic2.play() 
            kletter.opacity = 1
            dletter.opacity = 1
            eletter.opacity = 1
	    gear1.opacity = 0
	    gear2.opacity = 0
	    gear3.opacity = 0
	    gear4.opacity = 1
// 	    gear4.opacity = 0
 	    dot.opacity = 1 
        }
    }
    
    //  OPACITY ANIMATION WHILE IS LOADING END!

 



// BACKGROUND IMAGE

      Image {
        id: background
        x: width
        y: height
	source: "images/background.jpeg"
	anchors.fill: parent
	opacity: 1

        anchors {
		top: parent.top
		left: parent.left
		right: parent.right
		bottom: parent.bottom
        }

 
	}
	
	
	
     Audio {
         id: playMusic1
         source: "sound/sound.oga"
     }
     
     
     	
     Audio {
         id: playMusic2
         source: "sound/start.oga"
     }

     
     Image {
        id: gear1

        height: iconSize/2
        width: iconSize/2
        smooth: true
	x: (screenSize.width /2 ) //
	y: screenSize.height /2 
	anchors.right: kletter.right
	// anchors.rightMargin: -20
        source: "images/gearn.png"

        opacity: 0
        Behavior on opacity { NumberAnimation { duration: 1000; easing { type: Easing.InOutQuad } } }
	}
    
    
      Image {
        id: gear2

        height: iconSize/2
        width: iconSize/2
        smooth: true
//	x: (screenSize.width /2 ) -50  //
	y: screenSize.height /2 
	anchors.right: dletter.right
//	anchors.rightMargin: -20
        source: "images/gearn.png"

        opacity: 0
        Behavior on opacity { NumberAnimation { duration: 1000; easing { type: Easing.InOutQuad } } }


    
	}
    
    
	Image {
        id: gear3

        height: iconSize/2
        width: iconSize/2
        smooth: true
	y: screenSize.height /2 
	anchors.right: eletter.right
//	anchors.rightMargin: -20
        source: "images/gearn.png"

        opacity: 0
        Behavior on opacity { NumberAnimation { duration: 1000; easing { type: Easing.InOutQuad } } }


    
	}
   

	Image {
        id: gear4

        height: iconSize
        width: iconSize
        smooth: true
 
	y: screenSize.height /2 
	anchors.left: eletter.right
	anchors.verticalCenter: eletter.verticalCenter
        source: "images/gearn.png"

        opacity: 0
        Behavior on opacity { NumberAnimation { duration: 1000; easing { type: Easing.InOutQuad } } }


    
	}

    
	Image {
        id: dot
        
        source: "images/dot+GEAR.png"

        height: iconSize
        width: iconSize
        smooth: true
        
        anchors.horizontalCenter: gear4.horizontalCenter
        anchors.verticalCenter: gear4.verticalCenter
//	anchors.top: gear4.bottom
//  	anchors.right: gear.left
        opacity: 0
        Behavior on opacity { NumberAnimation { duration: 1000; easing { type: Easing.InOutQuad } } }
      
 
	}
    
	Image {
        id: kletter

        height: iconSize/2
        width: iconSize/2
        smooth: true
	anchors.right: dletter.left
	anchors.rightMargin: -4
	y: screenSize.height /2   
        source: "images/Kletter.png"
        opacity: 0
        Behavior on opacity { NumberAnimation { duration: 1000; easing { type: Easing.InOutQuad } } }
      
 
    }
    
	Image {
        id: dletter

        height: iconSize/2
        width: iconSize/2
        smooth: true

	x: (screenSize.width /2 ) -  iconSize/2
	y: screenSize.height /2   

        source: "images/Dletter.png"

        opacity: 0
        Behavior on opacity { NumberAnimation { duration: 1000; easing { type: Easing.InOutQuad } } }
      
 
	}
	
	Image {
        id: eletter

        height: iconSize/2
        width: iconSize/2
        smooth: true
	anchors.left: dletter.right
	anchors.leftMargin: -4
	y: screenSize.height /2   
        source: "images/Eletter.png"
        opacity: 0
        Behavior on opacity { NumberAnimation { duration: 1000; easing { type: Easing.InOutQuad } } }
      
 
	}
    
    

    

    
   
	ParallelAnimation {
	id: playbanner
	running: true
		NumberAnimation {
		id: animateRotation
		target: gear1
		properties: "rotation"
		from: 0
		to: 360
		duration: 4000

		loops: Animation.Infinite
		running: false //true 
		}
       
		NumberAnimation {
		id: rotate2
		target: gear2
		
  
		properties: "rotation"
		from: 0
		to: 360
		duration: 4000
		    
		loops: Animation.Infinite
		running: false //true 
		}
        
		NumberAnimation {
		id: rotate3
		target: gear3
		
  
		properties: "rotation"
		from: 0
		to: 360
		duration: 4000
		    
		loops: Animation.Infinite
		running: false //true 
		}
		
		NumberAnimation {
		id: rotate4
		target: gear4
		properties: "rotation"
		from: 0
		to: 360
		duration: 3000
		loops: Animation.Infinite
		running: true //true 
		}
		NumberAnimation {
		id: dotrotation
		target: dot
		properties: "rotation"
		from: 0
		to: 360
		duration: 3000
		loops: Animation.Infinite
		running: true //true 
		}
            
	}

}







//         NumberAnimation {
//             id: animateRotationab
//             target: gear4
// //             height: iconSize
// // 	    width: iconSize
//             properties: "x"
//    from: 0  //(screenSize.width /2 )  
//    to: (screenSize.width /2 ) +11 * iconSize +10
//             duration: 7000
// 
//             loops:  Animation.Infinite
//             running: true
//         }
        
//         NumberAnimation  {
// 	  id:boun
// 	  target: dot
// // 	  opacity: 1
// 	  running: true
//            loops: Animation.Infinite
//             to:  height
//             easing.type: Easing.OutBounce
//             duration: 2000 
//              
//              
//          }
/* 
         SequentialAnimation {
	   id: testing
	   target: dot
             loops: Animation.Infinite
             NumberAnimation {id:a ; to: screeen.height - dot.height; easing.type: Easing.OutBounce; duration: 2000 }
             PauseAnimation { id:b ; duration: 1000 }
             NumberAnimation {id:c to: 0; easing.type: Easing.OutQuad; duration: 1000 }
         }*/
    

/*  
           SequentialAnimation on y {
             loops: Animation.Infinite
//              target: dot
             NumberAnimation { to: rect.height - img.height; easing.type: Easing.OutBounce; duration: 2000 }
             PauseAnimation { duration: 1000 }
             NumberAnimation { to: 0; easing.type: Easing.OutQuad; duration: 1000 }
         }
  */
  //                             NumberAnimation {
//             id: animateRotationabca
//             target: gear
// //             height: iconSize
// // 	    width: iconSize
//             properties: "x"
//    from:  (screenSize.width /2 ) +10 * iconSize
//    to:  (screenSize.width /2 ) + 4 * iconSize 
//             duration: 7000
// 
//             loops: 1 //Animation.Infinite
//             running: false
//         }
        
//          NumberAnimation { target: deploy; property: "opacity"; to: 1.0; duration: 200}

// AnchorChanges { target: kletter; anchors.right: container.right }

