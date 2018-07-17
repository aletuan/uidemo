/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Text,
    Accordion,
    ActionSheet,
    Root,
    Badge,
} from 'native-base';

var BUTTONS = ['Option 0', 'Option 1', 'Option 2', 'Delete', 'Cancel'];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

export default class App extends Component { 
    
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        const dataArray = [
            { title: 'First Element', content: 'Lorem ipsum dolor sit amet' },
            { title: 'Second Element', content: 'Lorem ipsum dolor sit amet' },
            { title: 'Third Element', content: 'Lorem ipsum dolor sit amet' }
        ];        

        return (
            <Root>
                <Container>
                    <Header>
                        <Left>
                            <Button transparent>
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Header</Title>
                        </Body>
                        <Right />
                    </Header>
                    <Content padder>
                        <Accordion 
                            dataArray={dataArray} 
                            expanded={0} 
                            icon="add" 
                            expandedIcon="remove" 
                            iconStyle={{ color: 'green' }}
                            expandedIconStyle={{ color: 'red' }}
                            headerStyle={{ backgroundColor: '#b7daf8' }}
                            contentStyle={{ backgroundColor: '#ddecf8' }}
                        />
                        <Button
                            block
                            onPress={() => 
                                ActionSheet.show(
                                    {
                                        options: BUTTONS,
                                        cancelButtonIndex: CANCEL_INDEX,
                                        destructiveButtonIndex: DESTRUCTIVE_INDEX,
                                        title: 'Testing ActionSheet'
                                    },
                                    buttonIndex => {
                                        this.setState({ clicked: BUTTONS[buttonIndex] });
                                    }                                
                                )
                            }
                        >
                            <Text>Actionsheet</Text>
                        </Button>
                        <Badge>
                            <Text>2</Text>
                        </Badge>
                        <Badge primary>
                            <Text>2</Text>
                        </Badge>
                        <Badge success>
                            <Text>2</Text>
                        </Badge>
                        <Button bordered rounded light><Text> Light </Text></Button>
                        <Button bordered rounded primary><Text> Primary </Text></Button>
                        <Button bordered rounded success><Text> Success </Text></Button>
                        <Button bordered rounded info><Text> Info </Text></Button>
                        <Button bordered rounded warning><Text> Warning </Text></Button>
                        <Button bordered rounded danger><Text> Danger </Text></Button>
                        <Button bordered rounded dark><Text> Dark </Text></Button>                        
                    </Content>
                    <Footer>
                        <FooterTab>
                            <Button full>
                                <Text>Footer</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            </Root>
        );
    }
}
