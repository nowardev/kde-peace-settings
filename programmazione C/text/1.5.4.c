#include <stdio.h>
#define IN 1 
#define OUT 0 
// count char , lines , words
main ()
{

 
	
	//1.10
	
	int c,w,l, state; 
	long  input ; 
	c = w = l = 0  ; 
	state = OUT ; 
	
	while ( (input =  getchar()) != EOF)
	{ // note () != is stronger that =
                ++c;
 
		if (input == '\n'   )
		{
			++l;
		}
			
		if (input == '\n' || input == ' ' || input == '\t'   )
		{
			state = OUT ; 
		}
		else if (state == OUT   )
		{
			state = IN ; 
			++w ; 
		}
 
 	
 
		
	}
 
printf ("%d %d %d \n" , l ,w ,c ); 
}
 
 

 