class Student
{
    constructor(name, age, email)
    {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    display()
    {
        console.log(this.name);
        console.log(this.age);
        console.log(this.email);
    }
}
let obj = new Student("anju", 21, "anju@gmail.com");
obj.display();