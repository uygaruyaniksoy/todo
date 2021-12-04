export interface Message {
  message: string;
}

export interface Todo {
  _id: string,
  text: string,
  completed: boolean,
  deadline: number,
}
