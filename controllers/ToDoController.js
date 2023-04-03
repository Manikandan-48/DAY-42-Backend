import ToDo from "../models/ToDoModel.js";

export const getToDo = async (req, res) => {

    try {
        const todo = await ToDo.find();
        res.status(200).send("List of ToDos🎰")
    }

    catch (err) {
        res.status(400).send("Something went wrong🚫",err)
    }
}

export const saveToDo = (req, res) => {

    const { text } = req.body;
    ToDo.create({ text })

        .then((data) => {

            res.json({
                message: "Successfully Added👍",
                StatusCode: 200,
                data
            })

        })
        .catch((err) => res.json("Something went wrong🚫", err))
}

export const deleteToDo = (req, res) => {

    const { _id } = req.body;
    console.log('id--->', _id);

    ToDo.$where.findByIdAndDelete(_id)

        .then(() => res.status(200).send("Successfully Deleted👍"))

        .catch((err) => res.status(400).send("Something went wrong🚫"))
}

export const updateToDo = (req, res) => {

    const { _id, text } = req.body
    ToDo.findByIdAndUpdate(_id, { text })

        .then(() => res.status(200).send("Successfully Updated👍"))

        .catch((err) => res.json("Something went wrong🚫"))
}

