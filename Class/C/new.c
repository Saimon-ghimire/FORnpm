/*WAP to create a file “employee.txt” and store name, salary, address of 10 employees 
and display the records from the file. Use structure.  */
#include<stdio.h>
#include<stdlib.h>
struct employee{
    char name[50];
    int sal;
    char add[50];
}emps;
void main(){
    FILE *fhand;
    fhand=fopen("employye.txt","w+");
    for (int i=0;i<10;i++){
        printf("Name: ");
        scanf("%s",&emps.name);
        printf("Address: ");
        scanf("%s",&emps.add);
        printf("Age: ");
        scanf("%d",&emps.sal);
        system("CLS");
        fwrite(&emps,sizeof(emps),1,fhand);
    }
    rewind(fhand);
    for (int i=0;i<10;i++){
            fread(&emps,sizeof(emps),1,fhand);
            printf("\nName: %s\tAddress: %s\tSalary: %d",emps.name,emps.add,emps.sal);
    }
}