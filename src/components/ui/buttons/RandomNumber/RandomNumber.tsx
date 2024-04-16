import Styles from './RandomNumberStyle.module.sass';

const RandomNumber = () => {

    return (
        <>
            <div className={Styles.Random}>
                <img src={require('../../../../Image/magic-wand.png')} />
            </div>
        </>
    )
}
export { RandomNumber } 
