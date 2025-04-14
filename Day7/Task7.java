// Write a Java Program to Implement the functionality of multiple inheritance into
// the program.


interface Coder {
    void writeCode();
}


interface Tester {
    void testCode();
}


class DevOpsEngineer implements Coder, Tester {
    @Override
    public void writeCode() {
        System.out.println("DevOps Engineer writes automation scripts.");
    }

    @Override
    public void testCode() {
        System.out.println("DevOps Engineer tests deployment pipelines.");
    }

   
    public void deploy() {
        System.out.println("DevOps Engineer deploys code to cloud.");
    }
}

public class Main {
    public static void main(String[] args) {
        DevOpsEngineer devOps = new DevOpsEngineer();
        
        devOps.writeCode();  
        devOps.testCode(); 
        devOps.deploy();    
    }
}
