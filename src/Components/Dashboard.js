import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Layout} from 'antd';
import {Typography, Input,Pagination} from 'antd';
import {Menu, Breadcrumb, Button, Dropdown, Row, Col } from 'antd';
import {AppstoreOutlined, MailOutlined, SettingOutlined, DownOutlined} from '@ant-design/icons';
import {Select} from 'antd';
import {Table, Tag, Space} from 'antd';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import {AutoComplete} from 'antd';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

const {Column, ColumnGroup} = Table;
const mockVal = (str, repeat = 1) => ({
    value: str.repeat(repeat),
});


const data = [
    {
        key: '1',
        Sno: '1',
        BookName: 'Objectives on Agricultural Engineering: (Exclusively for Agriculture Graduates)  ( Code: 7634a   |  ISBN: 9788194377634 ) Active: Yes   Display: Yes Available Stock: ()    Stock Option: In ',
        Author: 'Sujitha E , Vijay P    (Year : 2020  |  Binding: Paper Bond |  Language: English |  Publisher: Agrobios (India) )  ',
        Price: 250.00,
        SubjectCategory: 'TextBook',
        BookType: 'Question Bank',
    },
    {
        key: '2',
        Sno: '2',
        BookName: 'Science and Technology Towards Sustainable Development ( Code: 7634   |  ISBN: 9788194377634 ) Active: Yes   Display: No Available Stock: (0)    Stock Option: In  ',
        Author: 'Lal AB , Srivastava VC (Year : 2020  |  Binding: Hard Bond |  Language: English |  Publisher: Agrobios (India) ) ',
        Price: 2500.00,
        SubjectCategory: '',
        BookType: 'Text-cum-reference Book',
    },

];



const {Option, OptGroup} = Select;

const {SubMenu} = Menu;


const {Title} = Typography;


const {Header, Footer, Sider, Content} = Layout;
const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider/>
        <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
);

function handleChange(value) {
    console.log(`selected ${value}`);
}

class App1 extends Component {
    loginHandle = () => {

        this.props.history.push('/AddNew');

    }
    transactionHandle = () => {

        this.props.history.push('/Transaction');

    }
    transactionHandle1 = () => {

        this.props.history.push('/Receipt');

    }

