import galka from "../../../img/galka.png";
import deleteIcon from "../../../img/delete.png";
import galka2 from "../../../img/galka2.png";
import back from "../../../img/back.png";
import React, {FC} from "react";
import hour from "../../../img/hour.png";
import "./Task.sass"


interface TaskProps {
    text: string,
    id: number,
    isCompleted: boolean,
    markAsCompleted: (arg0: number) => void,
    deleteTask: (arg0: number) => void,
    backTaskInUncomplited: (arg0: number) => void,
}

const Task:FC<TaskProps> = ({text, id, isCompleted, deleteTask, backTaskInUncomplited, markAsCompleted}) => {
    return (
        <div className="tasks__item item">
            <span className={"item__completed"}>
                {isCompleted ? <img src={galka} alt=""/> : <img src={hour} alt=""/>}
            </span>
            <p className={"item__text"}>
                {text}
            </p>
            <div className="item__actions actions">
                <div className="action__delete button-wrapper">
                    <button onClick={() => deleteTask(id)}>
                        <img src={deleteIcon} alt=""/>
                    </button>
                </div>
                {!isCompleted
                    ? <div className="action__complete button-wrapper">
                        <button onClick={() => markAsCompleted(id)}>
                            <img src={galka2} alt=""/>
                        </button>
                      </div>
                    :
                    <div className="action__back button-wrapper">
                        <button onClick={() => backTaskInUncomplited(id)}>
                            <img src={back} alt=""/>
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Task;