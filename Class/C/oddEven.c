#include<stdio.h>
char* oddEven(int);
void main(){
    int num;
    char* output;
    printf("\nEnter a number: ");
    scanf("%d",&num);
    output=oddEven(num);
    printf("The number is %s\n",output);
}
char* oddEven(int num){
    if (num%2==0){
        return("Even");
    }
    else{
        return("Odd");
    }
}