import { ChangeEvent, useState } from "react"

type handleInputChange = (e: ChangeEvent<HTMLInputElement>) => void;

export const useForm= <T, >(initialState: T): [T,handleInputChange, () => void]=> {

    const [state, setState] = useState(initialState);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setState({
            ...initialState,
            [e.target.name] : e.target.value
        });
    }

    const reset = () => setState(initialState);

    return [state, handleInputChange, reset];
}