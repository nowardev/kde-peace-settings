#include <stdio.h>
//remove double space  by nowardev
main ()
{

 
	
	//1.9
	int i ; 
	long  input ; 
	i =0  ; 
	
	
	while ( (input =  getchar()) != EOF)
	{ // note () != is stronger that =
                
 
		if (input == ' ' && i == 1 )
		{
			putchar(input); // if the first char =  space print it 
			 ++i ; 
		}
			
		else if (input == ' ' && i == 2 )
		{//if the next char it's again a space then do nothing 
		}
		else 
		{
			putchar(input); // if the next char it's a char  then the next char can be a space so i must be = 1 again'
			i = 1 ; 
		}
 	
 
		
	}
 

}
 
 