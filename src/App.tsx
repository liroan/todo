import React, {ChangeEvent, FC, useState} from 'react';
import './app.sass';
import plus from "./img/plus.png"

import { Formik, Form, Field, ErrorMessage } from 'formik';

import {observer} from "mobx-react-lite";
import {inject} from "mobx-react";
import Task from "./Components/Tasks/Task/Task";
import Header from "./Components/Header/Header";
import DataPanel from "./Components/DataPanel/DataPanel";
import Tasks from './Components/Tasks/Tasks';




const App:FC = () => {

    return (
        <div className="todo-list">
            <Header />
            <main className="todo-list__main-window main-window">
                <div className="main-window__container container">
                    <DataPanel />
                    <Tasks />
                </div>
            </main>
        </div>
  )
}

export default App;
