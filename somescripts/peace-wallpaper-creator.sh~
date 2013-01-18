#!/bin/bash -x


function_help () {
	
	echo $"Usage 
	peace-wallpaper-creator.sh name developer license mail
	
	ex 
	
	peace-wallpaper-creator.sh Theme_one Peace Nowardev  gpl  nowardev@gmail.com"
}



if [[ -z "$1" || -z "$2" ||-z "$3" ||-z "$4"  ]]; then 

	function_help 

	else 
		
name="$1"
developer="$2"
license="$3"
mail="$4"

echo "$1 $2 $3 $4 "
fi  

if [[ ! -d "$directory"  ]] ; then
mkdir "$HOME/$name"
mkdir "$HOME/$name/contents"
mkdir "$HOME/$name/contents/images"
mkdir "/tmp/$name"
mkdir "/tmp/$name/logos"
	else
		echo $"Directory exist "$HOME/$name" "

		fi 
		
		
background=$(read -e -p $"Give me the background image ..AUTOCOMPLETION FUNCTION USING TAB KEY")
logo="$(read -e -p  $"Give me the logo image ..AUTOCOMPLETION FUNCTION USING TAB KEY")"
folder="$(read -e -p $"Give me the folder template where i can read the names typically /usr/share/wallpapers/Air for example note that you can use AUTOCOMPLETION FUNCTION USING TAB KEY.")"

directory="$folder/contents/images"

if [[  -d "$directory"  ]] ; then
	shopt -s nullglob
	shopt -s dotglob # To include hidden files
	files=("$directory"/*)

	if [ ${#files[@]} -gt 0 ]; then echo "ZUM ZUM ZUM ZUM";else echo $"Folder empty? exiting ";  exit 2 ;  fi
fi 


echo "[Desktop Entry]
Name="$name"
X-KDE-PluginInfo-Name="$name"
X-KDE-PluginInfo-Author="$developer"
X-KDE-PluginInfo-Email="$mail"
X-KDE-PluginInfo-License="$license"

" >"$HOME/$name/metadata.desktop"

for file in $directory ; do 
	convert $background -resize  ${file%%.*}\! "/tmp/$name/${file%%.*}.png" 
	convert $background -resize  ${file%%.*} "/tmp/$name/logos/${file%%.*}.png" 
	composite  -gravity center "/tmp/$name/logos/${file%%.*}.png" "/tmp/$name/${file%%.*}.png"  "$HOME/$name/contents/images/${file%%.*}.png"
	done

	

