#!/bin/bash -x
##license gpl 
#This program is free software: you can redistribute it and/or modify
#it under the terms of the GNU General Public License as published by
#the Free Software Foundation, either version 3 of the License, or
#any later version.

#This program is distributed in the hope that it will be useful,
#but WITHOUT ANY WARRANTY; without even the implied warranty of
#MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#GNU General Public License for more details.

#You should have received a copy of the GNU General Public License
#along with this program.  If not, see <http://www.gnu.org/licenses/>

#NowardevTeam nowardev@gmail.com

 


function_check_folder_and_create_it_if_doesnt_exist () {
	if [[ ! -d "$1" ]]; then 
		echo $"..............Folder $1  doen't exist...creating  mkdir $1
		"
		
		mkdir "$1"
	else
		echo $"..............Folder $1 exist 
		"
	fi 
	
	
}

function_checksudo(){

if [[ $sudoerror == true ]] ; then
function_system
wrongpas=$"before you typed a WRONG PASS"
fi

}

function_system() {

	sudoerror=false
	pas=$(kdialog --password $"Insert Root Password $wrongpas" 2>/dev/null )
	
	
	if [[ -z "$pas" ]];then
		kdialog --error $"No password given exiting..." 2>/dev/null 
		exit  
	fi
		
		
		#install every script with the correct permission
		directory="$PWD/usr/bin/"
		if [[  -d "$directory"  ]] ; then
			for file in $PWD/usr/bin/* ; do
				echo "installing..... sudo -S  install -m 755 -D "$file"  "/usr/local/bin""
				echo "$pas" | sudo -S  install -m 755 -D "$file"  "/usr/local/bin" 2>/dev/null 
				
				#wtf need to fix this shit very ugly xD
				if [[ $? ==  1 ]]; then
					sudoerror=true
				else 
					sudoerror=false
				fi
			done
		else
			echo "directory $directory  doens't exit  skipping"
		fi 
							
							
							
	function_checksudo


#install the service menu 
	directory="$PWD/usr/share/kde4/services/ServiceMenus/"
	if [[  -d "$directory"  ]] ; then 
		for file in $PWD/usr/share/kde4/services/ServiceMenus/*.desktop;  do
			echo "installing..... sudo -S install -m 644 -D "$file"  ""$prefix"/share/kde4/services/ServiceMenus""
			echo "$pas" | sudo -S install -m 644 -D "$file"  ""$prefix"/share/kde4/services/ServiceMenus" 
		done
	else
		echo "directory $directory doesn't exit skipping "
	fi
#install menu entry 

	directory="$PWD/usr/share/applications/kde4/"
	if [[  -d "$directory"  ]] ; then 
		if [[ -d "$PWD/usr/share/applications/kde4/" ]]; then 
			echo "$PWD/usr/share/applications/kde4/  detected "
			
			for file in $PWD/usr/share/applications/kde4/*.desktop ; do 
				echo "installing..... sudo -S install -m 755 -D "$file"  ""$prefix"/share/applications/kde4/""
				echo "$pas" | sudo -S install -m 755 -D "$file"  ""$prefix"/share/applications/kde4/" 
			done 
				
		fi 
	else
		echo "directory $directory doesn't exit skipping "
	fi 

# echo  "running .....kbuildsycoca4  update service menus... wait.."
echo 
echo 
 kbuildsycoca4 2>/tmp/servicemenubashinstaller.log  # echo "$pas" | sudo -S -u $SUDO_USER #GET  kbuildsycoca4 running like normal user ..to avoid error message
echo
echo $"END! EVERYTHING DONE!"
kdialog --passivepopup $"$PWD Service Menu Installed.. bye" 2 2>/dev/null
 
#reset password 
pas=""

if [[ -e "$PWD/extra_bash_function_installation" ]]; then 
	if [[ $(declare -F function_extra_install_global ) ]]; then 
		echo $"Function Extra Install Global"
		function_extra_install_global	
	else 
		echo $"No Extra global Install functions"
	fi 
	
	if [[ $(declare -F function_extra_install_system )  ]]; then 
		echo "Function Extra Install System executing.."
		function_extra_install_system
	else 
		echo $"No Extra wide Install functions"
	fi 

fi 
}

function_local(){

#create a folder to put script and set it to be recognized by the system at every login 
function_check_folder_and_create_it_if_doesnt_exist "$folder_local_bash_scripts"
# if  [[ ! -d "$folder_local_bash_scripts"  ]] ; then
# echo "mkdir "$folder_local_bash_scripts""
# mkdir "$folder_local_bash_scripts"
# fi

#if the variable is NOT EMPTY then don't do again export 
if  [[ -z $(echo "$PATH"| grep  "$folder_local_bash_scripts") ]]; then
	export "PATH=$PATH:$folder_local_bash_scripts"
	#execute the command everytiem you login
	echo "export PATH=$PATH:$folder_local_bash_scripts" >> "$HOME/.bash_profile" 
	
	#check if bash_profile has bashrc  sourced  within 
	if  [[ -z $(  grep "source "$HOME/.bashrc"" "$HOME/.bash_profile" )  ]];then
		echo "source "$HOME/.bashrc"" >> "$HOME/.bash_profile"
	else
		echo $"source $HOME/.bashrc already present"
	fi

	#load the new stuff into bash shell 
	source "$HOME/.bash_profile"

else
	echo
	echo $"..............$folder_local_bash_scripts already on path ...skipping"
	echo
fi 





#install every script with the correct permission
	if [[ -d "$PWD/usr/bin/" ]]; then 
		for file in $PWD/usr/bin/* ; do
			echo "..............install -m 755 -D "$file"  "$folder_local_bash_scripts""
			install -m 755 -D "$file"  "$folder_local_bash_scripts" 
		done
	fi 

#install the service menu 
	if [[ -d "$PWD/usr/share/kde4/services/ServiceMenus/" ]]; then 
		for file in $PWD/usr/share/kde4/services/ServiceMenus/*.desktop ;  do
			echo "installing.....install -m 644 -D "$file"  "$localprefix"share/kde4/services/ServiceMenus"
			install -m 644 -D "$file"  ""$localprefix"share/kde4/services/ServiceMenus" 
		done
	fi 
#install the menu entry if exist 

  #install menu entry in ~/.kde/share/applnk
	if [[ -d "$PWD/usr/share/applications/kde4/" ]]; then 
		function_check_folder_and_create_it_if_doesnt_exist ""$localprefix"share/applnk"
		
	
		for file in $PWD/usr/share/applications/kde4/*.desktop ; do 
 			echo "installing.....install -m 755 -D $file "$localprefix"share/applnk" 
			install -m 755 -D "$file"  ""$localprefix"share/applnk"
		done
	fi 

	kbuildsycoca4 2>/tmp/servicemenubashinstaller.log

	kdialog --passivepopup $"$PWD Service Menu Installed.. bye" 2 2>/dev/null
	kdialog --msgbox $"if you can't launch the program Please login and logout , this should load the new bash_profile" 2>/dev/null
	
	if [[ -e "$PWD/extra_bash_function_installation" ]]; then 
		if [[  $(declare -F function_extra_install_global )  ]]; then
			echo "Global Extra function Detected Executing.."
			function_extra_install_global
		else 
			echo $"No Extra global Install functions"
		fi
			
		if [[ $(declare -F function_extra_install_local ) ]]; then 
			echo "Function Extra Install Local executing.."
			function_extra_install_local
		else 
			echo $"No Extra Local Install functions"
		fi 

	fi 
 
}


function_remove_local(){

##remove local 
messageremoved=""
#remove every script 
 for file in $PWD/usr/bin/* ; do
 file="${file##*/}" 
