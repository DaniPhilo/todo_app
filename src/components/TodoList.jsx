import ToDo from "./ToDo";

const TodoList = ({ currentTaskList, todos, setTodos }) => {

  const handleDelete = (id) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  }
  const handleComplete = (id) => {
    let taskIndex = null;
    const completedTask = todos.find((todo, i) => {
      if (todo.id === id) {
        taskIndex = i;
        return true
      } else {
        return false
      }
    });
    completedTask.completed = !completedTask.completed;
    const newTasks = [...todos.slice(0, taskIndex), completedTask, ...todos.slice(taskIndex + 1)];
    setTodos(newTasks);
  }

  return (
    <div className="w-full flex flex-wrap justify-start gap-4 px-8">
      {
        currentTaskList.map((todo, i) => {
          return <ToDo key={i} todo={todo} handleComplete={handleComplete} handleDelete={handleDelete} />
        })
      }
    </div>
  )
}

export default TodoList