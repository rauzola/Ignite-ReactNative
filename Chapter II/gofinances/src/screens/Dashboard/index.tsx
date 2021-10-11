import React from 'react';
import { HighlightCart } from '../../components/HighlightCart';


import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighlightCarts
} from './styles';


export function Dashboard() {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo
                            source={{ uri: 'https://avatars.githubusercontent.com/u/57502280?v=4' }}

                        />
                        <User>
                            <UserGreeting>Olá, </UserGreeting>
                            <UserName>Raul</UserName>
                        </User>
                    </UserInfo>
                    
                    <Icon name="power" />
                </UserWrapper>

            </Header>
            
            <HighlightCarts>
                <HighlightCart
                    type="up"
                    title="Entradas"
                    amount="R$ 17.400,00"
                    lastTransaction="Última entrada dia 13 de abril"
                /> 
                <HighlightCart 
                    type="down"
                    title="Saídas"
                    amount="R$ 1.259,00"
                    lastTransaction="Última saída dia 03 de abril"
                /> 
                <HighlightCart 
                    type="total"
                    title="Total"
                    amount="R$ 16.141,00"
                    lastTransaction="01 á 16 de abril"
                /> 
                
            </HighlightCarts>
        </Container>

    )
}
