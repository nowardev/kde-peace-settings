#include <stdio.h>
// 
main ()
{

 
	
	//1.10
	int i ; 
	long  input ; 
	i =0  ; 
	
	
	while ( (input =  getchar()) != EOF)
	{ // note () != is stronger that =
                
 
		if (input == '\t'   )
		{
			printf("\\t"); // if the first char =  space print it 
		}
			
		else if (input == '\\'   )
		{
			printf("\\"); 
		}
		else if (input == '\b'   )
		{
			printf("\\b"); 
		}
		else 
		{
			putchar(input); // if the next char it's a char  then the next char can be a space so i must be = 1 again'
 
		}
 	
 
		
	}
 

}
 
 

 