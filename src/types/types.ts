


export interface IAllTask {
    allTask: ITask[],
    selectedOption: string,
    id: number,
    currentCategoryTasks: ITask[] | undefined,
    setOption: (arg0: string) => void,
    addNewTask: (arg0: string) => void,
    markAsCompleted: (arg0: number) => void,
    deleteTask: (arg0: number) => void,
    backTaskInUncomplited: (arg0: number) => void,
}

export interface ITask {
    id: number,
    text: string,
    isCompleted: boolean
}