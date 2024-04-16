import Styles from './FieldCardStyles.module.sass';
import { RandomNumber } from '../ui/buttons/RandomNumber/RandomNumber';
import Cell from '../ui/cell/Cell';
import FieldTitle from './FieldTitle/FieldTitle';

interface FieldCardsProps {
    fields: {
        firstField: number,
        secondField: number
    }
}
const FieldCard = (props: FieldCardsProps) => {

    const firstCells = []
    const secondCells = []

    for (let i = 0; i < props.fields.firstField; i++) {
        firstCells.push(<Cell key={i} num={i+1} />)
    }

    for (let i = 0; i < props.fields.secondField; i++) {
        secondCells.push(<Cell key={i} num={i+1} />)
    }

    return (
        <div className={Styles.FieldCard}>

            <div className={Styles.Info}>
                <h1 className={Styles.Ticket}>Билет 1</h1>
                <RandomNumber />
            </div>
            <FieldTitle fieldNumber={1} amount={8} />
            <div className={Styles.Fields}>
                {
                  firstCells
                }
            </div>

            <FieldTitle fieldNumber={2} amount={1} />
            <div className={Styles.Fields}>
                {
                    secondCells
                }
            </div>
        </div>
    )
}
export default FieldCard;