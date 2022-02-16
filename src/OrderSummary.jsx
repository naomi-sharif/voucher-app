import styled from 'styled-components';
import { VoucherForm } from './VoucherForm';

const Heading = styled.h1`
    margin-bottom: 2rem;
`;

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: #959AFB;
`;

const OrderSummaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    width: 50%;
    padding: 0 .5rem;
`;

const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
`;

const ListItemContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

`;

const ListItem = styled.li`
    margin: .5rem 0;
`;


export const OrderSummary = () => {
    return (
        <FlexContainer>
            <Heading>Order Summary</Heading>
            <OrderSummaryContainer>
                <List>
                    <ListItemContainer><ListItem>Item 1</ListItem><ListItem>£10</ListItem></ListItemContainer>
                    <ListItemContainer><ListItem>Item 2</ListItem><ListItem>£9.99</ListItem></ListItemContainer>
                    <ListItemContainer><ListItem>Total</ListItem><ListItem>£19.99</ListItem></ListItemContainer>
                </List>
                <VoucherForm />
            </OrderSummaryContainer>
        </FlexContainer>
    )
}


