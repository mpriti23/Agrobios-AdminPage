import React, {Component} from 'react';
import './App.css';
import {Layout} from 'antd';
import {Typography, Input, DatePicker,Row,Col} from 'antd';
import {Menu, Breadcrumb, Button, Dropdown} from 'antd';
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

function onChange(date, dateString) {
    console.log(date, dateString);
}


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

class App3 extends Component {
    loginHandle = () => {

        this.props.history.push('/AddNew');

    }
    transactionHandle = () => {

        this.props.history.push('/Transaction');

    }
    transactionHandle1 = () => {

        this.props.history.push('/Receipt');

    }
    transactionHandle2= () => {

      this.props.history.push('/Dashboard');

  }
  transactionHandle3= () => {

    this.props.history.push('/NewSalesEntry');

}

    render() {
        return (
            <div className="App">

                <Layout>
                    <Header style={{padding: 10}}>
                        <Title style={{color: 'white'}} level={5}>AGROBIOS</Title>
                    </Header>
                    <Layout>
                        <Sider>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['Dashboard']}

                            >
                               
                               
                                    <Menu.Item key="1" onClick={this.transactionHandle2}>Manage Books</Menu.Item>

                              

                                <Menu.Item key="2" onClick={this.transactionHandle}>Transactions</Menu.Item>
                                <Menu.Item key="3" onClick={this.transactionHandle1}>Receipts</Menu.Item>
                                <Menu.Item key="Ledgers">Ledgers</Menu.Item>

                            </Menu>
                        </Sider>
                        <Layout>
                            <Content style={{padding: '0 20px'}}>
                             
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
                                                <div className="site-layout-content" style={{
                                                    background: '#fff',
                                                    padding: 2,
                                                    margin: 0,
                                                    minHeight: 100,
                                                }}
                                                >
                                                   <Row>
                                                     <Col span={8}>    Bill Company: <Select style={{width: 180, margin: 5}}
                                                                              onChange={handleChange}>

                                                        <Option value="jack">Jack</Option>
                                                        <Option value="lucy">Lucy</Option>

                                                        <Option value="Yiminghe">yiminghe</Option>

                                                    </Select></Col>

                                                      <Col span={8}>  Bill Date: From: <DatePicker style={{width: 180, margin: 5}} onChange={onChange}/></Col>
                                                      <Col span={8}> To:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <DatePicker style={{width: 180, margin: 5}} onChange={onChange}/></Col>

                                                      
                                                   </Row>
                                                   <Row>
                                                   <Col span={8}>  Sale type:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Select style={{width: 180, margin: 5}}
                                                                          onChange={handleChange}>


                                                        <Option value="jack">Jack</Option>
                                                        <Option value="lucy">Lucy</Option>
                                                    </Select></Col>

                                                    <Col span={8}>    Status:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Select style={{width: 180, margin: 5}}
                                                                        onChange={handleChange}>


                                                        <Option value="jack">Jack</Option>
                                                        <Option value="lucy">Lucy</Option>
                                                    </Select></Col>
                                                    <Col span={8}>   Bill amount&nbsp;&nbsp;From :<Input
                                                        style={{width: 50, margin: 5}}/>   To: <Input
                                                        style={{width: 50, margin: 5}}/></Col>
                                                      <Col span={8}>   Pay type:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Select style={{width: 180, margin: 5}}
                                                                          onChange={handleChange}>
                                                        <Option value="jack">Jack</Option>
                                                        <Option value="lucy">Lucy</Option></Select></Col>
                                                       <Col span={8}> Client type:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Select style={{width: 180, margin: 5}}
                                                                             onChange={handleChange}>

                                                        <Option value="jack">Jack</Option>
                                                        <Option value="lucy">Lucy</Option>
                                                    </Select></Col>
                                                        <Input style={{width: 300, margin: 5}}/>
                                                   </Row>
                                                  
                                                   <Button style={{marginLeft:450,width:180}}>Search</Button>
                                                  

                                                </div>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                               
                                    <div style={{paddingTop: 10}}>
                                        <Button onClick={this.transactionHandle3}>New Sales Entry</Button>
                                    </div>
                                    <div style={{fontSize: 20, paddingTop: 10}}>
                                        <b>
                                            Sale Transactions
                                        </b>
                                    </div>

                                    <Table dataSource={data}>

                                        <Column title="Sno." dataIndex="Sno" key="Sno"/>
                                        <Column title="Company" dataIndex="BookName" key="BookName"/>

                                        <Column title="Bill No" dataIndex="Author" key="Author"/>
                                        <Column title="Bill Date" dataIndex="Price" key="Price"/>
                                        <Column title="Pay Type" dataIndex="SubjectCategory" key="SubjectCategory"/>
                                        <Column title="Order/Party No." dataIndex="BookType" key="BookType"/>
                                        <Column title="Bill amount  " dataIndex="BookType" key="BookType"/>
                                        <Column title="Other Charge" dataIndex="BookType" key="BookType"/>
                                        <Column title="Total amount" dataIndex="BookType" key="BookType"/>
                                        <Column title="Creation Date" dataIndex="BookType" key="BookType"/>

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

export default App3;