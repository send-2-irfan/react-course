import { Person } from './Person';
export class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree ;
    }
    teach() {
        console.log("Teacher is teaching ...");
    }
    walk(){
         console.log("Teacher is walking ...");
    }
}
