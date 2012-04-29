/*
    Copyright (C) 2012 Harald Sitter <apachelogger@ubuntu.com>

    This library is free software; you can redistribute it and/or
    modify it under the terms of the GNU Lesser General Public
    License as published by the Free Software Foundation; either
    version 2.1 of the License, or (at your option) version 3, or any
    later version accepted by the membership of KDE e.V. (or its
    successor approved by the membership of KDE e.V.), Nokia Corporation
    (or its successors, if any) and the KDE Free Qt Foundation, which shall
    act as a proxy defined in Section 6 of version 3 of the license.

    This library is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
    Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public
    License along with this library.  If not, see <http://www.gnu.org/licenses/>.
*/

import QtQuick 1.0

Image {
    id: main
    
    property int stage

    width: screenSize.width
    height: screenSize.height
//     width: 400 // For Preview
//     height: 300 // For Preview
//    source: '/usr/share/kde4/apps/ksplash/Themes/Default/1920x1200/background.png'
    source: '/lib/plymouth/themes/kubuntu-logo/background.png'

    onStageChanged: dotRow.children[stage-1].state = 'active'

    onStatusChanged: {
        // If we fail to load the splash background (which could happen while
        // we are using the one from plymouth), simply drop to the default wallpaper.
        if (status == Image.Error)
            source = '/usr/share/wallpapers/kde-default.png'
    }

    Image {
        id: logo

        // As seen in plymouth theme.
        y: parent.height / 2 - height
        x: parent.width / 2 - width / 2

        source: '/lib/plymouth/themes/kubuntu-logo/kubuntu_logo.png'
    }

    Row {
        id: dotRow

        anchors.top: logo.bottom
        anchors.topMargin: logo.height / 4 // As seen in plymouth theme.
        anchors.horizontalCenter: logo.horizontalCenter

        Dot {} // 1
        Dot {} // 2
        Dot {} // 3
        Dot {} // 4
        Dot {} // 5
        Dot {} // 6
    }
}