#  file="${file%%.*}"
 	if [[ -e "$folder_local_bash_scripts/$file"  ]]; then 
 	echo "rm   "$folder_local_bash_scripts/$file""
	rm   "$folder_local_bash_scripts/$file" 
	messageremoved="$messageremoved $folder_local_bash_scripts/$file"
	else 
	echo $"$folder_local_bash_scripts/$file file doesn't exit"
	fi
 
  
  done

#remove the service menu 
  
   for file in $PWD/usr/share/kde4/services/ServiceMenus/*.desktop ;  do
 file="${file##*/}" 
#  file="${file%%.*}"
 	if [[ -e ""$localprefix"/share/kde4/services/ServiceMenus/"$file""  ]]; then 
		echo "rm  "$localprefix/share/kde4/services/ServiceMenus/$file""
		rm  "$localprefix/share/kde4/services/ServiceMenus/$file" 
		messageremoved="$messageremoved  "$localprefix"share/kde4/services/ServiceMenus/$file"
	else 
		echo $" ""$localprefix"share/kde4/services/ServiceMenus/$file"  file does not exit... skipping"
	fi
 
  done
  
 
 
#remove menu entry
  #install menu entry in ~/.kde/share/applnk
	if [[ -d "$PWD/usr/share/applications/kde4/" ]]; then 
		for file in $PWD/usr/share/applications/kde4/*.desktop ; do
			file="${file##*/}"
 			echo "removing ... "$localprefix"share/applnk/$file " 
			rm  ""$localprefix"share/applnk/$file"
			messageremoved="$messageremoved  "$localprefix"share/applnk/$file "
		done
	fi 

####################################################################
kbuildsycoca4 2>/tmp/servicemenubashinstaller.log
kdialog --passivepopup $"Removed these files  $messageremoved" 2 2>/dev/null

