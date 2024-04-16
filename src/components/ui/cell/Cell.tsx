import Styles from './Cell.module.sass';

interface CellProps {num?: number}
const Cell = (props: CellProps) => {

    return (
        <div className={Styles.Cell}>
            {props.num}
        </div>
    )
}
export default Cell;