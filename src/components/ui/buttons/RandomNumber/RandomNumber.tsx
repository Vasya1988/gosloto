import Styles from './RandomNumberStyle.module.sass';
import CellStyles from '../../cell/Cell.module.sass';

const RandomNumber = () => {

    const firstArray: number[] = []
    const secondArray: number[] = []

    for (let i = 1; i <= 19; i++) firstArray.push(i)
    for (let i = 1; i <= 2; i++) secondArray.push(i)
    
    const shuffle = (first: number[], second: number[]) => {

        let newArray = first.length;
        let randomIndex;

        while (newArray !== 0) {
            randomIndex = Math.floor(Math.random() * newArray);
            newArray--
            [first[newArray], first[randomIndex]] = [first[randomIndex], first[newArray]]
        }

        const getRandomNumbers  = (min: number, max: number): number => {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

        const firstRandom = first.filter((number, index) => index <= 7);
        const secondRandom = getRandomNumbers(1, 2)

        return {
            firstRandom, 
            secondRandom
        }
    }

    console.log(firstArray)
    
    return (
        <>
            <div
                className={Styles.Random}
                onClick={(e) => {
                    const fieldFirst = document.body.querySelector('[data-field="first"]') as HTMLElement
                    const fieldSecond = document.body.querySelector('[data-field="second"]') as HTMLElement
                    const firstNumber = fieldFirst.querySelectorAll('[data-selected]') as NodeListOf<HTMLElement>
                    const secondNumber = fieldSecond.querySelectorAll('[data-selected]') as NodeListOf<HTMLElement>

                    firstNumber.forEach(e => {
                        e.dataset.selected="false";
                        e.classList.remove(CellStyles.CellActive);
                        // console.log(e)
                    })

                    shuffle(firstArray, secondArray).firstRandom.forEach((item) => {
                        console.log(item)
                        firstNumber[item - 1].dataset.selected="true";
                        firstNumber[item - 1].classList.toggle(CellStyles.CellActive)
                    })

                }}
            >
                <img src={require('../../../../Image/magic-wand.png')} />
            </div>
        </>
    )
}
export { RandomNumber } 
