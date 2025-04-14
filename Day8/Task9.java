import  java.util.*;
class Main{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter value of n:");
        int n=sc.nextInt();
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if(j==0 || j==n-1 || i==j || j==n-i-1){
                    System.err.print("*");
                }
                else{
                    System.err.print(" ");
                }
                
            }
            System.err.println("");
        }
    }
}