#include<stdio.h>
void main(){
    int a[100],c=0;
    int yn;
    for (int i=0;i<100;i++){
        c++;
        printf("\nNum: ");
        scanf("%d",&a[i]);
        printf("\ncontinue:");
        scanf("%d",&yn);
        if (yn==0){
            continue;
        }
        else{
            break;
        }
    }
    printf("\n\n\n");
    for (int i=0;i<c;i++){
        printf("%d ",a[i]);
    }

}