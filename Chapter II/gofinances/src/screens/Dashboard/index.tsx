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
                <HighlightCart /> 
                <HighlightCart /> 
                <HighlightCart />
            </HighlightCarts>
        </Container>

    )
}
