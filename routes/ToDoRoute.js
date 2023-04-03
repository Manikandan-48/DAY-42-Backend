import { Router } from "express";

import { getToDo, saveToDo, deleteToDo, updateToDo } from "../controllers/ToDoController.js";


export const getToDoRoute = Router().get("/",getToDo);

export const saveToDoRoute = Router().post("/save",saveToDo);

export const deleteToDoRoute = Router().delete("/delete",deleteToDo);

export const updateToDoRoute = Router().post("/update",updateToDo);