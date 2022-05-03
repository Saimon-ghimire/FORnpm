//0 1 1 2 3 5 8 13 21 34
#include<stdio.h>
int a=0,b=1,c=0;
void main(){
    int n;
    n=10;
    fibo(n);
}
int fibo (int n){
    if (n==0){
        return(0);
    }
    else{
        printf("%d\t",c);
        c =a+b;
        a=b;
        b=c;
        fibo(n-1);
    }
}