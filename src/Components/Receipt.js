import React, {Component} from 'react';
import './App.css';
import {Layout, DatePicker} from 'antd';
import {Typography, Input} from 'antd';
import {Menu, Breadcrumb, Button} from 'antd';
import {Select} from 'antd';
import {Table,Row,Col} from 'antd';
import {Collapse} from 'antd';
import {Radio, Checkbox} from 'antd';
import {useState} from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


import {UploadOutlined} from '@ant-design/icons';


function handleChange(value) {
    console.log(`selected ${value}`);
}

function onChange(date, dateString) {
    console.log(date, dateString);
}


const {Option} = Select;

const {SubMenu} = Menu;


const {Title} = Typography;


const {Header, Footer, Sider, Content} = Layout;

const columns = [
    {
        title: 'S No:',
        dataIndex: 'sno',
        key: 'sno',
    },
    {
        title: 'Rcpt No:',
        dataIndex: 'rcptno',
        key: 'rcptno',
    },
    {
        title: 'Received Amt.',
        dataIndex: 'reca',
        key: 'reca',
    },
    {
        title: 'Received Date',
        dataIndex: 'recd',
        key: 'recd',
    },
    {
        title: 'Party/Order No.',
        dataIndex: 'party',
        key: 'party',
    },
    {
        title: 'Description',
        dataIndex: 'desc',
        key: 'desc',
    },
    {
        title: 'Bill No./Bill Date',
        dataIndex: 'bill',
        key: 'bill',
    },
    {
        title: 'Invoice Amount:',
        dataIndex: 'inv',
        key: 'inv',
    },
    {
        title: 'status',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'Action',
        dataIndex: 'act',
        key: 'act',
    },
    {
        title: 'Received Amount:',
        dataIndex: 'reca',
        key: 'reca',
    },
];
const data = [];

class App5 extends Component {
    transactionHandle = () => {
    
        this.props.history.push('/Transaction');
      
      }
    transactionHandle3 = () => {

        this.props.history.push('/NewReceipt');

    }
    transactionHandle1 = () => {

        this.props.history.push('/Receipt');
    
    }
    transactionHandle2 = () => {
    
      this.props.history.push('/Dashboard');
    
    }

    render() {
     
        return (
            <div className="App5">

                <Layout>
                    <Header style={{padding: 10}}>
                        <Title style={{color: 'white'}} level={5}>LOGO</Title>
                    </Header>
                    <Layout>
                        <Sider>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['3']}

                            >
                              
                                    <Menu.Item key="1"  onClick={this.transactionHandle2}>Manage Books</Menu.Item>
                                    <Menu.Item key="2"  onClick={this.transactionHandle}>Transactions</Menu.Item>
                                    <Menu.Item key="3"  onClick={this.transactionHandle1}>Receipts</Menu.Item>
                              
                                <Menu.Item key="Ledgers">Ledgers</Menu.Item>

                            </Menu>
                        </Sider>
                        <Layout>
                            <Content style={{padding: '0 20px'}}>
                                <Breadcrumb style={{margin: '0 0'}}>
                                </Breadcrumb>
                                <div className="site-layout-content" style={{
                                    background: '#fff',
                                    padding: 2,
                                    margin: 0,
                                    minHeight: 520,
                                }}
                                >
                                 
                                    <h2>Receipts</h2>
                                    <Button type="primary" onClick={this.transactionHandle3}>New Receipt</Button>
                                    <Button type="primary" style={{margin:20,width:180}}>Deposit Pending List</Button>
                                    <Accordion allowZeroExpanded>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                   Search
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                            
                                   <Row><Col span={8}>
                                       <b>Bill Company:&nbsp;</b>
                                       <Select defaultValue="lucy" style={{width: 155,margin:5}} onChange={handleChange}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Bill Company</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select></Col>
                                        <Col span={4}><b style={{margin:5}}>Bill Date </b></Col>
                                        <Col span={12}>
                                        From: <DatePicker  style={{width:152,margin:4}} onChange={onChange}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        To: <DatePicker style={{width:155}} onChange={onChange}/>
                                    </Col>
                                    </Row>
                                    <Row>
                                        <Col span={8}>
                                        <b >Bill No:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b><Input style={{width: 155, padding: 5,margin:5}}/>
                                        </Col>
                                        <Col span={4}>
                                        <b style={{margin:5}}>Bill Amount</b> </Col>
                                        <Col span={12}>
                                            From:<Input style={{width: 155,padding:5,margin:5}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To:&nbsp;<Input style={{width: 155}}/>
                                        </Col>
                                    </Row>
                                      <Row>
                                          <Col span={8}>
                                          <b>Receipt No:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b><Input
                                        style={{width: 155, padding: 5,margin:5}}/>
                                        </Col>
                                    <Col span={4}>
                                    <b>Receipt Amount</b></Col>
                                    <Col span={12}>  From:<Input style={{width: 155,padding:5,margin:5}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To:&nbsp;<Input
                                        style={{width: 155}}/>
                                    </Col > 
                                      </Row>
                                      <Row>
                                          <Col span={8}><b>Client Type:&nbsp;&nbsp;&nbsp;&nbsp;</b>
                                    &nbsp;<Select defaultValue="lucy" style={{width: 154,margin:5}} onChange={handleChange}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">--Select Client Type--</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select></Col>
                                    <Col span={5}>
                                       <b>Client Name:</b> </Col>
                                       <Col span={10}>
                                       <Input style={{width:360,margin:5}} placeholder="Client Name"/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={8}>
                                       <b>Ref No:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </b><Input style={{width: 155,margin:5}} placeholder="Ref No."/>
                                        </Col>
                                        <Col span={5}>
                                        <b>Payment Mode:</b>
                                        </Col>
                                        <Col span={10}>
                                        <Select defaultValue="lucy" style={{width: 190,margin:5}}
                                                             onChange={handleChange}>
                                            <Option value="jack">Jack</Option>
                                            <Option value="lucy">--Select--</Option>
                                            <Option value="Yiminghe">yiminghe</Option>
                                        </Select>
                                    
                                        </Col>
                                        <Button type="primary">Search</Button>
                                    </Row>
                                    
                                        
                                    <br/>
                                  

                               </AccordionItemPanel>
                                </AccordionItem>
                                </Accordion>
                                
                                    <p style={{background: "lightblue"}}>Receipts</p>
                                    <Table columns={columns} dataSource={data}/>

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


export default App5;