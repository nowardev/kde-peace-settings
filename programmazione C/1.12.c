
#include <stdio.h>
#define TRUE 1 
#define FALSE 0 
int main ()
{
	int  input , printnewline; 
	printnewline = FALSE ; 
	
	while ( (input =  getchar()) != EOF){ 
		if (input != '\n' && input != ' ' && input != '\t'   )
		{
			putchar(input);
			printnewline = TRUE; 
		}
		else if (printnewline )
		{
			
			printf("\n"); 
			printnewline = FALSE ; 

		}
 
	}
 
 
}
/* THIS WILL PRINT A NEW LINE EVEN IF THERE IS NO WORDS SO IT'S NOT GOOD'

#include <stdio.h>
#define TRUE 1 
#define FALSE 0 
//print ech word for line 
main ()
{

 
	
	//1.12
	
 	int   state; 
	long  input; 
 
	state = FALSE ; 
	
	while ( (input =  getchar()) != EOF)
	{ // note () != is stronger that =
 
		
			
		if (input == '\n' || input == ' ' || input == '\t'   )
		{
			printf("\n"); 
			
		}
		else 
		{
			
			putchar(input ); 

		}
 
	}
 
 
}
  */