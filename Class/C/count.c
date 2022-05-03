#include<stdio.h>
void main(){
    int num,count=0;
    printf("Enter a number: ");
    scanf("%d",&num);
    while (num!=0){
        count++;
        num/=10;
    }
    printf("\nThe number o digits is: %d",count);
}