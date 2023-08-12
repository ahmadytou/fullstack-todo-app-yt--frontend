import axios from "axios";

const BaseUrl = "https://fullstack-todo-app-yt-backend-6vr9.onrender.com";

const getAllTodo = (setTodo) => {
  axios.get(BaseUrl).then(({ data }) => {
    setTodo(data);
  });
};

const addTodo = (text, setText, setTodo) => {
  axios
    .post(`${BaseUrl}/save`, { text })
    .then((data) => {
      console.log(data);
      setText("");
      getAllTodo(setTodo);
    })
    .catch((err) => console.log(err));
};

const updateTodo = (toDoId, text, setTodo, setText, setIsUpdating) => {
  axios
    .post(`${BaseUrl}/update`, { _id: toDoId, text })
    .then((data) => {
      setText("");
      setIsUpdating(false);
      getAllTodo(setTodo);
    })
    .catch((err) => console.log(err));
};

const deleteToDo = (_id, setTodo) => {
    axios
      .post(`${BaseUrl}/delete`, { _id})
      .then((data) => {
        getAllTodo(setTodo);
      })
      .catch((err) => console.log(err));
  };

export { getAllTodo, addTodo, updateTodo, deleteToDo };
