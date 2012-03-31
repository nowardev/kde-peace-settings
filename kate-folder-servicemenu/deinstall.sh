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

#NowardevTeam

# if [ "$(id -u)" = 0 ]; then 
# 	echo "you have the power lol" 
# 	echo "installing..."
# else 
# 	echo "YOU ARE NOT ROOT TO INSTALL  YOU MUST BE ROOT. "
# 	echo "have you typed wrong password?"
# 	exit 0
# fi

bin="/usr/local/bin/"

prefix="$(kde4-config --prefix)"
localprefix="$(kde4-config --localprefix)"



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
echo "$pas" | sudo -S install -m 644 -D "$file"  ""$prefix"/share/kde4/services/ServiceMenus" 
  done
 
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
if [[ ! -d "$HOME/.local/peace_bash_scripts"  ]] ; then
mkdir "$HOME/.local/peace_bash_scripts"
fi

export "PATH=$PATH:$HOME/.local/peace_bash_scripts"
echo "export PATH=$PATH:$HOME/.local/peace_bash_scripts" >> "$HOME/.bash_profile" #execute the command everytiem you login



#install every script with the correct permission
 for file in $PWD/usr/bin/* ; do
  install -m 755 -D "$file"  "$HOME/.local/peace_bash_scripts" 
  done

#install the service menu 
  
   for file in $PWD/usr/share/kde4/services/ServiceMenus/*.desktop ;  do
  install -m 644 -D "$file"  ""$localprefix"share/kde4/services/ServiceMenus" 
  done
kbuildsycoca4

kdialog --passivepopup $"$PWD Service Menu Installed.. bye" 2
}


function_remove(){

##remove local 

#remove every script 
 for file in $PWD/usr/bin/* ; do
 file="${file##*/}" 
#  file="${file%%.*}"
 	if [[ -e "$HOME/.local/peace_bash_scripts/$file"  ]]; then 
	rm   "$HOME/.local/peace_bash_scripts/$file" 
	else 
	echo $"file doesn't exit"
	fi
 
  
  done

#remove the service menu 
  
   for file in $PWD/usr/share/kde4/services/ServiceMenus/*.desktop ;  do
 file="${file##*/}" 
#  file="${file%%.*}"
 	if [[ -e ""$localprefix"/share/kde4/services/ServiceMenus/"$file""  ]]; then 
	rm  "$localprefix/share/kde4/services/ServiceMenus/$file" 
	else 
	echo $"file doesn\'t exit"
	fi
 
  done
####################################################################
kdialog --passivepopup $"Done" 2


}
 
function_remove_system(){



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
	echo "$pas" | sudo -S rm   "/usr/local/bin/$file" 
	else 
	echo $"file doesn't exit"
	fi
done

#remove the service menu 

for file in $PWD/usr/share/kde4/services/ServiceMenus/*.desktop;  do
file="${file##*/}" 
# file="${file%%.*}"
 
	if [[ -e ""$prefix"/share/kde4/services/ServiceMenus/"$file""  ]]; then 
	echo "$pas" | sudo -S rm  ""$prefix"/share/kde4/services/ServiceMenus/"$file"" 
	else 
	echo $"file doesn't exit"
	fi
done
  
kdialog --passivepopup $"Done"
  

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
kdialog --passivepopup $":P no option so... exiting" 2
exit 0
;;
esac
}

function_main