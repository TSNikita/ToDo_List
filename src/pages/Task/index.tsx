import React, { useState } from 'react';
import Button from '../../components/Button';
import HeaderTask from '../../components/HeaderTask';
import ToDoPanel from '../../components/ToDoPanel';
import { data } from '../../helpers';

import style from './Task.module.scss';
import { todoType } from '../../typeProps';
import TodoList from '../../components/ToDoList';

const Task = () => {
  const [todos, setTodos] = useState(data[0].task);
  const [todoIdForEdit, setTodoIdForEdit] = useState<todoType['id'] | null>(null);

  //получаем id на который клик
  const selectTodoIdForEdit = (id: todoType['id']) => {
    setTodoIdForEdit(id);
  };

  //добавить задачу
  const addTodo = ({ name, description, date }: Omit<todoType, 'checked'>) => {
    setTodos([
      ...todos,
      {
        id: Object.keys(todos).length + 1,
        key: Object.keys(todos).length + 1,
        description,
        name,
        checked: false,
        date,
      },
    ]);
  };

  //изменить статус задачи
  const checkedTodo = (id: todoType['id']) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            checked: !todo.checked,
          };
        }
        return todo;
      })
    );
  };

  // удалить задачу
  const deleteTask = (id: todoType['id']) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //отредактировать задачу
  const changeTodo = ({ name, description }: Omit<todoType, 'checked'>) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoIdForEdit) {
          return {
            ...todo,
            name,
            description,
          };
        }
        return todo;
      })
    );
    setTodoIdForEdit(null);
  };

  return (
    <div>
      <div className={style.task}>
        <HeaderTask totalCount={todos.length} />

        <div className={style.task_todoPanel}>
          <ToDoPanel addTodo={addTodo} mode="add" />
        </div>

        <TodoList
          todos={todos}
          changeTodo={changeTodo}
          todoIdForEdit={todoIdForEdit}
          checkedTodo={checkedTodo}
          deleteTask={deleteTask}
          selectTodoIdForEdit={selectTodoIdForEdit}
        />
      </div>
    </div>
  );
};

export default Task;
