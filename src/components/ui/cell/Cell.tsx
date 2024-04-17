import Styles from './Cell.module.sass';
import { HandleClick } from './CellHelper';

interface CellProps {num?: number}
const Cell = (props: CellProps) => {

    return (
        <div data-selected={false} onClick={(ev) => HandleClick(ev)} className={Styles.Cell}>
            {props.num}
        </div>
    )
}
export default Cell;