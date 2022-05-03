/*A cloth shop during festival seasons offers a discount of 10% on all purchases made in that shop. The bill
amount for a customer is given as Rs. 1000.5. Write a program to calculate and display the discount
amount and the amount after the discount.*/

#include<stdio.h>
#include<string.h>
#include<conio.h>
#include<stdlib.h>
#include<math.h>

// no1
// void main(){
//     float amt, dis, total;
//     amt=1000.5;
//     dis=(10/100*amt);
//     total=amt-dis;
//     printf("The discount amount is %.2f and the final price is %.2f",dis, total);
//     getch();
// }


// sort country name
// void main(){
//    char name[7][50], tmp[50];
//    int i;
//    for (i=0;i<7;i++){
//        printf("Name of country: ");
//        scanf("%s",&name[i]);
//    }
//    for (i=0;i<7;i++){
//        for (int j=i+1;j<7;j++){
//            if (strcmp(name[i],name[j])>0){
//           strcpy(tmp,name[i]);
//            strcpy(name[i],name[j]);
//            strcpy(name[j],tmp);
//            }
//                     }
//      }
//      for (i=0;i<7;i++){
//          printf("%s\n",name[i]);
//      }

// }


// multiploication table
// void main(){
//     int num, count=1;
//     printf("Number: ");
//     scanf("%d",&num);
//     do{
//         printf("%d x %d = %d\n",num,count,num*count);
//         count++;
//     } while (count<=10);
// }


// prime composite
// void main(){
//     int num, count=0;
//     printf("Number: ");
//     scanf("%d",&num);
//     if (num>1){
//     for (int i=2;i<(num/2);i++){
//         if (num%i==0){
//             count++;
//             break;
//         }
//         else{
//             continue;
//         }
//     }
//     if (count==0){
//         printf("Prime");
//     }
//     else{
//         printf("compoosite");
//     }}
//     else{
//         printf("Invalid input");
//     }

// }


// pattern a
// void main(){
//     int i,j;
//     for (i=1;i<=5;i++){
//         for ( j = 5; j>=i;j--){
//             printf("%d\t",j);
//         }
//         printf("\n");
        
//     }

// }


//pattern b
// void main(){
//     int i,j;
//     for (i=1;i<=5;i++){
//         for (j=1;j<=i;j++){
//             printf("%d\t",j);
//         }
//         printf("\n");
//     }
// }

//hcf
// void main(){
//     int i,j,a;
//     int hcf;
//     i=24;
//     j=36;
//     int min = (i<j) ? i : j;
//     for (a=2;a<=min;a++){
//         if (i%a==0 && j%a==0){
//             hcf=a;
//         }

//     }
//     printf("The hcf is : %d",hcf);
// }


// 4 5 9 14………………20 th terms.
// void main(){
//     int i,j,tmp;
//     i=1;
//     j=4;
//     int c;
//     for (c=0;c<20;c++){
//         printf("%d\t",j);
//         int temp=j;
//         j+=i;
//         i=temp;
//     }
// }


// palindrome
// void main(){
//     int i,rem,num,iNum;
//     i=1487;
//     iNum=i;
//     while (i!=0){
//         rem=i%10;
//         num=num*10 + rem;
//         i/=10;
//     }
//     if (num==iNum){
//     printf("palindrone");
//     }
//     else{
//         printf("not palindrome");
//     }

// }


// largest among n
void main(){
   int i,c;
     printf("How many: ");
     scanf("%d",&c);
     int arr[c];
     for (i=0;i<c;i++){
         printf("\nNumber: ");
         scanf("%d",&arr[i]);
         if (arr[i]>arr[0]){
             arr[0]=arr[i];
         }
     }
     printf("greatedt: %d",arr[0]);
}


// matrix sum
// void main(){
//     int j,i,row,col;
//     printf("rows: ");
//     scanf("%d",&row);
//     printf("cols: ");
//     scanf("%d",&col);
//     int m1[row][col],m2[row][col],sum[row][col];
//     printf("For matrix 1: \n");
//     for (i=0;i<row;i++){
//         for (j=0;j<col;j++){
//             printf("a%d%d: ",i+1,j+1);
//             scanf("%d",&m1[i][j]);

//         }
//     }
//     system("cls");
//     printf("For matrix 2: \n");
//     for (i=0;i<row;i++){
//         for (j=0;j<col;j++){
//             printf("a%d%d: ",i+1,j+1);
//             scanf("%d",&m2[i][j]);
//             sum[i][j]=m1[i][j]+m2[i][j];

//         }
//     }
//     for (i=0;i<row;i++){
//         for (j=0;j<col;j++){
//             printf("%d\t",sum[i][j]);
//         }
//         printf("\n");
//     }

// }

//reverse a name
// void main(){
//     char newName[30],name[30],tmp[1];
//     int i,c;
//     printf("Name: ");
//     scanf("%s",name);
//     c=strlen(name);
//     for (i=c-1;i>=0;i--){
//         printf("%c",name[i]);
//     }
// }

