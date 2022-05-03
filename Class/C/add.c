#include<stdio.h>
int add();
int a,b;
void main(){
    int output;
    printf("Enter two numbers: ");
    scanf("%d%d",&a,&b);
    output=add();
    printf("The sum is: %d\n",output);
}
int add(){
    return (a+b);
}