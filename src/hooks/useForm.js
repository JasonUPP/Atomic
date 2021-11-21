import { useState } from "react"

export const useForm = (initialState = {}) => {
    const [values, setvalues] = useState(initialState);

    const handleInput = ({target}) => {
        setvalues({
            ...values,
            [target.name]: target.value
        });
    };

    return [values, handleInput]
}