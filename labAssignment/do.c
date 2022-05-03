#include<stdio.h>
#include<conio.h>
#include<stdlib.h>

/*WAP to create a file “student.txt” to store the name, roll number, and address of five
students. Also read all the records from file and display it to the user.*/
struct stud{
    char name[50];
    int roll;
    char add[50];
}s1;
void main(){
    FILE *fhand;
    fhand=fopen("student.txt","w+");
    for (int i=0;i<3;i++){
    printf("Name: ");
    scanf("%s",s1.name);
    printf("Roll: ");
    scanf("%d",&s1.roll);
    printf("Address: ");
    scanf("%s",s1.add);
    fwrite(&s1,sizeof(s1),1,fhand);
    }
    // for (int i=0;i<5;i++){
    while((fscanf(fhand,"%s%d%s",s1.name,&s1.roll,s1.add))!=EOF){
        printf("Name=%s",s1.name);
    }
    fclose(fhand);

    

}