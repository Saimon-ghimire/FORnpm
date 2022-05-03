// find smallest among n using pointer
#include<stdio.h>
void main(){
    int i,n;
    printf("How many numbers: ");
    scanf("%d",&n);
    int nums[n];
    for (i=0;i<n;i++){
        printf("\nNum: ");
        scanf("%d",&nums[i]);
        if (*nums>*(nums+i)){
            *nums=*(nums+i);
        }
    }
    printf("Smallest is %d",*nums);

}