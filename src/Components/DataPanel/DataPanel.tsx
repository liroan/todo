import {Field, Form, Formik} from "formik";
import plus from "../../img/plus.png";
import {FC} from "react";
import React from "react";
import {inject} from "mobx-react";
import {observer} from "mobx-react-lite";
import MainForm from "./MainForm/MainForm";
import Options from "./Options/Options";
import {IAllTask} from "../../types/types";
import "./DataPanel.sass";

interface DataPanelProps {
    allTask?: IAllTask
}


const DataPanel:FC<DataPanelProps> = ({allTask}) => {
    if (allTask === undefined) return <div>Preloader</div>
    else {
        return (
            <div className="main-window__data">
                <MainForm addNewTask={allTask.addNewTask} selectedOption={allTask.selectedOption}/>
                <Options selectedOption={allTask.selectedOption} setOption={allTask.setOption}/>
            </div>
        )
    }
}

export default inject("allTask")(observer(DataPanel));