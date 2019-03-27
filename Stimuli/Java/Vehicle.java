public class Vehicle {

    String producer, type;
    int topSpeed, currentSpeed;

    public Vehicle(String producer, String type, int topSpeed) {
        this.producer = producer;
        this.type = type;
        this.topSpeed = topSpeed;
        this.currentSpeed = 0;
    }

    public int accelerate(int kmH) {
        if(this.currentSpeed + kmH > this.topSpeed) {
            this.currentSpeed = this.topSpeed;
        }
        else {
            this.currentSpeed += kmH;
        }
		return this.currentSpeed;
    }

    public static void main(String[] args) {

        Vehicle v = new Vehicle("Volvo", "C30", 230);
		System.out.println(v.accelerate(50));
    }
	
}