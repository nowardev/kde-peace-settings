var screenrect = screenGeometry(0) // get information about your screen h w

var panel = new Panel
if (panelIds.length == 1) {
	//panel.location = 'bottom'
	panel.location = 'top'
	//panel.hiding= 'autohide' //"windowscover" or "windowsbelow"
	//panel.length = (screenrect.width/2)-(screenrect.width/16);
	//panel.height = screenrect.height/30;
	//panel.alignment = "left" "right" "center"
	//panel.locked = false true
	
}

var launcher = panel.addWidget("lancelot_launcher")
launcher.currentConfigGroup = new Array('Shortcuts')
launcher.globalShortcut = "F13"

var activitymanager= panel.addWidget( "activitymanager")

var quicklaunch = panel.addWidget("quicklaunch")
quicklaunch.writeConfig("launchers", "file:////usr/share/applications/kde4/dolphin.desktop,file:////usr/share/applications/kde4/konsole.desktop");

 
var task = panel.addWidget("tasks")
// task.writeConfig("showTooltip","false")
// tasks.currentConfigGroup = new Array("Launchers")
// tasks.writeConfig("browser", "preferred://browser, , , ")
// tasks.writeConfig("filemanager", "preferred://filemanager, , , ")



var yawp = panel.addWidget("yaWP")

yawp.writeConfig("animation.daysnames","8")
yawp.writeConfig("animation.details","1")
yawp.writeConfig("animation.duration","880")
yawp.writeConfig("animation.icon","3")
yawp.writeConfig("animation.page","8")
yawp.writeConfig("custom.fontcolor.lowtemp","204,204,204")
yawp.writeConfig("custom.fontcolor.normal","255,255,255")
yawp.writeConfig("custom.fontcolor.shadows","0,0,0,100")
yawp.writeConfig("custom.fontcolor.usage","false")
yawp.writeConfig("custom.theme.background.enabled","false")
yawp.writeConfig("custom.theme.enabled","false")
yawp.writeConfig("panel.forecast.days","4")
yawp.writeConfig("panel.forecast.format","3")
yawp.writeConfig("panel.layout.compact","false")
yawp.writeConfig("panel.today.format","3")
yawp.writeConfig("panel.tooltip.extended.enabled","true")
yawp.writeConfig("panel.tooltip.extended.format","5")
yawp.writeConfig("panel.weathericon.interactive","false")
yawp.writeConfig("start delay","0")
yawp.writeConfig("system.distance","2007")
yawp.writeConfig("system.pressure","5022")
yawp.writeConfig("system.speed","9001")
yawp.writeConfig("system.temperature","6001")
yawp.writeConfig("text.shadows","false")
yawp.writeConfig("theme","default")
yawp.writeConfig("traverse locations","false")
yawp.writeConfig("traverse locations timeout","30")
yawp.writeConfig("update interval","15")

yawp.currentConfigGroup = new Array('locations')

yawp.writeConfig("city01","accuweather,Casa Olivar\\, Spain(Andalucia),Spain,ES,EUR.ES.SP001.CASA+OLIVAR,")
yawp.writeConfig("city02","accuweather,Freila\\, Spain(Andalucia),Spain,ES,EUR.ES.SP001.FREILA,")
yawp.writeConfig("city03","accuweather,Granada\\, Spain(Andalucia),Spain,ES,EUR.ES.SP001.GRANADA,")
yawp.writeConfig("selected","2")


panel.reloadConfig()
// yawp.writeConfig("selected","01")

var systemtray = panel.addWidget("systemtray")
systemtray.writeConfig("DefaultAppletsAdded","false")
systemtray.writeConfig("ShowHardware","true")
systemtray.writeConfig("ShowCommunications","true")
systemtray.writeConfig("ShowApplicationStatus","true")
systemtray.writeConfig("ShowSystemServices","true")
systemtray.writeConfig("ShowUnknown","false")
//systemtray.writeConfig("alwaysShown","battery,notifier,KMix,org.kde.networkmanagement")

var clock = panel.addWidget("digital-clock")
clock.writeConfig("showDate", "true")
clock.writeConfig("showDay", "true")
clock.writeConfig("showSeconds", "false")
clock.writeConfig("showShadow", "false")
clock.writeConfig("showYear", "true")
//clock.writeConfig("showTimezone", "true")
// clock.writeConfig("plainClockFont", "Serif,12,-1,5,75,0,0,0,0,0")
clock.writeConfig("useCustomColor", "true")
clock.writeConfig("plainClockColor", "255,255,255")
clock.writeConfig("plainClockDrawShadow", "false")

