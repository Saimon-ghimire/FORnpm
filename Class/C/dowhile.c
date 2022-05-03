#include<conio.h>
#include<stdio.h>
void main(){
    printf("\n");
    int a,sum=0;
    do{
        printf("%d ",a);
        sum+=a;
        a++;
    } while(a<=100);
    printf("\n The sum is:\t %d",sum);
    printf("\n");
}