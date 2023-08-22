import React, { useEffect, useState } from "react";
import Card from "../../Card/Card";

import "./AddTask.scss";

const AddTask = ({ addTask }) => {
    return (
        <Card>
            <div className="add-task">
                <button className="add-task__btn" onClick={addTask}>
                    Add Task
                </button>
            </div>
        </Card>
    );
}

export default AddTask;