#include<stdio.h>
int mtocm(int);
int cmtomm(int);
void main(){
    int inp,result;
    printf("a number: ");
    scanf("%d",&inp);
   // int cm= mtocm(m);
    result= cmtomm(mtocm(inp));
    printf("%d",result);
}
int mtocm(int inp){
    return(inp*100);
}
int cmtomm(int inp){
    return(inp*10);
}