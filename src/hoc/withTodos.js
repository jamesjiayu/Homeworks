import React from 'react'
import { createTodo, deleteTodo, getTodos, updateTodo } from "../APIs/Api"
export function withTodos (WrappedComponent) {
  return class newComponent extends React.Component {
    state = { tasks: [] }
    componentDidMount () {
      getTodos().then(items => {
        this.setState({ tasks: items.reverse() })
      }).catch(reason => console.log(reason))
    }
    handelDel = (id) => {
      deleteTodo(id).then(para => {
        this.setState({
          tasks: this.state.tasks.filter(task => id !== task.id)
        })
      }).catch(reason => console.log(reason))
    }
    handleSubmit = (newTask) => {
      // const newTask = { content: this.state.val, completed: false }
      createTodo(newTask).then(task => {
        this.setState({ tasks: [task, ...this.state.tasks] })
      }).catch(reason => console.log(reason))
    }
    handleComplete = (task) => {
      const newTask = { ...task, completed: !task.completed }// remember
      updateTodo(newTask).then(data => this.setState(  //return newTask promise
        {
          tasks: this.state.tasks.map(item => {
            if (data.id === item.id) { return data }
            return item
          })
        }))
    }
    handelSave = (task) => {
      updateTodo(task).then(data => this.setState({
        // isEdit: null,
        tasks: this.state.tasks.map(item => {
          if (data.id === item.id) { return data }
          return item
        })
      }))
    }
    render () {
      return <WrappedComponent list={this.state.tasks}
        handelDel={this.handelDel}
        handleSubmit={this.handleSubmit}
        handleComplete={this.handleComplete}
        handelSave={this.handelSave} />
    }
  }
}
