#include<stdio.h>
#include<conio.h>
void main(){
    int nums[5],greatest;
    for (int i=0;i<5;i++){
        printf("Number %d: ",i+1);
        scanf("%d",&nums[i]);
        if (nums[i]>nums[0]){
            nums[0]=nums[i];
        }
    }
    // greatest=nums[0];
    // for (int i=1;i<5;i++){
    //     if (nums[i]>greatest){
    //         greatest=nums[i];
    //     }
    // }
    printf("The greatest is: %d\n",nums[0]);
}