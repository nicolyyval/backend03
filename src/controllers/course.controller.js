export const getCourses = (req, res) => {
    return res.status(200).send(
        { message: "Get all courses controller!" });
};

export const getCourseById = (req, res) => {
    const { id } = req.params;
    return res.status(200).send(
        { message: `Get course with id ${id} controller!` }
    );
};

export const createCourse = (req, res) => {
    const { name, duration, educator } = req.body;
    duration <= 2 ? res.status(400).send({ message: "Duration must be greater than 2!" }) : res.status(200).send({ message: `Created course with name ${name}, duration: ${duration} and educator ${educator}!` });
    if (!name || !duration || !educator) {
        return res.status(400).send(
            { message: "Missing required informations!" }
        );
    };
    return res.status(200).send(
        { message: `Created course with name ${name}, duration: ${duration} and educator ${educator}!` }
    );
}

export const updateCourse = (req, res) => {
    const { id } = req.params;
    const { name, duration, educator } = req.body;
    if (!name || !duration || !educator) {
        return res.status(400).send(
            { message: "Missing required informations!" }
        );
    };
    return res.status(200).send({
        message: `Updated course with id ${id} with name ${name}, duration: ${duration} and educator ${educator}`
    });
}

export const deleteCourse = (req, res) => {
    const { id } = req.params;
    return res.status(200).send(
        { message: `Deleted course with id ${id}!` }
    );
}
