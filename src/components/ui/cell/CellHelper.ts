import Styles from './Cell.module.sass';

const HandleClick = (event: any) => {
    const selected = event.currentTarget.dataset.selected
    selected === "false"
        ? event.currentTarget.dataset.selected = "true" 
        : event.currentTarget.dataset.selected = 'false' 
    event.currentTarget.classList.toggle(`${Styles.CellActive}`)
}
export { HandleClick }