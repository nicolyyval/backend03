import { Student } from "../models/students/Student.js";
import { StudentList } from "../models/students/StudentsList.js";

const list = new StudentList();

export const getStudents = (req, res) => {
    const students = list.getAllStudents();
    if (students.length) {
        return res.status(404).send(
            students);
    }
    return res.status(200).send(
        { message: "Não há alunos cadastrados" });
};

export const getStudentById = (req, res) => {

    const { id } = req.params;
    const student = list.getStudentById(id);
    if (!student) {
        return res.status(404).send(
            { message: `Student with id ${id} not found!` }
        );
    }
    return res.status(200).send(
        student
    );
};

export const createStudent = (req, res) => {
    const { name, email, age } = req.body;
    if (!name || !email || !age) {
        return res.status(400).send(
            { message: "Parâmetros inválidos!" }
        );
    }

    const student = new Student(name, email, age);
    list.addStudent(student);
    return res.status(201).send({ message: "Aluno criado com sucesso!", student, });
}

export const updateStudent = (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;
    if (!name || !email || !age) {
        return res.status(400).send(
            { message: "Missing required informations!" }
        );
    }
    const student = list.updateStudent(id, name, email, age);
    if (!student) {
        return res.status(404).send(
            { message: `Student with id ${id} not found!` }
        );
    }

    const updatedStudent = list.updateStudent(id, name, email, age);
    return res.status(200).send({ message: "Student updated successfully!", updatedStudent });
};

export const deleteStudent = (req, res) => {
    const { id } = req.params;
    const student = list.getStudentById(id);
    if (!student) {
        return res.status(404).send(
            { message: `Student not found!` }
        );
    }
    list.removeStudent(id);

    return res.status(200).send(
        { message: "Aluno encontrado com sucesso!", student, }
    );
}