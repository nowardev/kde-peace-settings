#!/bin/bash
function_check_file(){
	if [[ -e "$1" ]]; then 
		echo $"File exist! change name"
		kdialog --info $"File exit , change name "
		exit 
}

function_start(){
	scanimange --compression JPEG --jpeg-quality 100 > "$1" 
}


function_check_file "$1"
function_start "$1"