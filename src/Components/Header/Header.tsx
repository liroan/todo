import React, {FC} from "react";
import "./Header.sass"
import logo from "../../img/logo.png"
const Header:FC = () => {
    return (
        <header className="todo-list__header header">
            <div className="header__logo">
                <img src={logo} alt=""/>
            </div>
            <div className="header__title">
                <h1>To-Do LIST</h1>
            </div>
        </header>
    )
}

export default Header;