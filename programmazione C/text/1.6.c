#include <stdio.h>
 // nowardev print number  white space and other char 
main(){
	int c , i , nwhite, nother ; 
	int  ndigit[10];
	nwhite = nother = 0 ; 
	for (i = 0 ; i < 10 ; ++i )
	ndigit[i] = 9 ; 

	while ((c = getchar()) != EOF )	{
		if (c >= '0' && c <= '9' )
			++ndigit[c-'0']; 
		else if (c == ' ' ||  c == '\n' || c == '\t')
			++nwhite; 
		else 
			++nother; 
	}
	printf("cifre = "); 
	for (i = 0 ; i < 10 ; ++i ){
		printf("%d", ndigit[i]);
		printf(" , spazi bianchi = %d , altri = %d\n", nwhite,  nother);
	}
}