    render() {
        return (
            <div className="App">

                <Layout>
                    <Header style={{padding: 10}}>
                        <Title style={{color: 'white'}} level={5}>LOGO</Title>
                    </Header>
                    <Layout>
                        <Sider>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['Manage Books']}

                            >
                               
                                <Menu.Item key="Manage Books">Manage Books</Menu.Item>
                                <Menu.Item key="Transactions" onClick={this.transactionHandle}>Transactions</Menu.Item>
                                <Menu.Item key="Receipts" onClick={this.transactionHandle1}>Receipts</Menu.Item>

                                <Menu.Item key="Ledgers">Ledgers</Menu.Item>

                            </Menu>
                        </Sider>
                        <Layout>
                            <Content style={{padding: '0 10px'}}>
                                <Breadcrumb style={{margin: '0 0'}}>
                                    <Breadcrumb.Item style={{color: 'red'}}><b>Books</b></Breadcrumb.Item>
                                </Breadcrumb>
                                <div className="site-layout-content" style={{
                                    background: '#fff',
                                    padding: 2,
                                    margin: 0,
                                    minHeight: 520,
                                   
                                }}
                                >

                                    <Accordion allowZeroExpanded>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    Filter
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <Row>
                                                    <Col span={8}>Category:&nbsp;&nbsp;&nbsp; <Select style={{minWidth: 200, margin: 5}}
                                                                                    onChange={handleChange}>

                                                        <Option value="jack">Jack</Option>
                                                        <Option value="lucy">Lucy</Option>

                                                        <Option value="Yiminghe">yiminghe</Option>

                                                    </Select></Col>
                                                    <Col span={8}>
                                                        Subject:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   <Select style={{width: 180, margin: 5}}
                                                                                   onChange={handleChange}>

                                                        <Option value="jack">Jack</Option>
                                                        <Option value="lucy">Lucy</Option>

                                                        <Option value="Yiminghe">yiminghe</Option>

                                                    </Select></Col>
                                                    <Col span={8}>ISBN:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Input style={{width: 180, margin: 5}}
                                                                               placeholder="ISBN"/></Col>
                                                </Row>
                                                <Row>
                                                    <Col span={8}>Author:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <AutoComplete
                                                        style={{
                                                            width: 180,
                                                            margin: 5
                                                        }}
                                                        placeholder="input here"
                                                    >

                                                        ))
                                                    </AutoComplete></Col>
                                                    <Col span={8}>Publisher:&nbsp;&nbsp; <Select style={{width: 180, margin: 5}}
                                                                                     onChange={handleChange}>


                                                        <Option value="jack">Jack</Option>
                                                        <Option value="lucy">Lucy</Option>
                                                    </Select></Col>
                                                    <Col span={8}>Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Min: <Input style={{width: 70, margin: 5}} />
                                                   Max: <Input style={{width: 70, margin: 5}} /></Col>
                                 
                                                </Row>
                                                <Row>
                                                    <Col span={8}>Binding:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Select style={{width: 180, margin: 5}}
                                                                                   onChange={handleChange}>

                                                        <Option value="jack">Jack</Option>
                                                        <Option value="lucy">Lucy</Option></Select></Col>
                                                    <Col span={8}>Language:&nbsp; <Select style={{width: 180, margin: 5}}
                                                                                    onChange={handleChange}>


                                                        <Option value="jack">Jack</Option>
                                                        <Option value="lucy">Lucy</Option>
                                                    </Select></Col>
                                                    <Col span={8}>Quantity:&nbsp;&nbsp;&nbsp;Min: <Input style={{width: 70, margin: 5}} />
                                                   Max: <Input style={{width: 70, margin: 5}} /> </Col>
                                                </Row>
                                                <Row>
                                                    <Col span={8}>Book name: <AutoComplete
                                                        style={{
                                                            width: 180,
                                                            margin: 5
                                                        }}
                                                        placeholder="input here"
                                                    >

                                                        ))
                                                    </AutoComplete></Col>
                                                    <Col span={8}>Book Type: <Select style={{width: 180, margin: 5}}
                                                                                     onChange={handleChange}>


                                                        <Option value="jack">Jack</Option>
                                                        <Option value="lucy">Lucy</Option>
                                                    </Select></Col>
                                                    <Col span={8}>Year:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Select style={{width: 80, margin: 5}}
                                                                                onChange={handleChange}>


                                                        <Option value="jack">Jack</Option>
                                                        <Option value="lucy">Lucy</Option>
                                                    </Select></Col>
                                                </Row>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                               
                                    <div style={{paddingTop: 10}}>
                                        <Button onClick={this.loginHandle}>Add New</Button>
                                    </div>
                                    <div style={{fontSize: 20, paddingTop: 10}}>
                                        <b>
                                            List of books (40)
                                        </b>
                                    </div>

                                    <Table dataSource={data}>

                                        <Column title="Sno." dataIndex="Sno" key="Sno"/>
                                        <Column title="BookName" dataIndex="BookName" key="BookName"/>

                                        <Column title="Author" dataIndex="Author" key="Author"/>
                                        <Column title="Price" dataIndex="Price" key="Price"/>
                                        <Column title="Subject Category" dataIndex="SubjectCategory"
                                                key="SubjectCategory"/>
                                        <Column title="Book Type" dataIndex="BookType" key="BookType"/>

                                        <Column
                                            title="Action"
                                            key="action"
                                            render={(text, record) => (
                                                <Space size="middle">
                                                    <a>Add </a>
                                                    <a>Delete</a>
                                                </Space>
                                            )}
                                        />

                                    </Table>
                                 
                                </div>
                               
                            </Content>

                            <Footer style={{textAlign: 'center'}}>@Agrobios</Footer>
                        </Layout>

                    </Layout>
                </Layout>
               
            </div>
           
        );
    }
}

export default App1;