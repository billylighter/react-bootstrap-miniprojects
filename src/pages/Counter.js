import Button from 'react-bootstrap/Button';
import {useState} from "react";

function Counter() {

    const [count, setCounter] = useState(0);

    const plusCount = () => {
        setCounter(count + 1);
    }

    const minusCount = () => {
        if (count > 0) {
            setCounter(count - 1);
        }
    }

    return (
        <>


            <h1 className="text-center py-5">
                Counter
            </h1>

            <p className="text-center">
                {count}
            </p>

            <div className="flex text-center">
                <Button className={'mx-2'} onClick={plusCount} variant="success">Count ++</Button>
                <Button className={'mx-2'} onClick={minusCount} variant="danger">Count --</Button>
            </div>

        </>
    );
}

export default Counter;