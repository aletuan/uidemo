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
    List,
    ListItem,
    Switch,
    Separator,
} from 'native-base';

import { Col, Row, Grid } from 'react-native-easy-grid';

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
                                <Icon name='menu' type='MaterialIcons' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Header</Title>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name='search' type='MaterialIcons' />
                            </Button>
                            <Button transparent>
                                <Icon name='heart' type='MaterialIcons' />
                            </Button>
                            <Button transparent>
                                <Icon name='more' type='MaterialIcons' />
                            </Button>
                        </Right>
                    </Header>
                    <Content padder>
                        <Grid>
                            <Row>
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
                            </Row>
                            <Row>
                                <Button
                                    iconLeft
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
                                    <Icon name='home' type='MaterialIcons' />
                                </Button>
                            </Row>
                            <Row>                                
                                <Badge>
                                    <Text>2</Text>
                                </Badge>
                                <Badge primary>
                                    <Text>2</Text>
                                </Badge>
                                <Badge success>
                                    <Text>2</Text>
                                </Badge>
                            </Row>
                            <Row>
                                <Col>
                                    <Button bordered rounded primary><Text> Primary </Text></Button>
                                </Col>
                                <Col>
                                    <Button bordered rounded success><Text> Success </Text></Button>
                                </Col>
                            </Row>
                        </Grid>   

                        <List>
                            <Separator bordered>
                                <Text>Settings</Text>
                            </Separator>                            
                            <ListItem selected icon>
                                <Left>
                                    <Button style={{ backgroundColor: '#FF9501' }}>
                                        <Icon active name='plain' type='MaterialIcons' />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text>Airplain Mode</Text>
                                </Body>
                                <Right>
                                    <Switch value={false} />
                                </Right>
                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Button style={{ backgroundColor: '#007AFF' }}>
                                        <Icon active name="wifi" />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text>Wi-Fi</Text>
                                </Body>
                                <Right>
                                    <Text>GeekyAnts</Text>
                                    <Icon active name="arrow-forward" />
                                </Right>
                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Button style={{ backgroundColor: '#007AFF' }}>
                                        <Icon active name="bluetooth" />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text>Bluetooth</Text>
                                </Body>
                                <Right>
                                    <Text>On</Text>
                                    <Icon active name="arrow-forward" />
                                </Right>
                            </ListItem>
                        </List>

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