//sort names
// struct names{
//     char name[30];
// };
// void main(){
//     char tmp[30];
//     int i,num,j;
//     printf("How many names: ");
//     scanf("%d",&num);
//     struct names n[num];
//     for (i=0;i<num;i++){
//         printf("name: ");
//         scanf("%s",&n[i].name);
//     }
//     for (i=0;i<num;i++){
//         for (j=i;j<num;j++){
//             if (strcmp(n[i].name,n[j].name)>0){
//                 strcpy(tmp,n[i].name);
//                 n[i]=n[j];
//                 strcpy(n[j].name,tmp);
//             }
//         }
//     }
//     for (i=0;i<num;i++){
//         printf("%s\n",n[i].name);
//     }


// }


// 7 2 9 11 20......
// fibonacci not done
// int fibo (int a, int b);
// void main(){
//     int a=12, b=-5;
//     fibo(a,b);
// }
// int fibo (int a, int b){
//     for (int i=0;i<20;i++){
//         int c=a+b;
//         printf("%d\t",c);
//         a=b;
//         b=c;
//     }
// }

// n numbe{{r seies sum
//prototype
// void main(){
//     int n;
//     printf("n: ");
//     scanf("%d",&n);
//     suma(n);
//     }
// void suma (int n){
//     int i,result=0;
//     for (i=0;i<=n;i++){
//         result+=(i*i);
//     }
//     printf("%d",result);
// }

//receives 5 integers
// float avg(int arr[]);
// void main(){
//     int arr[5];
//     float res;
//     for (int i=0;i<5;i++){
//         printf("\nNum: ");
//         scanf("%d",&arr[i]);
//     }
//     res = avg(arr);
//     printf("The mean is : %.2f",res);
// }
// float avg(int arr[]){
//     float sum;
//     for (int i=0;i<5;i++){
//         sum+=arr[i];
//     }
//     float ret=sum/5;
//     return(ret);
// }



// sum of n using recursion
// void main(){
//     int n;
//     printf("n: ");
//     scanf("%d",&n);
//     int res= SoN(n);
//     printf("the sum is : %d",res);
// }
// int SoN(int n){
//     if (n!=0){
//         return n+SoN(n-1);
//     }
//     else{
//         return n;
//     }

// }


// armstrong using recursion
// int arm (int num ,int dig);
// void main(){
//     int num=407;
//     int tmp=num;
//     int dig=0;
//     while (tmp!=0){
//         tmp/=10;
//         dig++;
//     }
//     int result=arm(num,dig);
//     if (result==num){
//         printf("armstrong");
//     }
//     else{
//         printf("not armstrong");
//     }
// }
// int arm (int num, int dig){
//     if (num!=0){
//         //use pow below
//         return ((num%10)*(num%10)*(num%10)) + arm(num/10,dig) ;
//     }
//     else{
//         return num;
//     }

// }


//largest among 10
// int lrg(int arr[]);
// void main(){
//      int arr[10];
//      int res;
//      for (int i=0;i<10;i++){
//          printf("\nNum: ");
//          scanf("%d",&arr[i]);
//      }
//      res = lrg(arr);
//      printf("The larest is : %d",res);
//  }
// int lrg(int arr[]){
//     int i=0;
//     for (i=0;i<10;i++){
//         if (arr[i]>arr[0]){
//             arr[0]=arr[i];
//         }
//     }
//     return(arr[0]);
//  }


//sort 5 in ascending
// void  sort(int arr[]);
// void main(){
//     int arr[5],res[5];
//     for (int i=0;i<5;i++){
//         printf("\nNum: ");
//         scanf("%d",&arr[i]);
//     }
//     sort(arr);
// }
// void sort(int arr[]){
//     for (int i=0;i<5;i++){
//         for (int j=i;j<5;j++){
//             if(arr[i]<arr[j]){
//                 int tmp=arr[i];
//                 arr[i]=arr[j];
//                 arr[j]=tmp;
//             }
//         }
//     }
//     for (int i=0;i<5;i++){
//         printf("%d\n",arr[i]);
//     }
   
// }



//bin to dec
// void convert(int bin);
// void main(){
//     int bin;
//     printf("Number in binary: ");
//     scanf("%d",&bin);
//     convert(bin);
// }
// void convert(int bin){
//     int dec=0, c=0;
//     while (bin!=0){
//         int rem=bin%10;
//         dec+=(rem * pow(2,c));
//         c++;
//         bin/=10;
//     }
//     printf("The decimal is : %d",dec);
// }

//factorial using recursion
// int fact(int n);
// void main(){
//     int n;
//     printf("Number: ");
//     scanf("%d",&n);
//     int res=fact(n);
//     printf("the factorial is: %d",res);
// }
// int fact (int n){
//     if (n==0 || n==1){
//         return 1;
//     }
//     else{
//         return(n*fact(n-1));
//     }
// }