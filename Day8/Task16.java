// 16. "Create a function that accepts two arguments:the number of dice rolled, and the
// outcome of the roll. The function returns the number of possible combinations
// that could produce that outcome. The number of dice can vary from 1 to 6.
// Ex.
// User Input: 3 and 4.
// Output: 3
// // 1 + 1 + 2, 1 + 2 + 1, 2 + 1 + 1
// User Input: 6 and 20.
// Output: 4221
import  java.util.*;
class Main{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter 1st number:");
        int n1=sc.nextInt();
        System.out.print("Enter 2nd number:");
        int n2=sc.nextInt();
        int count=0;
        int sum=0;
        for(int i=0;i<n1;i++)
        {   
            for(int j=1;j<=6;j++)
            {
                System.out.println("j :"+j);
                System.out.println("sum:"+sum);
                sum=sum+j;
                if(sum<=n2){
                    // sum=sum+j;
                    System.out.println("new  sum:"+sum);
                    if(sum==n2){
                        count++;
                        System.out.println("count:"+count);
                    }
                }
                else{
                    sum-=j;
                    break;
                }
            }
        }
    }
}
