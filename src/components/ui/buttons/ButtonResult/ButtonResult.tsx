import { useContext } from 'react';
import Styles from './ButtonResultStyles.module.sass';
import { MyContext } from '../../../../Context/Context';

const ButtonResult = () => {

    const {firstField, setFirstField, secondField, setSecondField, isTicketWon, setTicket} = useContext(MyContext);

    console.log(firstField)
    
    return (
        <>
            <div onClick={() => {
                const fieldFirst = document.body.querySelector('[data-field="first"]') as HTMLElement
                const fieldSecond = document.body.querySelector('[data-field="second"]') as HTMLElement
                const firstNumber = fieldFirst.querySelectorAll('[data-selected="true"]') as NodeListOf<HTMLElement>
                const secondNumber = fieldSecond.querySelectorAll('[data-selected="true"]') as NodeListOf<HTMLElement>

                const firstArray: string[] = []
                const secondArray: string[] = []

                firstNumber.forEach((e) => {
                    firstArray.push(e.innerText)
                })
                secondNumber.forEach((e) => {
                    secondArray.push(e.innerText)
                })

                setTicket(true)
                setFirstField(firstArray);
                setSecondField(secondArray);

            }} className={Styles.BtnResult}>Показать Результат</div>
        </>
    )
}

export { ButtonResult }