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
var screenrect = screenGeometry(0)
function activitynowardev(){

var activity = new Activity("folderview")
activity.name = i18n("Nowardev Activity")
activity.writeConfig("alignToGrid","true")
activity.writeConfig("blankLabel","false")
activity.writeConfig("clickForFolderPreviews","true")
activity.writeConfig("customIconSize","48")
// activity.writeConfig("customLabel","")
activity.writeConfig("drawShadows","true")
activity.writeConfig("filter","0")
activity.writeConfig("filterFiles","*")
activity.writeConfig("flow","1")
activity.writeConfig("formfactor","0")
activity.writeConfig("iconsLocked","false")
// activity.writeConfig("mimeFilter","")
activity.writeConfig("numTextLines","2")
activity.writeConfig("url","desktop:/")
activity.writeConfig("wallpaperplugin","clock") //   "clock" "virus" "org.kde.potd" "mandelbrot" "weather" "pattern" "marble" //activity.writeConfig("wallpaperpluginmode", "Slideshow" )
activity.writeConfig("previewPlugins","imagethumbnail,jpegthumbnail,kffmpegthumbnailer") 

  
 
  

}
activitynowardev()







 

 
//loadTemplate("org.kde.plasma-desktop.nowardevPanel")
