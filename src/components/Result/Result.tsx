import { useEffect } from "react"
import { useGlobalContext } from "../../context/Context"

const Result = () => {
    const { firstField } = useGlobalContext()
    useEffect(() => {
        console.log('first --> ', firstField)
    }, [firstField])
    return (
        <div>
            done
        </div>
    )
}
export { Result }