#!/bin/bash 
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

 

bin="/usr/local/bin/"
folder_local_bash_scripts="$HOME/bin"
prefix="$(kde4-config --prefix)"
localprefix="$(kde4-config --localprefix)"


function_check_folder_and_create_it_if_doesnt_exist () {
	if [[ ! -d "$1" ]]; then 
		echo $"..............Folder $1  doen't exist...creating  mkdir $1
		"
		
		mkdir "$1"
	else
		echo $"			Folder $1 exist 
		"
	fi 
	
	
}

function_checksudo(){

if [[ $sudoerror == true ]] ; then
function_systemwide
wrongpas=$"before you typed a WRONG PASS"
fi

}

function_systemwide() {

sudoerror=false
pas=$(kdialog --password $"Insert Root Password $wrongpas")


if [[ -z "$pas" ]];then
kdialog --error $"No password give exiting..."
exit  
fi

 
#install every script with the correct permission
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

  function_checksudo


#install the service menu 
  
   for file in $PWD/usr/share/kde4/services/ServiceMenus/*.desktop;  do
	   echo "installing..... sudo -S install -m 644 -D "$file"  ""$prefix"/share/kde4/services/ServiceMenus""
	   echo "$pas" | sudo -S install -m 644 -D "$file"  ""$prefix"/share/kde4/services/ServiceMenus" 
  done

  #install menu entry 
if [[ -d "$PWD/usr/share/applications/kde4/" ]]; then 
	echo "$PWD/usr/share/applications/kde4/  detected "
 
  for file in $PWD/usr/share/applications/kde4/*.desktop ; do 
	  echo "installing..... sudo -S install -m 755 -D "$file"  ""$prefix"/share/applications/kde4/""
	  echo "$pas" | sudo -S install -m 755 -D "$file"  ""$prefix"/share/applications/kde4/" 
done 

fi 

# echo  "running .....kbuildsycoca4  update service menus... wait.."
echo 
echo 
 kbuildsycoca4  # echo "$pas" | sudo -S -u $SUDO_USER #GET  kbuildsycoca4 running like normal user ..to avoid error message
echo
echo "END! EVERYTHING DONE!"

 
 
pas=""
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
	echo $"$folder_local_bash_scripts already on path ...skipping"
	echo
fi 





#install every script with the correct permission
	for file in $PWD/usr/bin/* ; do
		echo "installing..... install -m 755 -D "$file"  "$folder_local_bash_scripts""
		install -m 755 -D "$file"  "$folder_local_bash_scripts" 
	done

#install the service menu 
  
	for file in $PWD/usr/share/kde4/services/ServiceMenus/*.desktop ;  do
		echo "installing.....install -m 644 -D "$file"  "$localprefix"share/kde4/services/ServiceMenus"
		install -m 644 -D "$file"  ""$localprefix"share/kde4/services/ServiceMenus" 
	done
#install the menu entry if exist 

  #install menu entry 
	if [[ -d "$PWD/usr/share/applications/kde4/" ]]; then 
	
		for file in $PWD/usr/share/applications/kde4/*.desktop ; do 
			function_check_folder_and_create_it_if_doesnt_exist ""$localprefix"share/applications"
			function_check_folder_and_create_it_if_doesnt_exist ""$localprefix"share/applications/kde4"
			 
			echo "installing.....install -m 755 -D $file  "$localprefix"share/applications/kde4/" 
			install -m 755 -D "$file"  ""$localprefix"share/applications/kde4/"
		done
	fi 

	kbuildsycoca4

	kdialog --passivepopup $"$PWD Service Menu Installed.. bye" 2
	kdialog --msgbox $"if you can't launch the program Please login and logout , this should load the new bash_profile"
}


function_remove(){

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
  
#remove the menu entry if it exist
if [[ -d "$PWD/usr/share/applications/kde4/" ]]; then 
	
	for file in $PWD/usr/share/applications/kde4/*.desktop ; do 
		file="${file##*/}"
		if [[ -e "$localprefix/share/applications/kde4/$file"  ]]; then 
			echo "rm  "$localprefix"share/applications/kde4/$file"
			rm  ""$localprefix"share/applications/kde4/$file"
			messageremoved="$messageremoved  "$localprefix"share/applications/kde4/$file"
		fi 
	done
fi 
 
####################################################################
kbuildsycoca4
kdialog --passivepopup $"Removed these files  $messageremoved" 2



}
 
function_remove_system(){


messageremoved=""
sudoerror=false
pas=$(kdialog --password $"Insert Root Password $wrongpas")


if [[ -z "$pas" ]];then
kdialog --error $"No password give exiting..."
exit  
fi

################remove systemwide

for file in $PWD/usr/bin/*; do
file="${file##*/}" 
# file="${file%%.*}"
 
	if [[ -e "/usr/local/bin/$file"  ]]; then
	echo $" rm   "/usr/local/bin/$file""
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
	echo $"Menu entry detected"
	for file in $PWD/usr/share/applications/kde4/*.desktop ; do 
		file="${file##*/}"
		if [[ -e "$prefix/share/applications/kde4/$file"  ]]; then 
			echo "rm  "$prefix/share/applications/kde4/$file""
			echo "$pas" | sudo -S rm  ""$prefix"share/applications/kde4/$file"
			messageremoved="$messageremoved  "$prefix"share/applications/kde4/$file"
		fi 
	done
			
fi 
			
  kbuildsycoca4
kdialog --passivepopup $"Removed these files  $messageremoved"
  

}

function_main(){
 
answer=$(kdialog  --title $"Service menu installation menu " --menu  $"Installation Menu: choose an installation option"  l  $"Local Installation"  sw $"System Wide Installation" neutral "*******************" r $"Remove Local" rs $"Remove System wide" --default "Local Installation" )

case $answer in 

l)
function_local 

;;

sw)
function_systemwide

;;

r)
function_remove
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




function_main
echo "
PARAMETERS:

system folder for script $bin
local folder for script $folder_local_bash_scripts
prefix: $prefix
local prefix: $localprefix

"