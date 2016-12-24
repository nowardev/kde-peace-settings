import QtQuick 2.2
import QtQuick.Controls 1.3
import QtQuick.Layouts 1.1

Item {
    id: appearancePage

    property alias cfg_showControlButtons: showControlButtons.checked
    property alias cfg_doNotHideControlButtons: doNotHideControlButtons.checked
    property int cfg_buttonsPosition
    property alias cfg_buttonsVerticalCenter: buttonsVerticalCenter.checked
    property alias cfg_buttonsStandalone: buttonsStandalone.checked
    property alias cfg_buttonsDynamicWidth: buttonsDynamicWidth.checked
    property alias cfg_slidingIconAndText: slidingIconAndText.checked
    property alias cfg_showButtonOnlyWhenMaximized: showButtonOnlyWhenMaximized.checked
    property alias cfg_showButtonAlways: showButtonAlways.checked
    property alias cfg_showClose: showClose.checked
    property alias cfg_showMinimize: showMinimize.checked
    property alias cfg_showMaximize: showMaximize.checked
    property alias cfg_buttonsOrder: buttonsOrderCombo.currentIndex
    property alias cfg_showPinToAllDesktops: showPinToAllDesktops.checked
    property alias cfg_buttonSize: buttonSize.value
    property alias cfg_controlButtonsSpacing: controlButtonsSpacing.value

    onCfg_buttonsPositionChanged: {
        switch (cfg_buttonsPosition) {
        case 0:
            buttonsPositionGroup.current = upperLeftRadio;
            break;
        case 1:
            buttonsPositionGroup.current = upperRightRadio;
            break;
        case 2:
            buttonsPositionGroup.current = bottomLeftRadio;
            break;
        case 3:
            buttonsPositionGroup.current = bottomRightRadio;
            break;
        default:
            buttonsPositionGroup.current = upperLeftRadio;
        }
    }

    Component.onCompleted: {
        cfg_buttonsPositionChanged()
    }

    ExclusiveGroup {
        id: buttonsPositionGroup
    }
/*
    GroupBox {
        id: showControlButtons
        title: i18n("Enable Control Buttons")
        checkable: true
        flat: true

        GridLayout {
            columns: 2

            Item {
                width: 2
                height: 10
                Layout.columnSpan: 2
            }

            Item {
                width: 5
                height: 5
                Layout.rowSpan: 5
            }
            
            CheckBox {
                id: showButtonAlways
                text: i18n("Show Buttons Always")
            }
            
            CheckBox {
                id: showMinimize
                text: i18n("Show minimize button")
            }

            CheckBox {
                id: showMaximize
                text: i18n("Show maximize button")
            }
            
            CheckBox {
                id: showClose
                text: i18n("Show close button")
            }

            CheckBox {
                id: showPinToAllDesktops
                text: i18n("Show pin to all desktops")
            }

 

            Item {
                width: 2
                height: 2
                Layout.columnSpan: 2
            }

            Label {
                text: i18n("Behaviour:")
                Layout.alignment: Qt.AlignVCenter|Qt.AlignRight
            }
                 Item {
                width: 2
                height: 2
                Layout.rowSpan: 1
            }
            
            Label {
                    text: i18n('Buttons Order:')
//                    Layout.alignment: Qt.AlignLeft
                   Layout.columnSpan: 2
                   Layout.alignment:  Qt.AlignLeft
                }
            
            ComboBox {
                    id: buttonsOrderCombo
                    model: [i18n('mMX'), i18n('mXM'), i18n('MmX'), i18n('MXm'), i18n('XmM'), i18n('XMm')]
                    Layout.alignment:  Qt.AlignRight
                    Layout.columnSpan: 2
                }

            CheckBox {
                id: doNotHideControlButtons
                text: i18n("Do not hide on mouse out")
            }

            Item {
                width: 2
                height: 2
                Layout.rowSpan: 4
            }

            CheckBox {
                id: showButtonOnlyWhenMaximized
                text: i18n("Show only when maximized")
            }

            CheckBox {
                id: buttonsStandalone
                text: i18n("Buttons next to icon and text")
            }

            CheckBox {
                id: buttonsDynamicWidth
                text: i18n("Dynamic width")
                enabled: buttonsStandalone.checked
            }

            CheckBox {
                id: slidingIconAndText
                text: i18n("Sliding icon and text")
                enabled: buttonsStandalone.checked
            }



            Label {
                text: i18n("Position:")
                Layout.alignment: Qt.AlignVCenter|Qt.AlignRight
            }
            RadioButton {
                id: upperLeftRadio
                exclusiveGroup: buttonsPositionGroup
                text: i18n("Upper left")
                onCheckedChanged: if (checked) cfg_buttonsPosition = 0;
            }
            Item {
                width: 2
                height: 2
                Layout.rowSpan: 4
            }
            RadioButton {
                id: upperRightRadio
                exclusiveGroup: buttonsPositionGroup
                text: i18n("Upper right")
                onCheckedChanged: if (checked) cfg_buttonsPosition = 1;
            }
            RadioButton {
                id: bottomLeftRadio
                exclusiveGroup: buttonsPositionGroup
                text: i18n("Bottom left")
                onCheckedChanged: if (checked) cfg_buttonsPosition = 2;
            }
            RadioButton {
                id: bottomRightRadio
                exclusiveGroup: buttonsPositionGroup
                text: i18n("Bottom right")
                onCheckedChanged: if (checked) cfg_buttonsPosition = 3;
            }

            CheckBox {
                id: buttonsVerticalCenter
                text: i18n("Vertical center")
            }



            Label {
                text: i18n("Button size:")
                Layout.alignment: Qt.AlignVCenter|Qt.AlignLeft
            }
            Slider {
                id: buttonSize
                stepSize: 0.1
                minimumValue: 0.1
                tickmarksEnabled: true
                width: parent.width
            }

            Label {
                text: i18n("Buttons spacing:")
                Layout.alignment: Qt.AlignVCenter|Qt.AlignLeft
            }
            Slider {
                id: controlButtonsSpacing
                stepSize: 1
                minimumValue: 0
                maximumValue: 20
                tickmarksEnabled: true
                width: parent.width
            }
        }
    }*/
   GridLayout {
        id: mainGridLayout
        anchors.right: parent.right
        anchors.rightMargin: 0
        antialiasing: true
        transformOrigin: Item.TopLeft
        anchors.left: parent.left
        anchors.bottom: parent.bottom
        anchors.top: parent.top
        columnSpacing: 19
        rowSpacing: 53
        columns: 2



        CheckBox {
            id: showControlButtons
            text: i18n("Enable Control Buttons")
            Layout.alignment: Qt.AlignLeft | Qt.AlignTop
            Layout.rowSpan: 1

        }

        GridLayout {
            id: gridLayoutButtons
            width: 100
            height: 100
            Layout.rowSpan: 1
            Layout.fillHeight: false
            Layout.fillWidth: true
            columns: 1
            rows: 5
            enabled: showControlButtons.checked


            CheckBox {
                id: showButtonAlways
                text: i18n("Show Buttons Always")
                Layout.fillHeight: true
                Layout.fillWidth: true
            }

            CheckBox {
                id: showMinimize
                text: i18n("Show minimize button")
                Layout.fillHeight: true
                Layout.fillWidth: true
            }

            CheckBox {
                id: showMaximize
                text: i18n("Show maximize button")
                Layout.fillHeight: true
                Layout.fillWidth: true
            }

            CheckBox {
                id: showClose
                text: i18n("Show close button")
                Layout.fillHeight: true
                Layout.fillWidth: true
            }


            CheckBox {
                id: showPinToAllDesktops
                text: i18n("Show pin to all desktops")
                Layout.fillHeight: true
                Layout.fillWidth: true
            }

            GridLayout {
                id: gridLayout1
                width: 100
                height: 100
                Layout.fillHeight: false
                Layout.fillWidth: true
                columns: 2

                Label {
                    text: i18n("Buttons spacing:")
                    Layout.alignment: Qt.AlignVCenter|Qt.AlignLeft
                }

                Slider {
                    id: controlButtonsSpacing
                    stepSize: 1
                    minimumValue: 0
                    maximumValue: 20
                    tickmarksEnabled: true
                    width: parent.width
                    Layout.fillWidth: true
                }

                Label {
                    text: i18n("Button size:")
                    Layout.alignment: Qt.AlignVCenter|Qt.AlignLeft
                }

                Slider {
                    id: buttonSize
                    stepSize: 0.1
                    minimumValue: 0.1
                    tickmarksEnabled: true
                    width: parent.width
                    Layout.fillWidth: true
                }
            }











        }
        Label {

            text: i18n("Behaviour:")
            Layout.alignment: Qt.AlignLeft | Qt.AlignTop
        }

        GridLayout {
            id: gridLayout
            width: 100
            height: 100
            Layout.fillHeight: false
            Layout.fillWidth: true
            rowSpacing: 5
            rows: 5
            columns: 1
            enabled: showControlButtons.checked

            CheckBox {
                id: slidingIconAndText
                text: i18n("Sliding icon and text")
                Layout.fillHeight: true
                Layout.fillWidth: true
                enabled: buttonsStandalone.checked
            }

            CheckBox {
                id: buttonsDynamicWidth
                text: i18n("Dynamic width")
                Layout.fillHeight: true
                Layout.fillWidth: true
                enabled: buttonsStandalone.checked
            }

            CheckBox {
                id: buttonsStandalone
                text: i18n("Buttons next to icon and text")
                Layout.fillHeight: true
                Layout.fillWidth: true
            }

            CheckBox {
                id: showButtonOnlyWhenMaximized
                text: i18n("Show only when maximized")
                Layout.fillHeight: true
                Layout.fillWidth: true
            }

            CheckBox {
                id: doNotHideControlButtons
                text: i18n("Do not hide on mouse out")
                Layout.fillHeight: true
                Layout.fillWidth: true
            }











        }
        Label {
            id: label
            text: i18n("Position:")
            Layout.alignment: Qt.AlignLeft | Qt.AlignTop
        }

        ColumnLayout {
            id: columnLayout1
            width: 100
            height: 100
            spacing: 5
            Layout.fillHeight: false
            Layout.fillWidth: true
            Layout.preferredHeight: -1
            Layout.preferredWidth: 0
            Layout.alignment: Qt.AlignLeft | Qt.AlignBaseline
            enabled: showControlButtons.checked

            RadioButton {
                id: upperLeftRadio
                exclusiveGroup: buttonsPositionGroup
                text: i18n("Upper left")
                Layout.fillHeight: true
                Layout.fillWidth: true
                onCheckedChanged: if (checked) cfg_buttonsPosition = 0;
            }

            RadioButton {
                id: upperRightRadio
                exclusiveGroup: buttonsPositionGroup
                text: i18n("Upper right")
                Layout.fillHeight: true
                Layout.fillWidth: true
                onCheckedChanged: if (checked) cfg_buttonsPosition = 1;
            }

            RadioButton {
                id: bottomLeftRadio
                exclusiveGroup: buttonsPositionGroup
                text: i18n("Bottom left")
                Layout.fillHeight: true
                Layout.fillWidth: true
                onCheckedChanged: if (checked) cfg_buttonsPosition = 2;
            }

            RadioButton {
                id: bottomRightRadio
                exclusiveGroup: buttonsPositionGroup
                text: i18n("Bottom right")
                Layout.fillHeight: true
                Layout.fillWidth: true
                onCheckedChanged: if (checked) cfg_buttonsPosition = 3;
            }

            CheckBox {
                id: buttonsVerticalCenter
                text: i18n("Vertical center")
                Layout.fillHeight: true
                Layout.fillWidth: true
            }

            GridLayout {
                id: buttonOrderLayout
                width: 100
                height: 100

                Label {
                    text: i18n('Buttons Order:')
                    //                    Layout.alignment: Qt.AlignLeft
                    Layout.columnSpan: 2

                }

                ComboBox {
                    id: buttonsOrderCombo
                    Layout.fillHeight: true
                    Layout.fillWidth: false
                    model: [i18n('mMX'), i18n('mXM'), i18n('MmX'), i18n('MXm'), i18n('XmM'), i18n('XMm')]

                }
            }
        }




    }


}
