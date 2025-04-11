import java.util.Scanner;
// Find the word according to input.
class Search{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the word to search: ");
        String word = sc.nextLine();
        String str = "Hello, this is a simple Java program to demonstrate string searching.";
        if(str.contains(word)){
            System.out.println("The word '" + word + "' is found in the string.");
        } else {
            System.out.println("The word '" + word + "' is not found in the string.");
        }
    }
}
