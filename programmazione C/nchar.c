#include <stdio.h>
//getchar by nowardev
main ()
{

 
	
	//cicle while 	
	long a, b ,c ; 
	c = 0 ; 
	//1.6
	while ( a=((b =  getchar()) != EOF)) { // note () != is stronger that =
		c++; 	
		printf("value : %d  number : %1d\n ", b, c );	 // 1d stand for long decimal 
		
	}
	
	
	printf("\nfoor loop \n"); 
	//for cicle 
	float e ; 
	
	for (e = 0 ;  getchar() != EOF ;  ++e){
		
	}
	printf ("number of total char : %.0f\n", e ); 

}
 
 