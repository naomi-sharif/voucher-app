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
    return (
        <VoucherFormContainer>
            <form>
                <label>
                    Enter your voucher Code Here
                    <VoucherCodeInput />
                    <SubmitButton value="Submit" />
                </label>
            </form>
       </VoucherFormContainer>
    )
}


