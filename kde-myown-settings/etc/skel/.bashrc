# ~/.bashrc: executed by bash(1) for non-login shells.
# see /usr/share/doc/bash/examples/startup-files (in the package bash-doc)
# for examples

# If not running interactively, don't do anything
case $- in
    *i*) ;;
      *) return;;
esac

# don't put duplicate lines or lines starting with space in the history.
# See bash(1) for more options
HISTCONTROL=ignoreboth

# append to the history file, don't overwrite it
shopt -s histappend

# for setting history length see HISTSIZE and HISTFILESIZE in bash(1)
HISTSIZE=1000
HISTFILESIZE=2000

# check the window size after each command and, if necessary,
# update the values of LINES and COLUMNS.
shopt -s checkwinsize

# If set, the pattern "**" used in a pathname expansion context will
# match all files and zero or more directories and subdirectories.
#shopt -s globstar

# make less more friendly for non-text input files, see lesspipe(1)
[ -x /usr/bin/lesspipe ] && eval "$(SHELL=/bin/sh lesspipe)"

# set variable identifying the chroot you work in (used in the prompt below)
if [ -z "${debian_chroot:-}" ] && [ -r /etc/debian_chroot ]; then
    debian_chroot=$(cat /etc/debian_chroot)
fi

# set a fancy prompt (non-color, unless we know we "want" color)
case "$TERM" in
    xterm-color) color_prompt=yes;;
esac

# uncomment for a colored prompt, if the terminal has the capability; turned
# off by default to not distract the user: the focus in a terminal window
# should be on the output of commands, not on the prompt
#force_color_prompt=yes

if [ -n "$force_color_prompt" ]; then
    if [ -x /usr/bin/tput ] && tput setaf 1 >&/dev/null; then
	# We have color support; assume it's compliant with Ecma-48
	# (ISO/IEC-6429). (Lack of such support is extremely rare, and such
	# a case would tend to support setf rather than setaf.)
	color_prompt=yes
    else
	color_prompt=
    fi
fi

if [ "$color_prompt" = yes ]; then
    PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
else
    PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w\$ '
fi
unset color_prompt force_color_prompt

# If this is an xterm set the title to user@host:dir
case "$TERM" in
xterm*|rxvt*)
    PS1="\[\e]0;${debian_chroot:+($debian_chroot)}\u@\h: \w\a\]$PS1"
    ;;
*)
    ;;
esac

# enable color support of ls and also add handy aliases
if [ -x /usr/bin/dircolors ]; then
    test -r ~/.dircolors && eval "$(dircolors -b ~/.dircolors)" || eval "$(dircolors -b)"
    alias ls='ls --color=auto'
    #alias dir='dir --color=auto'
    #alias vdir='vdir --color=auto'

    alias grep='grep --color=auto'
    alias fgrep='fgrep --color=auto'
    alias egrep='egrep --color=auto'
fi

# some more ls aliases
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'

# Add an "alert" alias for long running commands.  Use like so:
#   sleep 10; alert
alias alert='notify-send --urgency=low -i "$([ $? = 0 ] && echo terminal || echo error)" "$(history|tail -n1|sed -e '\''s/^\s*[0-9]\+\s*//;s/[;&|]\s*alert$//'\'')"'

# Alias definitions.
# You may want to put all your additions into a separate file like
# ~/.bash_aliases, instead of adding them here directly.
# See /usr/share/doc/bash-doc/examples in the bash-doc package.

if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
fi

