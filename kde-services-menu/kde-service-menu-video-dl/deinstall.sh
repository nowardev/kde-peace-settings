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



function_check_folder_and_create_it_if_doesnt_exist () {

if [[ $userinstallation == "true" ]]; then 
	if [[ ! -d "$1" ]]; then
        echo
		echo $"Folder $1  doen't exist...creating  mkdir $1
		"
		
		mkdir "$1"
	else
        echo
		echo $"Folder $1 exist.... 
		"
	fi
else
	if [[ ! -d "$1" ]]; then 
        echo
		echo $"Folder $1  doen't exist...creating  mkdir $1
		"
		
		echo "$pas" | sudo -S  mkdir "$1"
	else
        echo
		echo $"Folder $1 exist....
		"
	fi
	
fi	
}
 
function_checksudo(){

if [[ $sudoerror == true ]] ; then
function_system
wrongpas=$"before you typed a WRONG PASS"
fi

}


function_path(){

function_check_folder_and_create_it_if_doesnt_exist "$USER_BINARY_TARGET"
 
#if the variable is NOT EMPTY then don't do again export 
# if  [[ $PATH =~ $USER_BINARY_TARGET || $PATH =~ ${USER_BINARY_TARGET/%\//} ]]; then
if [[ $PATH == *"$USER_BINARY_TARGET"* || $PATH == *"${USER_BINARY_TARGET/%\//}"* ]]; then 
echo
	echo $"${USER_BINARY_TARGET/%\//} already on path ...skipping"
	echo


else

	
	 
	#execute the command everytiem you login
	kdialog --title $"INFO"  --yes-label $"Yes, i want Add"  --no-label $"Noo" --cancel-label $"Cancell"  --warningyesnocancel   $" I have detected that in your \$PATH there is not this folder $USER_BINARY_TARGET , so you will not be able to execute this script the program locally , DO YOU WANT ADD $USER_BINARY_TARGET to your path?" 
	if [[ $? == 0 ]] ; then 
		echo "PATH=$PATH:"${USER_BINARY_TARGET/%\//}"" >> "$HOME/.bash_profile" 
  	#check if bash_profile has bashrc  sourced  within 
		if  [[ -z $(  grep "source "$HOME/.bashrc"" "$HOME/.bash_profile" )  ]];then
			echo "source "$HOME/.bashrc"" >> "$HOME/.bash_profile"
		else
			echo $"source $HOME/.bashrc already present"
		fi

		#load the new stuff into bash shell 
		source "$HOME/.bash_profile"
	else
		kdialog --title $"Service Menu Installer"  --msgbox  $" This Program is installed locally but you will not be able to run it properly: this is your current $PATH , and should be $PATH:$USER_BINARY_TARGET"
  
	fi 
	 
fi


 

}


function_main(){
 
answer=$(kdialog  --title $"Service menu installation menu " --menu  $"Installation Menu: choose an installation option"  l  $"Local Installation"  sw $"System  Installation" neutral "**********************************************" r $"Remove Service Menu Locally" rs $"Remove Service Menu from the System" --default "Local Installation" 2>/dev/null)
echo "menu entry $answer"
case $answer in 

l)
# function_local 
userinstallation="true"
function_path
function_installation
;;

sw)
userinstallation="false"
function_installation
# function_system

;;

r)
userinstallation="true"
function_remove
;;
rs)
userinstallation="false"
function_remove
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




