#include <stdio.h>
//number of new line  by nowardev
main ()
{

 
	
	//1.8
	long nl, input, s ,t ; 
	nl = s = t = 0  ; 
	
	
	while ( (input =  getchar()) != EOF) { // note () != is stronger that =
		
		if (input == '\t'){
		++t; 
		}
		else if (input == ' '){
		++s; 
 
		}
		else if (input == '\n' ){
		++nl; 
		}
 
		
	}
	printf("\nthis the number of new lines : %d \n" , nl );
	printf("\nthis the number of blank spaces : %d \n" , s );
	printf("\nthis the number of tabs : %d \n" , t );
 

}
 
 