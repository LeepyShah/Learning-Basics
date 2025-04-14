// Write a java program to calculate the permutation and combination of a 2
// numbers
import java.util.*;
class Main{
     public static int factorial(int n) {
        int fact = 1;
        for(int i = 2; i <= n; i++) {
            fact *= i;
        }
        return fact;
    }

    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter 1st number:");
        int n=sc.nextInt();
        System.out.print("Enter 2nd number:");
        int r=sc.nextInt();
        if (r > n || n < 0 || r < 0) {
            System.out.println("Invalid input. Ensure that n ≥ r and both are non-negative.");
        }
        else {
            int nPr = factorial(n) / factorial(n - r);
            int nCr = factorial(n) / (factorial(r) * factorial(n - r));

            System.out.println("Permutation (nPr) = " + nPr);
            System.out.println("Combination (nCr) = " + nCr);
        }


    }
}