// Write a program to check if a List of integers contains only odd numbers.
import java.util.*;
class CheckOddNumber {
    public static void main(String args[]){
        List<Integer> llist = new LinkedList<Integer>();
        llist.add(2);
        llist.add(4);
        llist.add(6);
        llist.add(8);
        System.out.println("LinkedList : " + llist.toString());
        for(int i=0;i<llist.size();i++){
            if(llist.get(i)%2==0){
                System.out.println("All elements are not odd number");
                break;
            }else{
                System.out.println("All elements are odd number");
                break;
            }
        }
    }
}
