import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const [editIndex, setEditIndex] = useState(null); // Track the index of the todo being edited
    const [editValue, setEditValue] = useState('');  // Store the edited value

    // Add new todo
    const addTodo = () => {
        setTodos(todos => [...todos, { text: input, completed: false }]);
        setInput('');
    }

    const removeTodo = (index) => {
        setTodos(todos => todos.filter((item, i) => i !== index));
    };

    const startEditing = (index) => {
        setEditIndex(index);
        setEditValue(todos[index].text);
    };

    const saveEdit = () => {
        const updatedTodos = todos.map((todo, index) => {
            if (index === editIndex) {
                return { ...todo, text: editValue };
            }
            return todo;
        });
        setTodos(updatedTodos);
        setEditIndex(null);
        setEditValue('');
    };

    const toggleCompletion = (index) => {
        const updatedTodos = todos.map((todo, i) => {
            if (i === index) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <div className="todolist-app">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Todolist</h1>

                        <Form onSubmit={(e) => {
                            e.preventDefault();
                            if (editIndex !== null) {
                                saveEdit();
                            } else {
                                addTodo();
                            }
                        }}>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    aria-label="Example text with button addon"
                                    aria-describedby="basic-addon"
                                    value={editIndex !== null ? editValue : input}
                                    onChange={e => editIndex !== null ? setEditValue(e.target.value) : setInput(e.target.value)}
                                />
                                <Button variant="primary" type="submit">
                                    {editIndex !== null ? 'Save' : 'ADD'}
                                </Button>
                            </InputGroup>
                        </Form>

                        {
                            todos.length > 0 ? (
                                <ListGroup>
                                    {
                                        todos.map((item, index) => (
                                            <ListGroup.Item key={index} className='d-flex justify-content-between align-items-center'>
                                                <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                                                    {item.text}
                                                </span>
                                                <div>
                                                    <Button
                                                        variant={item.completed ? "success" : "warning"}
                                                        className='me-2'
                                                        onClick={() => toggleCompletion(index)}>
                                                        {item.completed ? 'Undo' : 'Complete'}
                                                    </Button>
                                                    <Button variant="secondary" className='me-2' onClick={() => startEditing(index)}>
                                                        Edit
                                                    </Button>
                                                    <Button variant='danger' onClick={() => removeTodo(index)}>
                                                        X
                                                    </Button>
                                                </div>
                                            </ListGroup.Item>
                                        ))
                                    }
                                </ListGroup>
                            ) : (
                                <div>Nothing here</div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoList;
