import express = require("express");
import { todosRouter } from './todos.route';

export const router = express.Router();

router.use('/todos', todosRouter);
