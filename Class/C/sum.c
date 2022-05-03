#include<stdio.h>
void main(){
    int num,out=0;
    printf("Enter a number: ");
    scanf("%d",&num);
    while (num!=0){
        out+=num%10;
        num/=10;
    }
    printf("The sum is: %d",out);
}