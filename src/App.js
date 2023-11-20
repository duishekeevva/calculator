import {useState} from "react";

const App = () => {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [result, setResult] = useState(0);

    const handleFirstNumber = (e) => {
        setFirstNumber(Number(e.target.value))
    }

    const handleSecondNumber = (e) => {
        setSecondNumber(Number(e.target.value))
    }
    const handleFirstNumberChange =(e)=> {
        e.target.value=''
    }

    const handleSecondNumberChange =(e)=> {
        e.target.value=''
    }

    const handleIncrease = () => {
        setResult(firstNumber +secondNumber)
    }

    const handleDecrease = () => {
            setResult(firstNumber -secondNumber)
    }

    const handleMultiplication = () => {
        setResult(firstNumber * secondNumber)
    }

    const handleDivision = () => {
        if (secondNumber === 0) {
            setResult('Деление на ноль!')
        } else {
            setResult(firstNumber / secondNumber)
        }
    }

    return (
        <div className={'calculator'}>
            <h1>КАЛЬКУЛЯТОР</h1>
            <div>
                <input className={'firstNumber'} onClick={handleFirstNumberChange} onChange={handleFirstNumber} value={firstNumber} type="number" placeholder={'Введите первое число'}/>
            </div>
            <div className={'buttons'}>
                <button onClick={handleIncrease}>+</button>
                <button onClick={handleDecrease}>-</button>
                <button onClick={handleMultiplication}>*</button>
                <button onClick={handleDivision}>/</button>
            </div>
            <div>
                <input className={'secondNumber'} onClick={handleSecondNumberChange} onChange={handleSecondNumber} value={secondNumber} type="number" placeholder={'Введите второе число'}/>
            </div>
            <input className={'result'} type="text" value={result}/>
        </div>
    )
}

export default App;
