#include<stdio.h>
float aria(float*);
float circum(float);
void main(){
    float radius, area,circ;
    printf("Input the radius of circle: ");
    scanf("%f", &radius);
    area=aria(&radius);
    circ=circum(radius);
    printf("\nArea: %.2f\nCircumference: %.2f\n", area,circ);

}
float aria(float *radius){
    float pi=3.141592;
    return (pi**radius**radius);
}
float circum(float radius){
    float pi=3.141592;
    return (2*pi*radius);
}
