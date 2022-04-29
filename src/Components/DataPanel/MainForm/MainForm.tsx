import {Field, Form, Formik} from "formik";
import plus from "../../../img/plus.png";
import {FC} from "react";
import "./MainForm.sass"

interface MainFormProps {
    addNewTask: (arg0: string) => void,
    selectedOption: string
}


const MainForm:FC<MainFormProps> = ({addNewTask, selectedOption}) => {

    return (
        <div className="main-window__form">
            {selectedOption !== "all" && <div className="main-window__form_darkened"></div>}
            <Formik initialValues={{ task: ""}} onSubmit={(values, { setSubmitting }) => {
                        if (values.task.length > 0) addNewTask(values.task)
                        setSubmitting(false);
                    }}
            >
                {({}) => (
                    <Form>
                        <div className="main-window__input"><Field name="task" /></div>
                        <div className="main-window__button button-wrapper">
                            <button type={"submit"}><img src={plus} alt=""/></button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default MainForm;