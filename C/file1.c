#include <stdio.h>
#include <conio.h>
void main()
{
    int a, b, c;
    printf("Enter two numbers");
    scanf("%d %d", &a, &b);
    if (a > b)
    {
        c = a;
    }
    else
    {
        c = b;
    }
    printf("%d is greater", c);
}
