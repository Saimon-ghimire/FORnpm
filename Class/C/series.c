#include<conio.h>
#include<stdio.h>
void main()
{
    int num1=0,num2=1,num3=num1+num2;
    for (int i=0;i<10;i++)
    {
        printf("%d ",num3);
        num3=num1+num2;
        num1=num2;
        num2=num3;
    }
}