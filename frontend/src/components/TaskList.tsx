'use client'

import { FindAllTasksResponseDto } from "@/apis/backend/tasks/models/dtos/find-all-tasks-response.dto"
import { use } from "react";
import TaskCard from "./TaskCard";

interface TaskListProps {
    tasks: Promise<FindAllTasksResponseDto>
}

export default function TaskList({
    tasks
}: TaskListProps) {
    const loadedTasks = use(tasks);

    return (
        <div className="flex items-center justify-center gap-[25px] flex-wrap">
            {loadedTasks?.length > 0 ? loadedTasks.map((task, index) => (
                <TaskCard key={index} task={task} />
            )) : (<p><i className="opacity-50"> Nenhuma tarefa encontrada </i></p>)}
        </div>
    );
}