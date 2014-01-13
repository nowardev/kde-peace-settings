//Copyright (C) 2012 nowardev nowardev@gmail.com

//This file is part of kde-peace-settings.

//kde-peace-settings is free software: you can redistribute it and/or modify
//it under the terms of the GNU General Public License as published by
//the Free Software Foundation, either version 3 of the License, or
//(at your option) any later version.
//
//This program is distributed in the hope that it will be useful,
//but WITHOUT ANY WARRANTY; without even the implied warranty of
//MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//GNU General Public License for more details.
//
//You should have received a copy of the GNU General Public License
//along with this program.  If not, see <http://www.gnu.org/licenses/>.


///CRAZY PANELS
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



var screenrect = screenGeometry(0); // get information about your screen h w 
//start another function to create panels layout
function crazy(){
	var panel = new Panel
	if (panelIds.length == 1) {
		panel.location = 'bottom'
		// panel.location = 'top'
	}
	
	
	panel.height = screenrect.height/11;
	
	
	
	
	
	var internet = panel.addWidget("quicklaunch");
	internet.writeConfig("launchers", "file:///usr/share/applications/firefox.desktop,file:///usr/share/applications/chromium-browser.desktop,file:////usr/share/applications/kde4/akregator.desktop,file:////usr/share/applications/kde4/bluedevil-monolithic.desktop,file:////usr/share/applications/kde4/kget.desktop,file:////usr/share/applications/kde4/KMail2.desktop,file:////usr/share/applications/kde4/konqbrowser.desktop,file:////usr/share/applications/kde4/konversation.desktop,file:////usr/share/applications/kde4/kopete.desktop,file:////usr/share/applications/kde4/Kppp.desktop,file:////usr/share/applications/kde4/ktorrent.desktop,file:////usr/share/applications/kde4/rekonq.desktop,file:////usr/share/applications/kde4/telepathy-kde-contactlist.desktop");
	
	
	panel.addWidget("panelspacer_internal");
	var graphics = panel.addWidget("quicklaunch");
	graphics.writeConfig("launchers", "file:////usr/share/applications/blender.desktop,file:////usr/share/applications/kde4/digikam.desktop,file:////usr/share/applications/kde4/dngconverter.desktop,file:////usr/share/applications/kde4/expoblending.desktop,file:////usr/share/applications/kde4/gwenview.desktop,file:////usr/share/applications/kde4/kamoso.desktop,file:////usr/share/applications/kde4/krita.desktop,file:////usr/share/applications/kde4/ksnapshot.desktop,file:////usr/share/applications/libreoffice-draw.desktop,file:////usr/share/applications/kde4/okular.desktop,file:////usr/share/applications/kde4/panoramagui.desktop,file:////usr/share/applications/pencil.desktop,file:////usr/share/applications/kde4/photolayoutseditor.desktop,file:////usr/share/applications/kde4/scangui.desktop");
	
	
	
	panel.addWidget("panelspacer_internal");
	var video = panel.addWidget("quicklaunch");
	video.writeConfig("launchers", " file:////usr/share/applications/kde4/amarok.desktop,file:////usr/share/applications/FF-Multi-Converter.desktop,file:////usr/share/applications/kde4/k3b.desktop,file:////usr/share/applications/kde4/k9copy_assistant.desktop,file:////usr/share/applications/kde4/k9copy.desktop,file:////usr/share/applications/kde4/kdenlive.desktop,file:////usr/share/applications/kde4/kmix.desktop,file:////usr/share/applications/kde4/kmplayer.desktop,file:////usr/share/applications/kde4/recorditnow.desktop,file:////usr/share/applications/kde4/subtitlecomposer.desktop,file:////usr/share/applications/vlc.desktop");
	
	
	
	
	
	panel.addWidget("panelspacer_internal");
	var tools = panel.addWidget("quicklaunch");
	tools.writeConfig("launchers", "file:////usr/share/applications/kde4/kaddressbook.desktop,file:////usr/share/applications/kde4/kexi.desktop,file:////usr/share/applications/kde4/Kontact.desktop,file:////usr/share/applications/kde4/korganizer.desktop,file:////usr/share/applications/kde4/krita.desktop,file:////usr/share/applications/kde4/kspread.desktop,file:////usr/share/applications/kde4/ktimetracker.desktop,file:////usr/share/applications/libreoffice-calc.desktop,file:////usr/share/applications/libreoffice-draw.desktop,file:////usr/share/applications/libreoffice-impress.desktop,file:////usr/share/applications/libreoffice-math.desktop,file:////usr/share/applications/libreoffice-startcenter.desktop,file:////usr/share/applications/libreoffice-writer.desktop,file:////usr/share/applications/kde4/okular.desktop");
	
	
	
	
	panel.addWidget("panelspacer_internal");
	var settings = panel.addWidget("quicklaunch");
	settings.writeConfig("launchers", "file:////usr/share/applications/obconf.desktop,file:////usr/share/applications/openjdk-7-policytool.desktop,file:////usr/share/applications/kde4/systemsettings.desktop");
	
	
	panel.addWidget("panelspacer_internal");
	var sys = panel.addWidget("quicklaunch");
	sys.writeConfig("launchers", "file:////usr/share/applications/kde4/dolphin.desktop,file:////usr/share/applications/jockey-kde.desktop,file:////usr/share/applications/kde4/k3b.desktop,file:////usr/share/applications/kde4/kinfocenter.desktop,file:////usr/share/applications/kde4/konsole.desktop,file:////usr/share/applications/kde4/krandrtray.desktop,file:////usr/share/applications/kde4/ksysguard.desktop,file:////usr/share/applications/kde4/ksystemlog.desktop,file:////usr/share/applications/kde4/kwalletmanager.desktop,file:////usr/share/applications/kde4/muon.desktop,file:////usr/share/applications/kde4/muon-installer.desktop,file:////usr/share/applications/kde4/muon-updater.desktop,file:////usr/share/applications/kde4/nepomukbackup.desktop,file:////usr/share/applications/kde4/nepomukcontroller.desktop,file:////usr/share/applications/kde4/partitionmanager.desktop,file:////usr/share/applications/usb-creator-kde.desktop");
	
	
	panel.addWidget("panelspacer_internal");
	var utili = panel.addWidget("quicklaunch");
	utili.writeConfig("launchers", "file:////usr/share/applications/kde4/akonaditray.desktop,file:////usr/share/applications/kde4/ark.desktop,file:////usr/share/applications/kde4/groupwarewizard.desktop,file:////usr/share/applications/kde4/kate.desktop,file:////usr/share/applications/kde4/kcalc.desktop,file:////usr/share/applications/kde4/klipper.desktop,file:////usr/share/applications/kde4/kmag.desktop,file:////usr/share/applications/kde4/kmousetool.desktop,file:////usr/share/applications/kde4/knotes.desktop,file:////usr/share/applications/kde4/ktimetracker.desktop,file:////usr/share/applications/kde4/kvkbd.desktop,file:////usr/share/applications/kde4/superkaramba.desktop,file:////usr/share/applications/kde4/synaptiks.desktop");
	
	
	
	panel.addWidget("panelspacer_internal");
	var dev = panel.addWidget("quicklaunch");
	dev.writeConfig("launchers", "file:////usr/share/applications/kde4/kdesvn.desktop,file:////usr/share/applications/kde4/kompare.desktop");
	
}
crazy() 





