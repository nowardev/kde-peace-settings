#include <stdio.h>
//number of new line  by nowardev
main ()
{

 
	
	//cicle while 	
	long a, b ,c ; 
	c = 0 ; 
	//1.6
	while ( a=((b =  getchar()) != EOF)) { // note () != is stronger that =
		if (b == '\n' )
			 
		c++; 	
		printf("value : %d   \n ", b );	 // 1d stand for long decimal 
		
	}
	printf("\nthis the number of new lines : %d \n" , c );
	
// 	printf("\nfoor loop \n"); 
// 	//for cicle 
// 	float e ; 
// 	
// 	for (e = 0 ;  getchar() != EOF ;  ++e){
// 		
// 	}
// 	printf ("number of total char : %.0f\n", e ); 

}
 
 