function_installation(){

filetoinstall=()
foldertoinstall=()
permission=()

 


# for file in $(find /$PWD/ -type f -print | grep -v 'README' | grep -v extra | grep -v deinstall.sh | grep -v *.gz |  grep -v *.tar |grep -v -w install); do 
for file in $(find /$PWD/ -type f -print | grep -E "/usr/bin|*.desktop"); do 

    file=${file/\/\//\/} ; file=${file/"$PWD"/} ; installfolder="${file%/*}" 
    if [[ "$installfolder" ]]; then 
        filetoinstall=("${filetoinstall[@]}" "$file" ) 
        if [[ $userinstallation == "true"  ]]; then 
            if [[ $installfolder =~ "/applications/" ]] ; then 
                foldertoinstall=("${foldertoinstall[@]}" "$USER_MENU_ENTRY_TARGET")
                permission=("${permission[@]}" "$permissionapplication")
                
 
            elif [[ $installfolder =~ "ServiceMenus" ]] ; then
                foldertoinstall=("${foldertoinstall[@]}" "$USER_SERVICE_MENU_TARGET")
                permission=("${permission[@]}" "$permissionservicemenubinary ")
                
            elif [[ $installfolder =~ "bin" ]] ; then
                foldertoinstall=("${foldertoinstall[@]}" "$USER_BINARY_TARGET")
                permission=("${permission[@]}" "$permissionservicemenubinary")
            fi

        else
 
            if [[ $installfolder =~ "/applications/" ]] ; then 
                foldertoinstall=("${foldertoinstall[@]}" "$SYSTEM_MENU_ENTRY_TARGET")
                permission=("${permission[@]}" "$permissionapplication")
                
 
            elif [[ $installfolder =~ "ServiceMenus" ]] ; then
                foldertoinstall=("${foldertoinstall[@]}" "$SYSTEM_SERVICE_MENU_TARGET")
                permission=("${permission[@]}" "$permissionservicemenubinary ")
                
            elif [[ $installfolder =~ "bin" ]] ; then
                foldertoinstall=("${foldertoinstall[@]}" "$SYSTEM_BINARY_TARGET")
                permission=("${permission[@]}" "$permissionservicemenubinary")
            fi
            
 
        fi
        
    fi
done

if [[ $userinstallation == "false" ]]; then 
# INSTALLATION STARTS
	sudoerror=false
	pas=$(kdialog --password $"Insert Root Password $wrongpas" 2>/dev/null )
	
	
	if [[ -z "$pas" ]];then
		kdialog --error $"No password given exiting..." 2>/dev/null 
		exit  
	fi
        ###########CHECK IF THERE IS THE FOLDER ON /USR/LOCAL/KSERVICES5/SERVICEMENU
        for folder in "$SYSTEM_SERVICE_MENU_TARGET" ; do 
             function_check_folder_and_create_it_if_doesnt_exist "$folder"
        done 
        ###########CHECK IF THERE IS THE FOLDER ON /USR/LOCAL/KSERVICES5/SERVICEMENU
    a=0
    for r in "${filetoinstall[@]}" ; do
        echo "INSTALLING ${r/$PWD} in ${foldertoinstall[$a]}  " #Chmod  ${permission[$a]}
#         echo ""$pas" | sudo -S install -m ${permission[$a]} -D "$PWD$r"  "${foldertoinstall[$a]}""
set -x
        echo "$pas" | sudo -S install -m ${permission[$a]} -D "$PWD$r"  "${foldertoinstall[$a]}"
        a=$(($a+1))
        set +x
    done
    
    

    if [[ $? ==  1 ]]; then
        sudoerror=true
    else 
        sudoerror=false
    fi
    function_checksudo
# END SYSTEM INSTALLATION

else

# USER INSTALLATION STARTS
        ###########CHECK IF THERE IS THE FOLDER ON /USR/LOCAL/KSERVICES5/SERVICEMENU
        for folder in "$USER_SERVICE_MENU_TARGET" ; do 
             function_check_folder_and_create_it_if_doesnt_exist "$folder"
        done 
        ###########CHECK IF THERE IS THE FOLDER ON /USR/LOCAL/KSERVICES5/SERVICEMENU

    a=0
    for r in "${filetoinstall[@]}" ; do
        echo "INSTALLING $r in ${foldertoinstall[$a]}  " #Chmod  ${permission[$a]}
#         install -m ${permission[$a]} -D "$r"  "${foldertoinstall[$a]}"
        install -m ${permission[$a]} -D "$PWD$r"  "${foldertoinstall[$a]}"
        a=$(($a+1))
    done
# END SYSTEM INSTALLATION
 
fi 


           

$RELOAD_SYSTEMCONFIGS 2>/dev/null

}

 
function_remove(){
 
filetoinstall=()
foldertoinstall=()
permission=()
listnamefile=()
removelist=()
# for file in $(find /$PWD/ -type f -print | grep -v 'README' | grep -v extra | grep -v deinstall.sh | grep -v *.gz | grep -v -w install); do 
for file in $(find /$PWD/ -type f -print | grep -E "/usr/bin|*.desktop"); do 
    file=${file/\/\//\/} ; file=${file/"$PWD"/} ;namefile="${file##*/}"   ; installfolder="${file%/*}" 
    if [[ "$installfolder" ]]; then 
        filetoinstall=("${filetoinstall[@]}" "$file" )
        listnamefile=("${listnamefile[@]}" "$namefile" )
        
        if [[ $userinstallation == "true"  ]]; then 
            if [[ $installfolder =~ "/applications/" ]] ; then 
                removelist=("${removelist[@]}" "$USER_MENU_ENTRY_TARGET$namefile")
                 
                
 
            elif [[ $installfolder =~ "ServiceMenus" ]] ; then
                 removelist=("${removelist[@]}" "$USER_SERVICE_MENU_TARGET$namefile")
            
                
            elif [[ $installfolder =~ "bin" ]] ; then
                 removelist=("${removelist[@]}" "$USER_BINARY_TARGET$namefile")
               
            fi
        else
        set -x
            if [[ $installfolder =~ "/applications/" ]] ; then 
                removelist=("${removelist[@]}" "$SYSTEM_MENU_ENTRY_TARGET$namefile")
               
                
 
            elif [[ $installfolder =~ "ServiceMenus" ]] ; then
                removelist=("${removelist[@]}" "$SYSTEM_SERVICE_MENU_TARGET$namefile")
                
                
            elif [[ $installfolder =~ "bin" ]] ; then
                removelist=("${removelist[@]}" "$SYSTEM_BINARY_TARGET$namefile")
                
            fi
        set +x
        fi
        
    fi
done

if [[ $userinstallation == "false" ]]; then 
# REMOVE STARTS
	sudoerror=false
	pas=$(kdialog --password $"Insert Root Password $wrongpas" 2>/dev/null )
	
	
	if [[ -z "$pas" ]];then
		kdialog --error $"No password given exiting..." 2>/dev/null 
		exit  
	fi

# 
#         ###########CHECK IF THERE IS THE FOLDER ON /USR/LOCAL/KSERVICES5/SERVICEMENU
#         for folder in "$SYSTEM_SERVICE_MENU_TARGET" ; do 
#              function_check_folder_and_create_it_if_doesnt_exist "$folder"
#         done 
#         ###########CHECK IF THERE IS THE FOLDER ON /USR/LOCAL/KSERVICES5/SERVICEMENU
    a=0
    for r in "${removelist[@]}" ; do
        echo "REMOVING ${r/$PWD} " #Chmod  ${permission[$a]}
#         echo ""$pas" | sudo -S install -m ${permission[$a]} -D "$PWD$r"  "${foldertoinstall[$a]}""
set -x
        echo "$pas" | sudo -S rm "$r"
        a=$(($a+1))
        set +x
    done
    
    

    if [[ $? ==  1 ]]; then
        sudoerror=true
    else 
        sudoerror=false
    fi
    function_checksudo
# END SYSTEM INSTALLATION

else
echo "REMOVE LOCAL INSTALLATION FOR THIS SERVICE MENU"
# USER INSTALLATION STARTS
#         ###########CHECK IF THERE IS THE FOLDER ON /USR/LOCAL/KSERVICES5/SERVICEMENU
#         for folder in "$USER_SERVICE_MENU_TARGET" ; do 
#              function_check_folder_and_create_it_if_doesnt_exist "$folder"
#         done 
#         ###########CHECK IF THERE IS THE FOLDER ON /USR/LOCAL/KSERVICES5/SERVICEMENU

    a=0
    for r in "${removelist[@]}" ; do
          echo "REMOVING ${r/$PWD} "   
 
         rm "$r"
        a=$(($a+1))
    done
# END SYSTEM INSTALLATION
 
fi 



a=0
for r in "${filetoinstall[@]}" ; do
    echo " removing file ...${removelist[$a]} "
    a=$(($a+1))
done
 
$RELOAD_SYSTEMCONFIGS 2>/dev/null
}




function_check_program(){

	for p in "${program[@]}";
		do
        if [[ ! -z "$p" ]] ; then 
			if ! type -p "$p" >/dev/null;then echo $"$p not found; PLEASE INSTALL IT" >&2
				echo "error exiting..." >&2
				exit 1;
            else
               echo $"
$p.........ok installed" >&2
			fi
        fi
		done


}

function_print_parameters(){

echo "
installer version $version
PARAMETERS:
    RELOAD_SYSTEMCONFIGS="$RELOAD_SYSTEMCONFIGS"
    SYSTEM_MENU_ENTRY_TARGET="$SYSTEM_MENU_ENTRY_TARGET"  
    SYSTEM_SERVICE_MENU_TARGET="$SYSTEM_SERVICE_MENU_TARGET" 
    SYSTEM_BINARY_TARGET="$SYSTEM_BINARY_TARGET"
    USER_MENU_ENTRY_TARGET="$USER_MENU_ENTRY_TARGET" 
    USER_SERVICE_MENU_TARGET="$USER_SERVICE_MENU_TARGET" 
    USER_BINARY_TARGET="$USER_BINARY_TARGET"

"

}


echo "
PARAMETERS:
 

"

INSTALLATION_FORKDE4_APPS_ON_KDE5="$1"
a=$(dolphin --version|cut -d' ' -f2 ) 
permissionservicemenubinary="755"
permissionapplication="644"
program[0]=kf5-config
program[1]=kde4-config
program[2]=kdialog 
version="5.7" 


if [[ ! "$a" < 15 && "$INSTALLATION_FORKDE4_APPS_ON_KDE5" != "kde4" ]]; then
    echo "dolphin version 5 $a" 
    program=("${program[@]/kde4-config/}")
    function_check_program
    RELOAD_SYSTEMCONFIGS="kbuildsycoca5"
    SYSTEM_MENU_ENTRY_TARGET="$(kf5-config --path xdgdata-apps | cut -d : -f 2)"  
    SYSTEM_SERVICE_MENU_TARGET="$(kf5-config --path services | cut -d: -f2)ServiceMenus/" 
    SYSTEM_BINARY_TARGET="/usr/local/bin/"
    USER_MENU_ENTRY_TARGET="$(kf5-config --path xdgdata-apps | cut -d : -f 1)" 
    USER_SERVICE_MENU_TARGET="$(kf5-config --path services | cut -d: -f1)ServiceMenus/" 
    USER_BINARY_TARGET="$HOME/bin/"

    function_print_parameters
    
    SYSTEM_SERVICE_MENU_TARGET_KDE4="$(kde4-config --prefix)/share/kde4/services/ServiceMenus/"
    USER_SERVICE_MENU_TARGET_KDE4="$(kde4-config --localprefix)share/kde4/services/ServiceMenus/" 
    

elif [[ ! "$a" < "15"   &&  $INSTALLATION_FORKDE4_APPS_ON_KDE5 == "kde4"  ]]; then 
    echo "dolphin version 5 BUT INSTALLATION WILL BE LIKE KDE4 $a"
    program=("${program[@]/kf5-config/}")
    function_check_program
    RELOAD_SYSTEMCONFIGS="kbuildsycoca4"
    SYSTEM_MENU_ENTRY_TARGET="$(kde4-config --prefix)/share/applications/kde4/"  
    SYSTEM_SERVICE_MENU_TARGET="$(kde4-config --prefix)/share/kde4/services/ServiceMenus/" 
    SYSTEM_BINARY_TARGET="/usr/local/bin/"
    USER_MENU_ENTRY_TARGET="$(kde4-config --localprefix)share/applications/kde4/" 
    USER_SERVICE_MENU_TARGET="$(kde4-config --localprefix)share/kde4/services/ServiceMenus/" 
    USER_BINARY_TARGET="$HOME/bin/"

    function_print_parameters

elif [[  "$a" < 15   ]]; then 
    echo "dolphin version 5 BUT INSTALLATION WILL BE LIKE KDE4 $a"
    program=("${program[@]/kf5-config/}")
    function_check_program
    RELOAD_SYSTEMCONFIGS="kbuildsycoca4"
    SYSTEM_MENU_ENTRY_TARGET="$(kde4-config --prefix)/share/applications/kde4/"  
    SYSTEM_SERVICE_MENU_TARGET="$(kde4-config --prefix)/share/kde4/services/ServiceMenus/" 
    SYSTEM_BINARY_TARGET="/usr/local/bin/"
    USER_MENU_ENTRY_TARGET="$(kde4-config --localprefix)share/applications/kde4/" 
    USER_SERVICE_MENU_TARGET="$(kde4-config --localprefix)share/kde4/services/ServiceMenus/" 
    USER_BINARY_TARGET="$HOME/bin/"

    function_print_parameters
  
   
 else
    echo "no dolphin installation :S i will try to install the menu entry if the folder exist "
    RELOAD_SYSTEMCONFIGS=""

fi 
 

function_main 


