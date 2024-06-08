import React, { useState } from "react";
import * as C from './Styles'

const CheckBox = () => {
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckBoxChange = () => {
        setIsChecked(!isChecked)
    }

    return (
        <>
            <C.Label>
                <C.Input type="checkbox" checked={isChecked} onChange={handleCheckBoxChange} />
                CheckMe
            </C.Label>

            <div>
                {isChecked ? <C.Label>Marcado</C.Label> : <C.Label>Desmarcado</C.Label>}
            </div>
        </>
    )
}

export default CheckBox