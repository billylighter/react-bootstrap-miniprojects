import Accordion from 'react-bootstrap/Accordion';

const accordionData = [
    {
        title: 'Lorem ipsum dolor sit amet',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        title: 'sit amet, consectetur adipiscing elit',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        title: 'consectetur adipiscing elit',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        title: 'voluptate velit',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
];

function MyAccordion() {
    return (
        <div className='my-accordion'>
            <h1>Accordion</h1>
            {
                (accordionData) ? (
                    <Accordion defaultActiveKey="0">
                        {
                            accordionData.map((item, index) => (
                                <Accordion.Item eventKey={index.toString()} key={index}>
                                    <Accordion.Header>
                                        {item.title}
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        {item.description}
                                    </Accordion.Body>
                                </Accordion.Item>

                            ))
                        }
                    </Accordion>
                ) : (
                    <></>
                )
            }
        </div>
    )
}

export default MyAccordion;