// Write a program to display the below given structure as a output.
import java.util.*;
class Main{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter value of n:");
        int n=sc.nextInt();
        
        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                if( i==n/2 || j==n/2 || i==0 && j>=(n/2)+1 || j==n-1 && i>=(n/2)+1 || i==n-1 && j<(n/2)+1 || j==0 && i<(n/2)+1){
                     System.out.print(" * ");
                }
                else{
                     System.out.print("   ");
                }
               
               
                   
            }
            System.out.println();
        }
    }
}