import { useContext, useEffect, useState } from "react";
import { ToDoContext } from "./context/ToDoContext";
import Form from "./components/Form";
import TagsMenu from "./components/TagsMenu";
import TodoList from "./components/TodoList";

function App() {

  const { todos, setTodos} = useContext(ToDoContext);
  const [currentTaskList, setCurrentTaskList] = useState([]);
  const [tags, setTags] = useState(["all"]);

  useEffect(() => {
    const currentTags = todos.reduce((acc, curr) => {
      if (curr.tag && !acc.includes(curr.tag)) {
        return [...acc, curr.tag]
      } else {
        return acc
      }
    }, []);
    setTags(["all", ...currentTags]);
    setCurrentTaskList([...todos]);
  }, [todos]);

  return (
    <main className="w-full flex flex-col justify-start items-center gap-4">
      <Form />
      <TagsMenu tags={tags} todos={todos} setCurrentTaskList={setCurrentTaskList} />
      <TodoList currentTaskList={currentTaskList} todos={todos} setTodos={setTodos} />
    </main>
  );
}

export default App;
