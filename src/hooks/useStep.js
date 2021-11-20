import { useState } from "react";

export const useStep = () => {
    const [state, setstate] = useState(1);
    
    const addStep = () => {
        setstate(state+1);
    }

    const subtractStep = () => {
        setstate(state-1)
    }

    return {state, addStep, subtractStep};
}