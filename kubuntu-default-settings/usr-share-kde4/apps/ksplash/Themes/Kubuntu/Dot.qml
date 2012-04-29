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

Item {
    width: inactiveImage.width // active and inactive are the same size
    height: inactiveImage.height

    state: 'inactive'

    Image {
        id: inactiveImage
        source: 'images/dot-inactive.png'
    }

    Image {
        id: activeImage
        source: 'images/dot-active.png'
    }


    states: [
        State {
            name: "inactive"
            PropertyChanges { target: activeImage; opacity: 0.0 }
        },
        State {
            name: "active"
            PropertyChanges { target: activeImage; opacity: 1.0 }
        }
    ]

    transitions: [
        Transition {
            from: "inactive"
            to: "active"
            NumberAnimation {
                target: activeImage
                properties: "opacity"
                to: 1.0
                easing { type: Easing.OutBack }
                duration: 500
           }
        }
    ]
}
