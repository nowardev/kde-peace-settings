#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
PS1='[\u@\h \W]\$ '
alias u="sudo pacman -Syy"
 alias g="sudo pacman -Syu"
#  alias i="sudo pacman -Sy"
 alias pi="pacman -Qii"
 alias r="sudo pacman -Rs "
 alias p="sudo pacman -Rn"
 alias s="pacman -Ss"
 alias c="sudo pacman -Sc"
 alias h="echo \"
 u=sudo pacman -Syy
 g=sudo pacman -Syu
 i=sudo pacman -Sy
 pi=pacman -Qii
 r=sudo pacman -Rs
 p=sudo pacman -Rn
 s=pacman -Ss
 c=sudo pacman -Sc\"
 "
 
 alias yu="sudo yaourt -Syy"
 alias yg="sudo pacman -Syu"
#  alias yi="sudo pacman -Sy"
 alias ypi="pacman -Qii"
 alias yr="sudo pacman -Rs "
 alias yp="sudo pacman -Rn"
 alias ys="pacman -Ss"
 alias yc="sudo pacman -Sc"
 alias yh="echo \"
 u=sudo pacman -Syy
 g=sudo pacman -Syu
 i=sudo pacman -Sy
 pi=pacman -Qii
 r=sudo pacman -Rs
 p=sudo pacman -Rn
 s=pacman -Ss
 c=sudo pacman -Sc\"
 "
 peacefun()
 {
 cur=`_get_cword`
 
  COMPREPLY=( $( pacman -Sl | cut -d " " -f 2 | grep ^$cur 2> /dev/null ) )
 
  return 0
}
 peacefunyaourt()
 {
 cur=`_get_cword`
 COMPREPLY=( $( yaourt -Sl 2>&1 | cut -d "/" -f 2 |cut -d " " -f1| grep ^$cur 2> /dev/null ) )
 return 0
}
 complete -F peacefun $filenames pi
 complete -F peacefun $filenames i
 complete -F peacefun $filenames s
 complete -F peacefun $filenames p
 complete -F peacefun $filenames r

 complete -F peacefunyaourt $filenames ypi
 complete -F peacefunyaourt $filenames yi
 complete -F peacefunyaourt $filenames ys
 complete -F peacefunyaourt $filenames yp
 complete -F peacefunyaourt $filenames yr
 
alias adduser="sudo usermod -aG"

# alias parole="/home/shared/git/parole-conference-010alpha17/./parole-conference -n $USER  -D plughw:2"

alias sourcehome="source ~/.bashrc"
alias openbashrc="kde-open ~/.bashrc"
alias alsamixer="alsamixer -V all"
# alias conferencelog="cat /home/archpeace/parole-conference-010alpha17/error.log"

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

	/home/archpeace/parole-conference-010alpha17/./parole-conference -n $USER -d pulse -D plughw:$microphone


}


#yaourt -Ss kdeplasma-applets- | awk '/^aur\/kdeplasma-applets/&&!/git/&&!/svn/ { sub(/^aur\//, ""); print $1 }'
export PATH=/usr/local/sbin:/usr/local/bin:/usr/bin:/usr/bin/core_perl:/home/archpeace/bin