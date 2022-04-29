import {makeAutoObservable} from "mobx";
import {IAllTask, ITask} from "../types/types"

class AllTask implements IAllTask{

    constructor() {
        makeAutoObservable(this)
    }

    allTask:ITask[] = []
    selectedOption:string = "all";
    id:number = 3;

    addNewTask = (text:string) => {
        this.allTask.push({id: this.id, text, isCompleted: false})
        this.id++;
    }

    swapStateTask = (id:number, isCompleted:boolean) => {
        for (let task of this.allTask) {
            if (task.id === id) return task.isCompleted = isCompleted;
        }
    }
    markAsCompleted = (id:number) => {
        this.swapStateTask(id, true)
    }

    deleteTask = (id:number) => {
        this.allTask = this.allTask.filter(task => task.id !== id)
    }

    backTaskInUncomplited = (id:number) => {
        this.swapStateTask(id, false)
    }

    setOption = (newSelectedOption:string) => {
        if (newSelectedOption !== this.selectedOption)
            this.selectedOption = newSelectedOption;
    }

    get currentCategoryTasks() {
        switch (this.selectedOption) {
            case "all":
                return this.allTask;
            case "completed":
                return this.allTask.filter(task => task.isCompleted);
            case "uncompleted":
                return this.allTask.filter(task => !task.isCompleted);
        }
    }
}
const allTask = new AllTask()
export default allTask;
