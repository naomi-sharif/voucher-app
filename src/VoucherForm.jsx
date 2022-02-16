import {useState} from 'react';
import styled from 'styled-components';

const VoucherFormContainer = styled.div`
    margin: .5rem 0;
`;

const VoucherCodeInput = styled.input`
    margin: 0 .5rem;
`;

const SubmitButton = styled.input`
    background-color: #fc9928;
    border: 1px solid #000;
    border-radius: 20px;
    cursor: pointer;
    text-align: center;
    padding: .5rem;
    display: block;
    margin: 1rem 0;
`;



export const VoucherForm = () => {

    const [inputValue, setInputValue] = useState();
    const [errorMessage, setErrorMessage] = useState("");
    
    const onSubmit = (e) => {
        e.preventDefault();
        if(inputValue === undefined) {    
            setErrorMessage("Please enter some text")
        }
        setInputValue("");
    }

    return (
        <VoucherFormContainer>
            <form onSubmit={onSubmit}>
                <label>
                    Enter your voucher Code Here
                    <VoucherCodeInput type="text" value={inputValue} onInput={e => setInputValue(e.target.value) }/>
                    <p>{errorMessage}</p>
                    <SubmitButton type="submit" value="Submit" />
                </label>
            </form>
       </VoucherFormContainer>
    )
}


