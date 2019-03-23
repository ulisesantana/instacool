```jsx
const {Row, Column} = require('../../atomics');
const {useState} = require('react');

function Example(){
    const inputInitialStates = new Array(5).fill('');
    const states = inputInitialStates.map(useState);
    const onChangeFactory = (setState) => (e) => {e.target && setState(e.target.value)}; 
    const onChangeDateFactory = setState => onChangeFactory(date => setState(date));
    const renderDate = date => (new Date(date || Date())).toDateString()
    
    return (
    <div>
        <Row>
            <Input 
                value={states[0][0]} 
                onChange={onChangeFactory(states[0][1])} 
                text={`This is an input with value: ${states[0][0]}`}
            />
        </Row>
        <Row>
            <Column >
                <Input value={states[1][0]} onChange={onChangeFactory(states[1][1])}/>
            </Column>
            <Input type="date" 
                value={states[2][0]} 
                onChange={onChangeDateFactory(states[2][1])}
                text={renderDate(states[2][0])}
            />
        </Row>
        <Row>
            <Column width={30}>
                <Input 
                    value={states[3][0]} 
                    onChange={onChangeFactory(states[3][1])} 
                    text={`This is an input with value:${states[3][0]}`}
                />
            </Column>
            <Column width={70}>
                <Input 
                    value={states[4][0]} 
                    onChange={onChangeFactory(states[4][1])} 
                    label={`This is a label for the input.`}
                />
            </Column>
        </Row>
        <h2>
        Types
        </h2>
    </div>
    )
}

<Example/>

```