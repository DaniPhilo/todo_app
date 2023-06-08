import { useContext, useState } from "react";
import { ToDoContext } from "../context/ToDoContext"
import { v4 as uuidv4 } from 'uuid';

const Form = () => {

    const { setTodos } = useContext(ToDoContext);
    const [data, setData] = useState({
        todo: "",
        priority: "Low",
        finish_at: "",
        tag: "",
        completed: false
    });

    const handleChange = (e) => {
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        data.id = uuidv4();
        setTodos(prev => [...prev, data]);
        setData({
            todo: "",
            priority: "",
            finish_at: "",
            tag: "",
            completed: false
        });
    }

    return (
        <form action="" onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center gap-8 py-4 px-20 border rounded">
            <div className="w-full flex justify-center items-center gap-20">
                <div className="w-2/3 max-w-[600px] flex flex-col justify-center items-center gap-2">
                    <label htmlFor="todo" className="text-xl font-semibold">Insert todo:</label>
                    <input type="text" name="todo" id="todo" value={data.todo} onChange={handleChange} className="w-full p-2 border rounded" />
                    <input type="submit" value="Create" className="py-1 px-10 font-semibold text-lg border rounded cursor-pointer hover:bg-slate-200" />
                </div>
                <div className="w-1/3 max-w-[300px] grid grid-cols-1 gap-y-2">
                    <div className="w-full grid grid-cols-2 gap-2">
                        <label htmlFor="priority" className="flex justify-start items-center text-lg font-semibold">Priority:</label>
                        <select name="priority" id="priority" defaultValue={"Low"} onChange={handleChange} className="p-2 border rounded cursor-pointer">
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                    <div className="w-full grid grid-cols-2 gap-2">
                        <label htmlFor="finish_at" className="flex justify-start items-center text-lg font-semibold">Deadline:</label>
                        <input type="date" name="finish_at" id="finish_at" value={data.finish_at} onChange={handleChange} className="p-2 border rounded cursor-pointer" />
                    </div>
                    <div className="w-full grid grid-cols-2 gap-2">
                        <label htmlFor="tag" className="flex justify-start items-center text-lg font-semibold">Tag:</label>
                        <input type="text" name="tag" id="tag" onChange={handleChange} value={data.tag} className="p-2 border rounded cursor-pointer" />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form