// Write a Java Program to Implement the functionality of multiple inheritance into
// the program.
class A {
    void display() {
        System.out.println("Class A method called");
    }
}
class B extends A{
    void display() {
        System.out.println("Class B method called");
    }
}
class C extends A{
    void display() {
        System.out.println("Class C method called");
    }
}
class D extends B{
    void display() {
        System.out.println("Class D method called");
    }
}
public class Task7 {
    public static void main(String[] args) {
        A a = new A();
        B b = new B();
        C c = new C();
        D d = new D();

        a.display(); // Class A method called
        b.display(); // Class B method called
        c.display(); // Class C method called
        d.display(); // Class D method called
    }
}