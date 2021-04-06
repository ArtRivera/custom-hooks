import { useState } from "react"

export const useCounter = (initalState = 10) => {
    const [counter, setState] = useState(initalState);

    const increment = (factor: any = 1) =>{
        setState(counter + factor)
    }
    const decrement = (factor: any = 1) =>{
        setState(counter - factor)
    }

    const reset = () =>{
        setState(initalState)
    }

    return {
        counter,
        increment,
        decrement, 
        reset
    }
}
