 ////////function remove in case of error of first remove :S
///UNITY desktop
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
function activityunity(){


   var activity  = new Activity("folderview");


 

//activity.wallpaperPlugin = "image"
//activity.wallpaperMode = "SingleImage"
//activity.currentConfigGroup = Array("Wallpaper", "image")
//activity.writeConfig("wallpaper", "warty-final-ubuntu")

}

 activityunity()

//loadTemplate("org.kde.plasma-desktop.unityPanel")
