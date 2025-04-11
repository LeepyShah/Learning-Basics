// Write a program for Multilevel Inheritance using java programming language.
class Animal{
    public void eat(){
        System.out.println("Eating...");
    }
}
class Dog extends Animal{
    public void bark(){
        System.out.println("Barking...");
    }
}
class Puppy extends Dog{
    public void weep(){
        System.out.println("Weeping...");
    }
}
class Main{
    public static void main(String args[]){
        Puppy p=new Puppy();
        p.eat();
        p.bark();
        p.weep();
        System.out.println("Puppy is a subclass of Dog and Animal.");
        Dog d=new Dog();
        d.eat();
        d.bark();
        System.out.println("Dog is a subclass of Animal.");
        Animal a=new Animal();
        a.eat();
        System.out.println("Animal is the superclass.");
    }
}
