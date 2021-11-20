import { useState } from "react"


export const useButton = () => {
    const [disabled, setDisabled] = useState(true);

    const activateButton = () => {
        setDisabled(false);
    };

    const disableButton = () => {
        setDisabled(true);
    };


    return [disabled, activateButton, disableButton];
}