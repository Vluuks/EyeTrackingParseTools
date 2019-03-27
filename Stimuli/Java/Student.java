import java.util.*;

public class Student {
    private String name;
    private ArrayList<String> courses;
    private int credits;

    public Student(String name, ArrayList<String> courses, int credits) {
        this.name = name;
        this.courses = courses;
        this.credits = credits;
    }

    public boolean isEligibleForDiploma() {
        return credits > 240;
    }

    public String listCourses() {
        String courseString = "";
        int i = 0;

        while (i < this.courses.size()) {
            courseString =  courseString + courses.get(i) + " ";
            i = i + 1;
        }
        return courseString;
    }

    public static void main(String[] args) {

        ArrayList<String> currentCourses = new ArrayList<String>(Arrays.asList("Information Visualization", "Service Oriented Design"));
        Student s1 = new Student("Sepp Tanson", currentCourses, 300);

        if(s1.isEligibleForDiploma()) {
            System.out.println("This student can graduate!");
        }
        else {
            System.out.println("Still need points. Current courses: " + s1.listCourses());
        }
    }
}

