import java.util.Scanner;
class Main{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter value of n:");
        int n=sc.nextInt();
        for (int i = 0; i <n; i++) {
            for(int j=0;j<n-i;j++){
                System.out.print(" ");
            }
            for(int j=0;j<2*i+1;j++){
              if(j%2==0){
                System.out.print(".");
              }
              else{
                System.out.print(i);
              }
            }
            System.out.println();
        }
    }
}