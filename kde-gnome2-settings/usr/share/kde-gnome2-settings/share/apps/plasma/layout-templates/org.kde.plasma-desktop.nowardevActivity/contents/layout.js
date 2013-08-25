 ////////function remove in case of error of first remove :S
///NOWARDEV desktop
function remove()
{
  for (i in panelIds) {
        

	panelById(panelIds[i]).remove()
    }
  
}
//////////////////////////////////////////////////////////


/////function remove standard///////////////////////////////
function RemoveOldPanels()
{
    for (i in panelIds) {
       // panelById(panelIds[i]).remove()
       p = panelById(panelIds[i]);
       if (typeof p === "undefined") {
       print("E: Couldn't find first panel");
       remove() //load the remove function in case of problems
       }
        else 	{
	  panelById(panelIds[i]).remove()
	  	} 
                                    }
}
//RemoveOldPanels() //load the function 
 //////////////////////////////////////////////////////////
var screenrect = screenGeometry(0);  
function activitynowardev(){
  
 var activity   = new Activity 
activity.name = i18n("Nowardev Activity");


 var translatoid = activity.addWidget("translatoid");

 var yawp = activity.addWidget("yaWP");

yawp.writeConfig("animation.daysnames","8");
yawp.writeCodnfig("animation.details","1");
yawp.writeConfig("animation.duration","500");
yawp.writeConfig("animation.icon","3");
yawp.writeConfig("animation.page","8");
yawp.writeConfig("custom.fontcolor.lowtemp","30,28,27");
yawp.writeConfig("custom.fontcolor.normal","20,19,18");
yawp.writeConfig("custom.fontcolor.shadows","255,255,255,100");
yawp.writeConfig("custom.fontcolor.usage","false");
yawp.writeConfig("custom.theme.background.enabled","false");
yawp.writeConfig("custom.theme.enabled","false");
yawp.writeConfig("custom.theme.file","");
yawp.writeConfig("panel.forecast.days","1");
yawp.writeConfig("panel.forecast.format","3");
yawp.writeConfig("panel.layout.compact","false");
yawp.writeConfig("panel.today.format","3");
yawp.writeConfig("panel.tooltip.extended.enabled","true");
yawp.writeConfig("panel.tooltip.extended.format","5");
yawp.writeConfig("start delay","0");
yawp.writeConfig("system.distance","2007");
yawp.writeConfig("system.pressure","5007");
yawp.writeConfig("system.speed","9001");
yawp.writeConfig("system.temperature","6001");
yawp.writeConfig("text.shadows","false");
yawp.writeConfig("theme","default");
yawp.writeConfig("traverse locations","false");
yawp.writeConfig("traverse locations timeout","30");
yawp.writeConfig("update interval","45")
 
yawp.currentConfigGroup = new Array('locations')

yawp.writeConfig("city01","accuweather,Verona\\, Italy(Veneto),Italy,it,EUR.IT.IT020.VERONA,Europe/Rome");
yawp.writeConfig("selected","0");

yawp.currentConfigGroup = new Array('ExtenderItems')

yawp.writeConfig(" extenderItemPosition","0");





}
activitynowardev()



 
//loadTemplate("org.kde.plasma-desktop.nowardevPanel")
