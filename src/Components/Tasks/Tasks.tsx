import Task from "./Task/Task";
import React, {FC} from "react";
import {inject} from "mobx-react";
import {observer} from "mobx-react-lite";
import {IAllTask} from "../../types/types";
import "./Tasks.sass"
import Preloader from "../Preloader/Preloader";
interface TasksProps {
    allTask?: IAllTask
}

const Tasks:FC<TasksProps> = ({allTask}) => {
    if (allTask === undefined || allTask.currentCategoryTasks === undefined) return <Preloader/>;
    return (
        <div className="main-window__tasks tasks">
            {allTask && allTask.currentCategoryTasks.map((task: any) => <Task {...task}
                                                                                  markAsCompleted={allTask.markAsCompleted}
                                                                                  deleteTask={allTask.deleteTask}
                                                                                  backTaskInUncomplited={allTask.backTaskInUncomplited}
                                                                                  key={task.id}/>
            )}
        </div>
    )
}

export default inject("allTask")(observer(Tasks));