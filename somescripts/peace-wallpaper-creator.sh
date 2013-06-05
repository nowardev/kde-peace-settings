#!/bin/bash -x
 
#license gpl 
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
function_help () {
	
	echo $"Usage 
	peace-wallpaper-creator.sh name developer license mail
	
	ex 
	
	peace-wallpaper-creator.sh Theme_one Peace Nowardev  gpl  nowardev@gmail.com"
}



function_check_program(){
	
program[0]=convert
program[1]=composite
# program[2]=html2text
# program[3]=awk
# program[4]=fold
 

for program in "${program[@]}"; 
do if ! type -p "$program" >/dev/null;
 then echo "$program not found; PLEASE INSTALL IT" >&2
echo "error exiting..." >&2
echo 
 
echo "For debian : 

sudo apt-get install imagemagick "
 exit 1; 
fi; done
 


 
	
}

function_save_settings(){
	
#$1 directory $2 file to store settings 


if [[ !  -d "$1"  ]] ; then
	mkdir "$1"
else
	echo "name=\"$name\"" > "$2"
	echo "developer=\"$developer\"" >> "$2"
	echo "license=\"$license\"" >> "$2"
	echo "mail=\"$mail\"" >> "$2"

fi 

}

function_load_settings(){
#file to load  $1
	if [[  -e "$1"  ]] ; then
	. "$1"  
	fi 

}

conffolder="$HOME/.config/nowardev-wallpaper-creator"
conffile=""$conffolder"/nowardev-wallpaper-creator.cfg" 

if [[ -z "$1" || -z "$2" ||-z "$3" ||-z "$4"  ]]; then 
  if [[ -e "$conffile" ]]; then 
    echo $"Conf file Corrupted some of variables is empty, please check the file $conffile"
    exit 1
  else
  function_help 
    fi 

	

	else 
		
name="$1"
developer="$2"
license="$3"
mail="$4"

echo "$1 $2 $3 $4 "
fi  




############start to read options ###############
SAVESETTINGS="false"



function_check_program	

	args=$@;  i=0
 	if [[ -z $@ ]]; then
		echo $"trying to load conf from $conffile"
		function_load_settings
	fi
 	while (( $# )); do 
	case $1 in 
	-h|--help|-\?) function_help; exit 0;;
 	-e) 
	echo $"Edit settings ...type your terminal editor , nano vim kate gedit etc..press enter for nano"
	read   
	
	if [[ -z "$REPLY" ]];then
		nano "$conffile"
	else
		$REPLY "$conffile"
	fi
 
	exit ;;
	-b) background="$2";  shift 2 ;;
	-logo) logo="$2";  shift 2 ;;
	-l ) license="$2";  shift 2 ;; 
	-m )mail="$2"; shift 2 ;; 	
	-d) developer="on"; shift 2;;
	-n) name="$2"; shift 2;;
	-ws) SAVESETTINGS="true"; shift ;;
	*) args+=( "$1" ); shift ;;
	--) shift; echo "invalid option: $1" 1>&2; function_help; exit 1;;
	-*) echo "invalid option: $1" 1>&2; function_help; exit 1;;
	esac
	done

if [[ "$SAVESETTINGS" == "true" ]] ; then
function_save_settings "$conffolder" "$conffile"
fi



echo $"Check and creating project"
if [[ ! -d "$HOME/$name"  ]] ; then
mkdir "$HOME/$name"
mkdir "$HOME/$name/contents"
mkdir "$HOME/$name/contents/images"
mkdir "/tmp/$name"
mkdir "/tmp/$name/logos"
echo $"folders created"
# 	else
# 		echo $"Directory exist "$HOME/$name" please change name exiting ..."
# 		exit 1
		fi 
		
		
 
 


echo "[Desktop Entry]
Name="$name"
X-KDE-PluginInfo-Name="$name"
X-KDE-PluginInfo-Author="$developer"
X-KDE-PluginInfo-Email="$mail"
X-KDE-PluginInfo-License="$license"

" >"$HOME/$name/metadata.desktop"

resolutions=(640x480 800x600 1024x600 1024x768 1152x864 1280x720 1280x768 1280x800 1280x960 1280x1024 1360x768 1366x768 1400x1050 1440x900 1600x900 1600x1200 1680x1050 1920x1080 1920x1200 2048x1152 2560x1440 2560x1600)
a=(640 800 1024 1024 1152 1280 1280 1280 1280 1280 1360 1366 1400 1440 1600 1600 1680 1920 1920 2048 2560 2560 )
b=(480 600 600 768 864 720 768 800 960 1024 768 768 1050 900 900 1200 1050 1080 1200 1152 1440 1600 )

for((i=0; i<${#resolutions[@]}; i++)) ; do newreslogo=$(($((${a[$i]}*35))/1920)) ; echo "new resolution for logo :$newreslogo"  
      
	convert "$background" -resize  ${resolutions[$i]}\! "/tmp/$name/${resolutions[$i]}.png" 
	convert  "$logo" -resize  "$newreslogo""x""$newreslogo" "/tmp/$name/logos/"$newreslogo""x""$newreslogo".png" 
	composite  -gravity center "/tmp/$name/logos/"$newreslogo""x""$newreslogo".png"   "/tmp/$name/${resolutions[$i]}.png" "$HOME/$name/contents/images/${resolutions[$i]}.png" 
	done


