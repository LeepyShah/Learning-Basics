// Write a program to find the Second biggest integer value in the given list of
// values.[98,32,72,94,75,73,92,36,28,34]
import java.util.*;
class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter numbers separated by commas:");
        String input = scanner.nextLine();

        String[] parts = input.split(",");
        List<Integer> numbers = new ArrayList<>();
      
        for (String part : parts) {
            numbers.add(Integer.parseInt(part.trim()));
        }

        System.out.println("You entered: " + numbers);
        int max=numbers.get(0);
        int second_max=numbers.get(0);;
        for(int i=0;i<numbers.size();i++){
            if(numbers.get(i)>max){
                second_max=max;
                max=numbers.get(i);

            }
            
        }
        System.out.print("Second Highest:"+second_max);
    }
}