var screenrect = screenGeometry(0); // get information about your screen h w

var panel = new Panel
if (panelIds.length == 2) {
	panel.location = 'bottom'
	//panel.location = 'top'
	//panel.hiding= 'autohide' //"windowscover" or "windowsbelow"
	//panel.length = (screenrect.width/2)-(screenrect.width/16);
	panel.height = screenrect.height/20;
	//panel.alignment = "left" "right" "center"
	//panel.locked = false true
	
}


var  pager = panel.addWidget("pager")
// pager.writeGlobalConfig("rows", "2")
pager.writeConfig("displayedText","0")
pager.writeConfig("showWindowIcons","true")

var launcher = panel.addWidget("homerunlauncher")
launcher.currentConfigGroup = new Array('Shortcuts') 
launcher.globalShortcut = "F13"

var clock = panel.addWidget("digital-clock")
clock.writeConfig("showDate", "false")
clock.writeConfig("showDay", "false")
clock.writeConfig("showSeconds", "false")
clock.writeConfig("showShadow", "false")
clock.writeConfig("showYear", "true")
//clock.writeConfig("showTimezone", "true")
clock.writeConfig("plainClockFont", "Serif,12,-1,5,75,0,0,0,0,0")
clock.writeConfig("useCustomColor", "true")
clock.writeConfig("plainClockColor", "255,255,255")
clock.writeConfig("plainClockDrawShadow", "false")

var userhome =  userDataPath()
var icontasks = panel.addWidget("icontasks")
icontasks.writeConfig("groupClick","1")
icontasks.writeConfig("iconScale","60")
icontasks.writeConfig("launcherIcons","true")
icontasks.writeConfig("maxRows","1")
icontasks.writeConfig("mediaButtons","true")
icontasks.writeConfig("middleClick","0")
icontasks.writeConfig("previewSize","200")
icontasks.writeConfig("rotate","false")
icontasks.writeConfig("showOnlyCurrentActivity","false")
icontasks.writeConfig("showOnlyCurrentDesktop","false")
icontasks.writeConfig("showOnlyCurrentScreen","false")
icontasks.writeConfig("showProgress","true")
icontasks.writeConfig("showSeparator","0")
icontasks.writeConfig("sortingStrategy","1")
icontasks.writeConfig("spacing","0")
icontasks.writeConfig("style","0")
icontasks.writeConfig("toolTips","1")
icontasks.writeConfig("unity","true")
//icontasks.writeConfig("Enabled","true")

icontasks.currentConfigGroup = new Array('DockManager') // CONFIGURE DOCKERS HELPERS
icontasks.writeConfig("Enabled","true")	
icontasks.writeConfig("EnabledHelpers",userhome+"/.local/share/dockmanager/scripts/kate.py,"+userhome+"/.local/share/dockmanager/scripts/konqueror.py,"+userhome+"/.local/share/dockmanager/scripts/krdc_menus.py,"+userhome+"/.local/share/dockmanager/scripts/rekonq.py,"+userhome+"/.local/share/dockmanager/scripts/akonadi.py,"+userhome+"/.local/share/dockmanager/scripts/firefox.py,"+userhome+"/.local/share/dockmanager/scripts/konsole.py,"+userhome+"/.local/share/dockmanager/scripts/dolphin.py,"+userhome+"/.local/share/dockmanager/scripts/kopete.py,"+userhome+"/.local/share/dockmanager/scripts/amarok.py")

icontasks.currentConfigGroup = new Array('Launchers') // CONFIGURE LAUNCHERS
icontasks.writeConfig("Items","file:///usr/share/applications/chromium-browser.desktop?wmClass=Chromium-browser,file:///usr/share/applications/firefox.desktop?wmClass=Firefox,file:////usr/share/applications/kde4/dolphin.desktop?wmClass=Dolphin")
//icontasks.writeConfig("browser", "preferred://browser, , , ") // add to icontask the prefered browser automatically this is good but it put where it wants the launcher so it sucks 
//icontasks.writeConfig("filemanager", "preferred://filemanager, , , ")


var trash = panel.addWidget("trash")


var widget = panel.addWidget("lockout")
widget.writeConfig("show_lock","false")
widget.writeConfig("show_suspend","true")
widget.writeConfig("show_switchUser","true")


panel.reloadConfig()

