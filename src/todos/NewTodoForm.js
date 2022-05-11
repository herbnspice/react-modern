import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "./actions";
const NewTodoForm = ({ todos, onCreatePressed }) =>{
    const [inputValue, setInputValue ] = useState('')
    return (
        <div className="new-todo-form">
            <input type="text" value={inputValue} />
            <button className="new-todo-button"  onClick={()=> {
                const isDuplicatedText = todos.some( todo => todo.text ===  inputValue )
                if( !isDuplicatedText){
                    onCreatePressed(inputValue)
                    setInputValue('')
                }}}> Create Todo </button>
        </div>
        )
    }
const mapStateToProps =  state => ({
    todos: state.todos, 
})
const mapDispatchToProps = dispatch => ({
    onCreatePressed : text => dispatch( createTodo( text ))

})
export default connect(mapStateToProps, mapDispatchToProps )(NewTodoForm)