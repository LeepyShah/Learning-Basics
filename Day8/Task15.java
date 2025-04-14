// Write a program to check whether the input number is ArmStrong number or not.
import java.util.*;
class Main{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter number: ");
        int n=sc.nextInt();

        int n1=n;
        int d=0;
        int sum=0;
        int digit=String.valueOf(n).length();
        while(n!=0){
          d=n%10;
          sum=sum+(int)Math.pow(d,digit);
          n=n/10;   
        }
        if (sum == n1) {
            System.out.println(n1 + " is an Armstrong number.");
        } else {
            System.out.println(n1 + " is not an Armstrong number.");
        }
    }
}