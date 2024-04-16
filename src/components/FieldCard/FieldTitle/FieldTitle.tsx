import Styles from './FieldTitleStyles.module.sass';
interface IProps {
    fieldNumber: number,
    amount: number
}
const FieldTitle = (props: IProps) => {

    const DecNum = (number: any, titles: any) => {
        let cases = [2, 0, 1, 1, 1, 2];
        return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }

    return (
        <div className={Styles.FieldTitle}>
            <h2 className={Styles.Field}>{`Поле ${props.fieldNumber}`}</h2>
            <span className={Styles.CheckNumber}>{`Отметьте ${props.amount} ${DecNum(props.amount, ['Число', 'Числа', 'Чисел'])}`}</span>
        </div>
    )
}
export default FieldTitle;