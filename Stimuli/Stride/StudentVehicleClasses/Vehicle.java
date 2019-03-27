// WARNING: This file is auto-generated and any changes to it will be overwritten
import lang.stride.*;
import java.util.*;
import greenfoot.*;

/**
 * Write a description of class Vehicle here.
 */
public class Vehicle
{
    protected String producer;
    protected String type;
    protected int topSpeed;
    protected int currentSpeed;

    /**
     * 
     */
    public Vehicle(String producer, String type, int topSpeed)
    {
        this.producer = producer;
        this.type = type;
        this.topSpeed = topSpeed;
        this.currentSpeed = 0;
    }

    /**
     * 
     */
    public int accelerate(int kmH)
    {
        if (this.currentSpeed + kmH > this.topSpeed) {
            this.currentSpeed = this.topSpeed;
        }
        else {
            this.currentSpeed = this.currentSpeed + kmH;
        }
        return this.currentSpeed;
    }

    /**
     * 
     */
    static public void main(String[] args)
    {
        Vehicle v =  new Vehicle("Volvo", "C30", 230);
        System.out.println(v.accelerate(50));
    }
}