# enable programmable completion features (you don't need to enable
# this, if it's already enabled in /etc/bash.bashrc and /etc/profile
# sources /etc/bash.bashrc).
if ! shopt -oq posix; then
  if [ -f /usr/share/bash-completion/bash_completion ]; then
    . /usr/share/bash-completion/bash_completion
  elif [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
  fi
fi


function wgets()
{
  local H='--header'
  wget $H='Accept-Language: en-us,en;q=0.5' $H='Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' $H='Connection: keep-alive' -U 'Mozilla/5.0 (Windows NT 5.1; rv:10.0.2) Gecko/20100101 Firefox/10.0.2' --referer=http://www.askapache.com/ "$@";
}


# alias kdmnest="Xephyr -query localhost -screen 800x600 :1"
# #alias ffmpeg="/home/shared/ffmpeg-01-28-13/./ffmpeg"
# #alias ffprobe="~/ffmpeg-02-15-12/./ffprobe"
# #alias peacecalc="a=$1 ; b=$2 ; c=$3 ; echo \"scale=3 ; $a $b $c\" | bc" 
# alias vrec="/home/shared/ffmpeg-01-28-13/./ffmpeg -s video_size  $(xrandr  | awk '/, current /{print $8}')x$(xrandr  | awk '/, current /{gsub(/\,/,"");print $10}') -f x11grab -r 25  -i :0.0  -vcodec  ljpeg -threads 2 -y  $HOME/output.avi"
# alias vrecb="/home/shared/ffmpeg-01-28-13/./ffmpeg -s $(xrandr  | awk '/, current /{print $8}')x$(xrandr  | awk '/, current /{gsub(/\,/,"");print $10}') -f x11grab -r 30  -i :0.0  -vcodec  ljpeg -threads 2 -y  $HOME/output.avi"
# alias tffm="/home/shared/ffmpeg-05-22-12/./ffmpeg"
# alias youconvert="/home/shared/ffmpeg-01-28-13/./ffmpeg -i  \"$HOME/output.avi\" -sameq -threads 2 $HOME/output.webm"
# alias screncast="arecord -f cd -t raw | oggenc - -r -o $HOME/out_audio.ogg  & ffmpeg -f x11grab  -s $(xrandr  | awk '/, current /{ gsub(/\,/,""); print $8"x"$10}') -i :0.0  -r 25 -threads $(awk '/processor/{print}' /proc/cpuinfo | wc -l) -y -vcodec ljpeg $HOME/out_video.avi"
# alias screncastb=" ffmpeg -f x11grab  -s $(xrandr  | awk '/, current /{ gsub(/\,/,""); print $8"x"$10}') -i :0.0  -r 25 -threads $(awk '/processor/{print}' /proc/cpuinfo | wc -l) -y -vcodec libtheora  -b 2000k  $HOME/out_video.ogv"
# alias ascreencast="arecord -f cd -t raw | oggenc - -r -o $HOME/out_audio.ogg"
# alias ascreencast="arecord -f cd -t raw | oggenc - -r -o $HOME/out_audio.ogg"
# alias screncast_stop="pkill --signal TERM oggenc & pkill --signal TERM ffmpeg "
# 



alias u="sudo apt-get update"
alias g="sudo apt-get upgrade"
alias uf="echo sudo apt-get upgrade -f  && sudo apt-get upgrade -f"
alias gf="sudo apt-get dist-upgrade -f"
alias i="sudo apt-get install"
alias ai="apt-cache show"
alias r="sudo apt-get remove "
alias p="sudo apt-get --purge remove "
alias s="apt-cache search "
alias a="sudo apt-get autoremove"
alias h="echo \"
u==>sudo apt-get update
g==>sudo apt-get upgrade
uf==>sudo apt-get upgrade -f
gf==>sudo apt-get dist-upgrade -f
i==>sudo apt-get install
ai==>apt-cache show  
r==>sudo apt-get remove 
p==>sudo apt-get --purge remove 
s==>apt-cache search 
a==>sudo apt-get autoremove\"
"
 peacefun()
{
	cur=`_get_cword`
	COMPREPLY=( $( apt-cache pkgnames $cur 2> /dev/null ) )
	return 0
	
} 

complete -F peacefun $filenames ai 
complete -F peacefun $filenames i 
complete -F peacefun $filenames s 
complete -F peacefun $filenames p 
complete -F peacefun $filenames r

conferencepulse()
{
#license gpl 
#copyright nowardev@gmail.com


i=0
while read line ;do
audiocard[$i]="$line"
i=$(($i+1))
done< <( grep capture /proc/asound/pcm | cut -b 2)

i=0
while read line ;do
audionamecard[$i]="$line"
i=$(($i+1))
done< <(grep capture /proc/asound/pcm | cut -d : -f 2)

 
if [[ ${#audiocard[@]} >1 ]]; then 
echo $"I have detected more than 1 microphone in your computer please select what you want use (0-$((${#audiocard[@]}-1)))
"

 
 
i=0
for (( i=0 ; i <${#audiocard[@]};i++)); do 
    echo $"Choose $i for this audio card:  ${audionamecard[$i]} "

done

 
read   
 
    if [[ -z "$REPLY" ]];then
        microphone="${audiocard[0]}"
    else
    echo $"MicroPhone selected "${audionamecard["$REPLY"]}"  "${audiocard["$REPLY"]}""
       microphone="${audiocard["$REPLY"]}"
    fi
    
REPLY=""
else
 microphone="${audiocard[0]}"
 fi 

 echo "seren -n $USER -d pulse -D plughw:$microphone"
	 seren -n $USER -d pulse -D plughw:$microphone


}
# alias parolepulse="parolefunction "
alias parole="/home/shared/git/parole-conference-010alpha17/./parole-conference -n $USER  -D plughw:2"

alias sourcehome="source ~/.bashrc"
alias openbashrc="kde-open ~/.bashrc"
alias alsamixer="alsamixer -V all"
# alias hdmirec=
screencast() {
i=0
file=/home/shared/Screencast/test-$i.mp4 
while [[  -e $file ]] 
do 
i=$((i+1)) 
file=/home/shared/Screencast/test-$i.mp4 
done

/home/shared/git/ffmpeg-05-23-13/./ffmpeg -f alsa -ac 1 -ar 48000 -i hw:2,0  -s 1920x1080  -f x11grab -i :0  -r 30  -vcodec libx264 $file
 
}

hdmirec() {
i=0
file=/home/shared/Screencast/test-$i.mp4 
while [[  -e $file ]] 
do 
i=$((i+1)) 
file=/home/shared/Screencast/test-$i.mp4 
done

/home/shared/git/ffmpeg-05-23-13/./ffmpeg -f alsa -ac 2 -ar 48000 -i hw:0,0  -s 1920x1080  -f x11grab -i :0  -r 30  -vcodec libx264 $file

echo $file
}

hdmirecmute() {
i=0
file=/home/shared/Screencast/test-$i.mp4 
while [[  -e $file ]] 
do 
i=$((i+1)) 
file=/home/shared/Screencast/test-$i.mp4 
done

/home/shared/git/ffmpeg-05-23-13/./ffmpeg -s 1920x1080  -f x11grab -i :0  -r 30  -vcodec libx264 $file
 
 echo $file
}

playscreencast(){
ffplay $file
}

# # export SDL_VIDEO_X11_DGAMOUSE=0
# 
alias one="dh_make -s -c gpl"
alias two="debuild -uc -us --source-option=--include-binaries --source-option=-isession"
alias three="cd .. ; sudo pbuilder build"
alias four="debuild -k4E33C31A -S -sa"
alias five="dput ppa:nowardev/ppa  *source.changes"
 
extract () {
     if [ -f $1 ] ; then
         case $1 in
             *.tar.bz2)   tar xjf $1        ;;
             *.tar.gz)    tar xzf $1     ;;
             *.bz2)       bunzip2 $1       ;;
             *.rar)       rar x $1     ;;
             *.gz)        gunzip $1     ;;
             *.tar)       tar xf $1        ;;
             *.tbz2)      tar xjf $1      ;;
             *.tgz)       tar xzf $1       ;;
             *.zip)       unzip $1     ;;
             *.Z)         uncompress $1  ;;
             *.7z)        7z x $1    ;;
             *)           echo "'$1' cannot be extracted via extract()" ;;
         esac
     else
         echo "'$1' is not a valid file"
     fi
}