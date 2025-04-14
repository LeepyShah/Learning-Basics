// 16. "Create a function that accepts two arguments:the number of dice rolled, and the
// outcome of the roll. The function returns the number of possible combinations
// that could produce that outcome. The number of dice can vary from 1 to 6.
// Ex.
// User Input: 3 and 4.
// Output: 3
// // 1 + 1 + 2, 1 + 2 + 1, 2 + 1 + 1
// User Input: 6 and 20.
// Output: 4221
// import  java.util.*;
// class Main{
//     public static void main(String[] args) {
//         Scanner sc=new Scanner(System.in);
//         System.out.print("Enter 1st number:");
//         int n1=sc.nextInt();
//         System.out.print("Enter 2nd number:");
//         int n2=sc.nextInt();
//         int count=0;
//         int sum=0;
//         for(int i=0;i<n1;i++)
//         {   for(int j=1;j<=6;j++)
//             {  while(j<=n2){
//                 System.out.println("j :"+j);
//                 System.out.println("sum:"+sum);
//                 sum=sum+j;
//                 if(sum<=n2){
//                     // sum=sum+j;
//                     System.out.println("new  sum:"+sum);
//                     if(sum==n2){
//                         count++;
//                         System.out.println("count:"+count);
//                     }
//                 }
//                 else{
//                     sum-=j;
//                     break;
//                 }
//             }
                
//             }
//         }
//     }
// }
import java.util.*;

public class Main {
    static Map<String, Integer> memo = new HashMap<>();

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of dice: ");
        int dice = sc.nextInt();
        System.out.print("Enter target sum: ");
        int target = sc.nextInt();

        int result = countWays(dice, target);
        System.out.println("Number of combinations: " + result);
    }

    static int countWays(int dice, int target) {
        return helper(dice, target);
    }

    static int helper(int dice, int target) {
        if (dice == 0) {
            return target == 0 ? 1 : 0;
        }

        if (target < 0) return 0;

        String key = dice + "," + target;
        if (memo.containsKey(key)) return memo.get(key);

        int ways = 0;
        for (int i = 1; i <= 6; i++) {
            ways += helper(dice - 1, target - i);
        }

        memo.put(key, ways);
        return ways;
    }
}

