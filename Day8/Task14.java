//  Write a code to show NullPointerException.
class Main{
    public static void main(String[] args) {
        try{
             String s = null;
             System.out.println(s.length()); 
        }
        catch(Exception e)
        {
            System.out.print(e);
        }
    }
}