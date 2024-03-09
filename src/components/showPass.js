import styled from "styled-components"
import { useState } from "react"

const Button = styled.button`
    border: 0;
    background-color: transparent;
    padding: 5px;

    & i{
        min-width: 17px;
    }

    i.hidden{
        display: none;
    }
`

function ShowPassButton({inputPass, segInputPass}) {

    const [showPassState, setShowPassState] = useState(false)
    function showPass(inputPass, segInputPass) {
        var iSlash = document.getElementById('iSlash')
        var iNoSlash = document.getElementById('iNoSlash')
        var input1 = document.getElementById(inputPass)
        var input2 = document.getElementById(segInputPass)

        if (segInputPass === undefined){
            if (showPassState === false){
                iSlash.classList.add('hidden')
                iNoSlash.classList.remove('hidden')
                input1.type = 'text'
                setShowPassState(true)
            }else{
                iSlash.classList.remove('hidden')
                iNoSlash.classList.add('hidden')
                input1.type = 'password'
                setShowPassState(false)
            }
        }else{
            if (showPassState === false){
                iSlash.classList.add('hidden')
                iNoSlash.classList.remove('hidden')
                input1.type = 'text'
                input2.type = 'text'
                setShowPassState(true)
            }else{
                iSlash.classList.remove('hidden')
                iNoSlash.classList.add('hidden')
                input1.type = 'password'
                input2.type = 'password'
                setShowPassState(false)
            }
        }
    }

    return (
        <Button 
        id="showPass" 
        onClick={() => {
            showPass(inputPass, segInputPass)
        }}>
            <i className="fa-solid fa-eye hidden" id="iNoSlash"></i>
            <i className="fa-solid fa-eye-slash" id="iSlash"></i>
        </Button>
    )
}

export default ShowPassButton