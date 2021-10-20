import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { HighlightCart } from '../../components/HighlightCart';
import { TransactionCard } from '../../components/TransactionCard';

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
    HighlightCarts,
    Transactions,
    Title,
    TransactionsList
} from './styles';


export function Dashboard() {
    const data = [
        {
        title:"Desenvolvimento de site",
        amount:"R$12.000,00",
        category: {
            name: 'Vendas',
            icon: 'dollar-sign'
        },
        date:"13/04/2021"
    },{
        title:"Desenvolvimento de site",
        amount:"R$12.000,00",
        category: {
            name: 'Vendas',
            icon: 'dollar-sign'
        },
        date:"13/04/2021"
    },{
        title:"Desenvolvimento de site",
        amount:"R$12.000,00",
        category: {
            name: 'Vendas',
            icon: 'dollar-sign'
        },
        date:"13/04/2021"
    },
];

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

            <Transactions>
                <Title>Listagem</Title>

                <TransactionsList 
                    data={data}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: getBottomSpace() 
                    }}
                /> 

                
            </Transactions>

        </Container>

    )
}
