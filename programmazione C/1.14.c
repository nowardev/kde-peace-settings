// nowardev print number  white space and other char 
 
#include <stdio.h>
main(){
	int i, c ;
	int ndigit[128]; 
	
	for (i = 0 ; i <= 127 ; ++i ){
	 ndigit[i] = 0;
 
	}
	
	while ( (c =  getchar()) != EOF)	{
 
			for (i = 0 ; i <=127 ; ++i ){
				if (i == c ){
					++ndigit[i]; 
				}

			}
	}
	for (i = 0 ; i <= 127 ; ++i ){
		printf("%c frequency=  %d \n", i,  ndigit[i] );
		}
}