import { useState } from 'react'

export const useForm = (initialState = {}) => {
    const [formValues, setFormValues] = useState(initialState);

    const reset = () => setFormValues(initialState);

    const handleInputChange: any = ({target} : any) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }
    return [formValues, handleInputChange, reset];
}
