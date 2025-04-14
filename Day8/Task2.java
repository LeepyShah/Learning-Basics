// Write a program to sort the given list of characters in alphabetical order. ()
import java.util.Arrays;
class Main{
    static void display(char[] charArray){
        for (char ch : charArray) {
            System.out.print(ch + " ");
        }
    }
    public static void main(String args[]){
        char[] charArray = {'v', 'd', 'c', 'b', 's','a'};
        // Arrays.sort(charArray);
        // System.out.print("Sorted characters(using inbuilt function): ");
        // Main.display(charArray);
          
        //   Bubble Sorting
            for (int i = 0; i < charArray.length - 1; i++) {
                System.out.print(i);
            for (int j = 0; j < charArray.length - i - 1; j++) {
                System.out.print(charArray[j]);
                if (charArray[j] > charArray[j + 1]) {
                    char temp = charArray[j];
                    charArray[j] = charArray[j + 1];
                    charArray[j + 1] = temp;
                }
            }
              Main.display(charArray);
              System.out.println();
        }
        System.out.print("Sorted characters(without inbuilt function): ");
        Main.display(charArray);
}
}