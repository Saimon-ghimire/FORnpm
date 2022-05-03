#include <stdio.h>
struct{
    int price;
    char title[50];
} books[4], ex;
void main(){
    for (int i = 1; i <= 3; i++){
        printf("Name: ");
        scanf("%s", books[i].title);
        printf("Price: ");
        scanf("%d", &books[i].price);
    }
    for (int i = 1; i < 3; i++){
        for (int j = i + 1; j <= 3; j++){
            if (books[i].price > books[j].price){
                ex = books[i];
                books[i] = books[j];
                books[j] = ex;
            }
        }
    }
    for (int i=1;i<=3;i++){
        printf("\n%s -- %d ",books[i].title,books[i].price);
    }
}