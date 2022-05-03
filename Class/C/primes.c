#include<stdio.h>

void main(){
    int a,count=0,flag=1;
    for (int i=2;i<=100;i++){
        for (int j=2;j<=i/2;j++){
            if (i%j == 0){
                flag=0;
                break;
            }
            else{
                flag=1;
            }
        }
        if (flag==1){
            printf("%d " ,i);
            count++;
        }
    }
    printf("%d",count);
}