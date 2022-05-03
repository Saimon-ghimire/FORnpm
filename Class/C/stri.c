#include<stdio.h>
char* funct();
void main(){
    char* x=funct(1);
    printf("%s",x);
}
char* funct(){
    return("\nL\n");
}