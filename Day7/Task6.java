import java.util.Scanner;
// ."Reverse Decimal Number.
// Ex. Input : 123.45
// Ouput : 453.21"

class ReverseNumber {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number : ");
        float input =  sc.nextFloat();
        String str = String.valueOf(input);
        String[] parts = str.split("\\.");
        String integerPart = parts[0];
        String decimalPart = parts[1];  
        String reversedIntegerPart = new StringBuilder(integerPart).reverse().toString();
        String reversedDecimalPart = new StringBuilder(decimalPart).reverse().toString();                   
        String reversedNumber = reversedDecimalPart + "." + reversedIntegerPart;
        System.out.println("Reversed number is : " + reversedNumber);
    }
}
