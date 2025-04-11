import java.util.Scanner;

class FindWord {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number of word to search: ");
        int input = sc.nextInt();
        String str = "Hello my name is Leepy and I am currently learning Java programming.";
        String[] words = str.split(" ");
        System.out.println("String is : "+words[input-1]);


    }
}
