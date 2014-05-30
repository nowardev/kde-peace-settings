#include <stdio.h>
//getchar by nowardev
main ()
{

// 	int c ; 
// 	c = getchar(); 
// 	while (c != EOF ){
// 		putchar(c);
// 		c = getchar(c); 
// 		printf("%d \n", c ); 
// 	}
	
	//cicle while 	
	int b , a; 
	
	//1.6
	while ( a=((b =  getchar()) != EOF)) { // note () != is stronger that =
// 		putchar(b); 
		printf(" %d ",  b );	// print char and the value on decimal 
					// for example a = 97 \n  that stand for new line has value 10
		
		printf("this is the value of expression when true (getchar() != EOF) : %d \n",  a );
		
	
		
	}
	// on linux kubuntu you need to type CTRL D TO SEND EOF AND TERMINATE THE PROGRAM 
	printf("this is the value of expression  (getchar() != EOF)  when is not true : %d \n",  a );
	//1.7
	printf("this is the value of   EOF) :%d \n", EOF ); 

// 	printf(" THIS IS WHAT YOU GET  \n" );
// 	printf(" %d \n",  (getchar() != EOF) );
// 	printf(" %d \n",  getchar());
	
	

}
 
 