if [[ -e "$PWD/extra_bash_function_deinstallation" ]]; then 
	
	if [[ $(declare -F function_extra_deinstall_global )  ]]; then 
		echo $"Function Extra Deinstall Global Local detected executing .."
		function_extra_deinstall_global
	else
		echo  $"No Function Extra Global Local Deinstall Detected"
	fi 
	
	if [[ $(declare -F function_extra_deinstall_local )   ]]; then 
		echo "Function Extra Deinstall Local executing.."
		function_extra_deinstall_local
	else 
		echo $"No Function Extra Local Deinstall Detected"
	fi 

fi 


}
 
function_remove_system(){


messageremoved=""
sudoerror=false
pas=$(kdialog --password $"Insert Root Password $wrongpas" 2>/dev/null)


if [[ -z "$pas" ]];then
kdialog --error $"No password give exiting..." 2>/dev/null
exit  
fi

################remove systemwide

for file in $PWD/usr/bin/*; do
file="${file##*/}" 
# file="${file%%.*}"
 
	if [[ -e "/usr/local/bin/$file"  ]]; then
	echo $"rm   "/usr/local/bin/$file""
	echo "$pas" | sudo -S rm   "/usr/local/bin/$file" 
	messageremoved="$messageremoved /usr/local/bin/$file"
	else 
	echo $""/usr/local/bin/$file" file doesn't exit"
	fi
done

#remove the service menu 

for file in $PWD/usr/share/kde4/services/ServiceMenus/*.desktop;  do
file="${file##*/}" 
# file="${file%%.*}"
 
	if [[ -e ""$prefix"/share/kde4/services/ServiceMenus/"$file""  ]]; then 
	echo "rm   $prefix/share/kde4/services/ServiceMenus/$file"
	echo "$pas" | sudo -S rm  ""$prefix"/share/kde4/services/ServiceMenus/"$file"" 
	messageremoved="$messageremoved  $prefix/share/kde4/services/ServiceMenus/$file"
	else 
	echo $""$prefix"/share/kde4/services/ServiceMenus/"$file" file doesn't exit"
	fi
done

#remove the menu entry if it exist
if [[ -d "$PWD/usr/share/applications/kde4/" ]]; then 
	echo $"Folder Menu entry detected"
	for file in $PWD/usr/share/applications/kde4/*.desktop ; do 
		file="${file##*/}"
		if [[ -e "$prefix/share/applications/kde4/$file"  ]]; then 
			echo "rm  "$prefix/share/applications/kde4/$file""
			echo "$pas" | sudo -S rm  ""$prefix"/share/applications/kde4/$file"
			messageremoved="$messageremoved  "$prefix"share/applications/kde4/$file"
		fi 
	done
			
fi 
			
kbuildsycoca4 2>/tmp/servicemenubashinstaller.log
kdialog --passivepopup $"Removed these files  $messageremoved" 2>/dev/null
  
if [[ -e "$PWD/extra_bash_function_deinstallation" ]]; then 
	
	if [[ $(declare -F function_extra_deinstall_global )  ]]; then 
		echo $"Function extra deinstall global detected executing"
		function_extra_deinstall_global
	else
		echo  $"No Function Extra Global System Deinstall Detected"
	fi 
	
	if [[ $(declare -F function_extra_deinstall_system ) ]]; then 
		echo $"Function Extra Deinstall System  detected executing"
		function_extra_deinstall_system
	else
		echo $"No Function Extra Deinstall System detected"
	fi 

fi 
}

function_main(){
 
answer=$(kdialog  --title $"Service menu installation menu " --menu  $"Installation Menu: choose an installation option"  l  $"Local Installation"  sw $"System  Installation" neutral "**********************************************" r $"Remove Service Menu Locally" rs $"Remove Service Menu from the System" --default "Local Installation" 2>/dev/null)
echo "menu entry $answer"
case $answer in 

l)
function_local 

;;

sw)
function_system

;;

r)
function_remove_local
;;
rs)
function_remove_system
;;
neutral)
function_main
;;
*)
#kdialog --passivepopup $":P no option so... installation aborted" 2
exit 0
;;
esac
}


bin="/usr/local/bin/"
folder_local_bash_scripts="$HOME/bin"
prefix="$(kde4-config --prefix)"
localprefix="$(kde4-config --localprefix)"

#import extra function from other files if they exit 
if [[ -e "$PWD/extra_bash_function_installation" ]]; then 
	echo $"Extra installation file detected loading functions
. $PWD/extra_bash_function_installation"

. "$PWD/extra_bash_function_installation"  
fi 

if [[ -e "$PWD/extra_bash_function_deinstallation" ]]; then 
	echo $"Extra deinstallation file detected loading functions
. $PWD/extra_bash_function_deinstallation"

. "$PWD/extra_bash_function_deinstallation" 
fi 




echo "
PARAMETERS:

system folder for script $bin
local folder for script $folder_local_bash_scripts
prefix: $prefix
local prefix: $localprefix

"
function_main