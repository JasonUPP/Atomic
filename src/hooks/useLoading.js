import { useState } from "react"

export const useLoading = () => {
    const [loading, setLoading] = useState(false);    

    const loadOn = () => {
        setLoading(true);
    };

    const loadOff = () => {
        setLoading(false);
    };

    const tipo = localStorage.getItem('type');

    return [loading, loadOn, loadOff, tipo];
}