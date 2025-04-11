// . Write a program to create a StringBuffer and Clear the StringBuffer using
// different methods of that.
public class StringBufferExample {
    public static void main(String[] args){
      
        StringBuffer s = new StringBuffer();
      
      	// Adding elements in StringBuffer
        s.append("Hello");
        s.append(" ");
        s.append("world");
        
      	// String with the StringBuffer value
      	String str = s.toString();
        System.out.println(str);

       s.replace(1, 3, "  ");
       System.out.println(s);

       s.delete(1,3);
      System.out.println(s);
    
     }
}