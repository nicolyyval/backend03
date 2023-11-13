export class StudentList{
    constructor(){
        this.students = [];
    }

    addStudent(student){
        this.students.push(student);
    }

    getStudentById(id){
        return this.students.find(student => student.id == id);
    }

    getAllStudents(){
        return this.students;
    }

    removeStudent(id){
        this.students = this.students.filter(student => student.id != id);
    }

    updateStudent(id, name, email, age){
        this.students = this.students.map(student => {
            if(student.id == id){
                student.name = name;
                student.email = email;
                student.age = age;
            }
            return student;
        });
        return this.getStudentById(id);
    }
}
