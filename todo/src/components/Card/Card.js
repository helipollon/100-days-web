import React, { useState } from "react";
import "./Card.scss";

const Card = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");
    const [editTask, setEditTask] = useState(null);

    const handleTask = (e) => {
        setTask(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() !== "") {
            setTasks([...tasks, task]);
            setTask("");
        }
    };

    const handleEditButton = (index) => {
        setEditTask(index);
    };

    const handleEdit = (e) => {
        e.preventDefault();
        
        if (task.trim() !== "" && editTask !== null) {
            setTasks(prevTasks => {
                const updatedTasks = [...prevTasks];
                updatedTasks[editTask] = task;
                return updatedTasks;
            });

            setTask("");
            setEditTask(null);
        }
    };

    return (
        <div className="card">
            <div className="card__header">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Yeni görev ekle..."
                        name="task"
                        id="task"
                        value={task}
                        onChange={handleTask}
                    />
                    <button type="submit" disabled={!task}>
                        Görev Ekle
                    </button>
                </form>
            </div>
            <div className="card__body">
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <p>{task}</p>
                            <div>
                                <button className="li-buttons" onClick={() => handleEditButton(index)}>Düzenle</button>
                                <button className="li-buttons">Sil</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={`edit ${editTask !== null ? "edited" : ""}`}>
                <form onSubmit={handleEdit}>
                    <input
                        type="text"
                        placeholder="Düzenle..."
                        name="task"
                        id="task"
                        value={task} // Düzeltme: `value` burada `task` olarak kalacak
                        onChange={handleTask}
                    />
                    <button type="submit" disabled={!task}>
                        Görevi Düzenle
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Card;
