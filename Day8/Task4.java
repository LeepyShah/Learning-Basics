// Write a program to display the below given structure as a output.
import java.util.*;
class Main{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter value of n:");
        int n=sc.nextInt();
        for(int i=0;i<n;i++){
            for(int j=0;j<i+1;j++){
               if(j==i ||i==n-1 || j==0){
                    System.out.print("*");
                }
                else{
                    System.out.print(" ");
                }
                
                
                
            }
            System.out.println();
        }
    }
}