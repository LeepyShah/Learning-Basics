//  "Write a java program to reverse each word in a given string.
// (Ex. ""My name is Khan"" => ""Khan is name My"")"
class Main{
    public static void main(String[] args) {
        String str="My name is Khan";
        String[] new_str=str.split(" ");
        String rev="";
        for(int i=new_str.length-1;i>=0;i--){
            rev=rev+new_str[i]+" ";
        }
        System.err.println("Reverse String: "+rev);


    }
}