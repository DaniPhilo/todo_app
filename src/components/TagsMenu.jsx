const TagsMenu = ({ tags, todos, setCurrentTaskList }) => {

    const filterByTag = (tag) => {
        if (tag === "all") {
            setCurrentTaskList(todos);
        } else {
            const filteredTasks = todos.filter(todo => todo.tag === tag);
            setCurrentTaskList(filteredTasks);
        }
    }


    return (
        <>
            {
                tags &&
                <div className="flex gap-4">
                    {tags.map((tag, i) => <button key={i} onClick={() => filterByTag(tag)} className="py-1 px-2 border rounded cursor-pointer hover:bg-slate-300">{`#${tag}`}</button>)}
                </div>
            }
        </>
    )
}

export default TagsMenu