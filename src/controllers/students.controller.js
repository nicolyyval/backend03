
export const getStudents = (req, res) => {
    return res.status(200).send(
        { message: "Get all students controller!" });
};
export const getStudentById = (req, res) => {
    const { id } = req.params;
    return res.status(200).send(
        { message: `Get student with id ${id} controller!` }
    );
};
export const createStudent = (req, res) => {
    const { name, email, age } = req.body;
    age >= 18 ? res.status(201).send({ message: "Aluno com idade maior ou igual a 18 anos" })
        : res.status(400).send({ message: "Aluno com idade menor que 18 anos" });
    if (!name || !email || !age) {
        return res.status(400).send(
            { message: "Missing required informations!" }
        );
    };
    return res.status(200).send(
        { message: `Created student with name ${name}, email: ${email} and age ${age}!` }
    );
}
export const updateStudent = (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;
    if (!name || !email || !age) {
        return res.status(400).send(
            { message: "Missing required informations!" }
        );
    };
    return res.status(200).send({
        message: `Updated student with id ${id} with name ${name}, that is ${age} years old and email: ${email}`
    });
};

export const deleteStudent = (req, res) => {
    const { id } = req.params;
    return res.status(200).send(
        { message: `Deleted student with id ${id}!` }
    );
}