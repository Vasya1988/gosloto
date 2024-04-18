import { useContext, useEffect } from "react"
import { MyContext } from "../../Context/Context"


const Result = () => {
    const {firstField, secondField, isTicketWon} = useContext(MyContext)
    console.log(firstField, secondField, isTicketWon)
    return (
        <div>
            done
        </div>
    )
}
export { Result }