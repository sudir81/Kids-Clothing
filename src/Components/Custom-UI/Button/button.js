import React from 'react'

import { ButtonContainer } from './button.style'

const CustomButton = ({ children, ...props }) => {
    return (
        <ButtonContainer {...props}>
            {children}
        </ButtonContainer>
    )
}

export default CustomButton
