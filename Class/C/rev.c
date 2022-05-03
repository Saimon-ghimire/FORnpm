#include<stdio.h>
void reverse(int);
void main(){
    int num;
    printf("Enter a number: ");
    scanf("%d",&num);
    reverse(num);
}
void reverse(int num){
    int out=0,rem;
    while (num!=0){
        rem=num%10;
        out=(out*10)+rem;
        num/=10;
    }
    printf("The reverse is : %d",out);
}