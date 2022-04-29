
import React, {FC} from "react";
import "./Options.sass"

interface MainFormProps {
    selectedOption: string,
    setOption: (arg0: string) => void,
}


const Options:FC<MainFormProps> = ({selectedOption, setOption}) => {
    return (
        <div className="main-window__options">
            <select value={selectedOption}
                    onChange={(e) => setOption(e.target.value)}>
                <option value="all">Все</option>
                <option value="completed">Завершенные</option>
                <option value="uncompleted">Не завершенные</option>
            </select>
        </div>
    )
}

export default Options;