// Write a program to remove whitespaces from a given String. (Without using any
// inbuilt functions) String - "WELCOME TO MV CLOUDS"

class Main {
    public static void main(String[] args) {
        String str= "WELCOME TO MV CLOUDS";
        String new_str="";
        for(int i=0;i<str.length();i++){

             if(str.charAt(i)!=' '){
               new_str=new_str+str.charAt(i);
             }
        }
        System.out.print(new_str);
    }
}