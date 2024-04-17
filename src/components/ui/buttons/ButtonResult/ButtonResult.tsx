import Styles from './ButtonResultStyles.module.sass'
import { useEffect } from 'react';
import { useGlobalContext } from '../../../../context/Context';

const ButtonResult = (props: any) => {
    const { setFirstField } = useGlobalContext()
    const { firstField } = useGlobalContext()
    useEffect(() => {
        console.log('first --> ', firstField)
    }, [firstField])

    return (
        <>
            <div onClick={(e) => {
                const getCell = document.body.querySelectorAll('[data-selected="true"]') as NodeListOf<HTMLElement>;
                setFirstField && setFirstField(prev=>  [...prev, 'll']);
                
            }} className={Styles.BtnResult}>Показать Результат</div>
        </>
    )
}

export { ButtonResult }