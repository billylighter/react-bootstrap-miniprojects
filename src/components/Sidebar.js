import ListGroup from 'react-bootstrap/ListGroup';

const Sidebar = () => {
    return(
        <>
        <div>
            <b>
                Sidebar
            </b>
            <ListGroup>
                <ListGroup.Item action href="/modal">
                   Modal
                </ListGroup.Item>
                <ListGroup.Item action href="/counter">
                   Counter
                </ListGroup.Item>
                <ListGroup.Item action href="/quiz">
                   Quiz
                </ListGroup.Item>
                <ListGroup.Item action href="/todolist">
                   Todolist
                </ListGroup.Item>
                <ListGroup.Item action href="/accordion">
                   Accordion
                </ListGroup.Item>
            </ListGroup>
        </div>
        </>
    )
}

export default Sidebar;