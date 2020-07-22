import React, {Component} from 'react';
import './App.css';
import {Layout} from 'antd';
import {Typography, Input,Row,Col,DatePicker} from 'antd';
import {Menu, Breadcrumb, Button} from 'antd';
import {Select} from 'antd';
import {Table} from 'antd';
import {Collapse} from 'antd';
import {Radio, Checkbox} from 'antd';
import {useState} from 'react';


import {UploadOutlined} from '@ant-design/icons';

const columnsA = [
    {
        title: 'S.No',
        dataIndex: 'sno',
    },
    {
        title: 'Selected Author',
        dataIndex: 'selauth',
    },
    {
        title: 'Royalty',
        dataIndex: 'royal',
    },
    {
        title: 'Delete',
        dataIndex: 'del',
    },
];
const dataA = [
    {
        key: '1',
        sno: 1,
        selauth: 'Saha,T',
        royal: 5,
        del: ''
    },
    {
        key: '2',
        sno: 2,
        selauth: 'Managanvi, K ',
        royal: 0,
        del: ''
    },
    {
        key: '3',
        sno: 3,
        selauth: 'Chandran, N  ',
        royal: 0,
        del: ''
    },
];
const columns = [

    {
        title: 'S.No',
        dataIndex: 'sno',
    },
    {
        title: 'Subject',
        dataIndex: 'name',

    },

];
const data = [
    {
        key: '1',
        sno: 1,
        name: ' 5th Deans Committee    ',
    },
    {
        key: '2',
        sno: 2,
        name: ' 5th Deans Committee (as per)    ',

    },
    {
        key: '3',
        sno: 3,
        name: '  AGRIBUSINESS    ',

    },
    {
        key: '4',
        sno: 4,
        name: ' AGRICULTURAL CHEMISTRY    ',

    },
    {
        key: '5',
        sno: 5,
        name: '  Agricultural Communication    ',

    },
    {
        key: '6',
        sno: 6,
        name: '  AGRICULTURAL WASTE AND MANAGEMENT    ',

    },
    {
        key: '7',
        sno: 7,
        name: '  AGROCHEMICALS    ',

    },
    {
        key: '8',
        sno: 8,
        name: '    AGROFORESTRY    ',

    },
    {
        key: '9',
        sno: 9,
        name: ' AGROMETEOROLOGY, REMOTE SENSING & GIS    ',

    },
    {
        key: '10',
        sno: 10,
        name: ' AGRONOMY  ',

    },

];
const data1 = [
    {
        key: '1',
        sno: 1,
        name: '   AIR ENVIRONMENT      ',
    },
    {
        key: '2',
        sno: 2,
        name: '   BIODIVERSITY  ',

    },
    {
        key: '3',
        sno: 3,
        name: '  DISASTER MANAGEMENT ',

    },
    {
        key: '4',
        sno: 4,
        name: '  ENVIRONMENT EDUCATION      ',

    },
    {
        key: '5',
        sno: 5,
        name: '   ENVIRONMENTAL ANALYSIS      ',

    },
    {
        key: '6',
        sno: 6,
        name: '   ENVIRONMENTAL BIOTECHNOLOGY      ',

    },
    {
        key: '7',
        sno: 7,
        name: '  ENVIRONMENTAL SCIENCE      ',

    },
    {
        key: '8',
        sno: 8,
        name: '    GLOBAL WARMING      ',

    },
    {
        key: '9',
        sno: 9,
        name: ' MICROBIOLOGY    ',

    },
    {
        key: '10',
        sno: 10,
        name: ' NATURAL RESOURCES  ',

    },

];
const data2 = [
    {
        key: '1',
        sno: 1,
        name: '    AGRICULTURAL SCIENCES        ',
    },
    {
        key: '2',
        sno: 2,
        name: '   LIFE SCIENCES ',

    },
    {
        key: '3',
        sno: 3,
        name: '   VETERINARY AND ANIMAL SCIENCE        ',

    },
];

const data3 = [
    {
        key: '1',
        sno: 1,
        name: '     CHILD DEVELOPMENT        ',
    },
    {
        key: '2',
        sno: 2,
        name: '   CLOTHING ',

    },
    {
        key: '3',
        sno: 3,
        name: '   FOODS AND NUTRITION        ',

    },
];

const data4 = [
    {
        key: '1',
        sno: 1,
        name: '    BIOCHEMISTRY        ',
    },
    {
        key: '2',
        sno: 2,
        name: '   BIOTECHNOLOGY ',

    },
    {
        key: '3',
        sno: 3,
        name: '  BOTANY ',

    },
    {
        key: '4',
        sno: 4,
        name: '  DEVELOPMENTAL BIOLOGY      ',

    },
    {
        key: '5',
        sno: 5,
        name: '   ECONOMIC BOTANY     ',

    },
    {
        key: '6',
        sno: 6,
        name: '   ETHNOBOTANY      ',

    },
    {
        key: '7',
        sno: 7,
        name: '  GENETICS      ',

    },
    {
        key: '8',
        sno: 8,
        name: '    HOME SCIENCE      ',

    },
    {
        key: '9',
        sno: 9,
        name: ' HUMAN HEALTH ',

    },
    {
        key: '10',
        sno: 10,
        name: '  MEDICINAL & AROMATIC PLANTS        ',

    },

];
const data5 = [
    {
        key: '1',
        sno: 1,
        name: '     AGRICULTURAL SCIENCES          ',
    },
    {
        key: '2',
        sno: 2,
        name: '    ENVIRONMENTAL SCIENCES          ',

    },
    {
        key: '3',
        sno: 3,
        name: '   HINDI TEXTBOOKS          ',

    },
    {
        key: '4',
        sno: 4,
        name: '   LIFE SCIENCES          ',

    },
    {
        key: '5',
        sno: 5,
        name: '   PHARMACY    ',

    },
    {
        key: '6',
        sno: 6,
        name: '    VETERINARY AND ANIMAL SCIENCES          ',

    },
];
const data6 = [
    {
        key: '1',
        sno: 1,
        name: '     ANIMAL BEHAVIOUR          ',
    },
    {
        key: '2',
        sno: 2,
        name: '    ANIMAL BIOTECHNOLOGY          ',

    },
    {
        key: '3',
        sno: 3,
        name: '   ANIMAL BREEDING          ',

    },
    {
        key: '4',
        sno: 4,
        name: '   ANIMAL DISEASES          ',

    },
    {
        key: '5',
        sno: 5,
        name: '    ANIMAL ECOLOGY          ',

    },
    {
        key: '6',
        sno: 6,
        name: '    ANIMAL HUSBANDRY          ',

    },
    {
        key: '7',
        sno: 7,
        name: '   ANIMAL NUTRITION          ',

    },
    {
        key: '8',
        sno: 8,
        name: '     ANIMAL PRODUCTS          ',

    },
    {
        key: '9',
        sno: 9,
        name: '  BEEKEEPING          ',

    },
    {
        key: '10',
        sno: 10,
        name: '   DAIRY SCIENCE          ',

    },

];
const columns1 = [
    {
        title: 'S No:',
        dataIndex: 'sno',
        key: 'sno',
    },
    {
        title: 'Code:',
        dataIndex: 'rcptno',
        key: 'rcptno',
    },
    {
        title: 'Name',
        dataIndex: 'reca',
        key: 'reca',
    },
    {
        title: 'Avl Qty',
        dataIndex: 'recd',
        key: 'recd',
    },
    {
        title: 'Qty',
        dataIndex: 'party',
        key: 'party',
    },
    {
        title: 'Price',
        dataIndex: 'desc',
        key: 'desc',
    },
    {
        title: 'Dis.(%)',
        dataIndex: 'bill',
        key: 'bill',
    },
    {
        title: 'Amount',
        dataIndex: 'inv',
        key: 'inv',
    },
    {
        title: 'Remove',
        dataIndex: 'status',
        key: 'status',
    },
   
];
const columns2 = [
    {
        title: 'AddOn Head',
        dataIndex: 'sno',
        key: 'sno',
    },
    {
        title: 'Type',
        dataIndex: 'rcptno',
        key: 'rcptno',
    },
    {
        title: 'Amount',
        dataIndex: 'reca',
        key: 'reca',
    },
    {
        title: 'Remove',
        dataIndex: 'recd',
        key: 'recd',
    }
    
   
];


const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};

const Demo = () => {
    const [selectionType, setSelectionType] = useState('checkbox');

    return (
        <div>
            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
            />
        </div>
    );
};
const Demo1 = () => {
    const [selectionType, setSelectionType] = useState('checkbox');

    return (
        <div>
            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data1}
            />
        </div>
    );
};
const Demo2 = () => {
    const [selectionType, setSelectionType] = useState('checkbox');

    return (
        <div>
            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data2}
            />
        </div>
    );
};
const Demo3 = () => {
    const [selectionType, setSelectionType] = useState('checkbox');

    return (
        <div>
            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data3}
            />
        </div>
    );
};
const Demo4 = () => {
    const [selectionType, setSelectionType] = useState('checkbox');

    return (
        <div>
            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data4}
            />
        </div>
    );
};
const Demo5 = () => {
    const [selectionType, setSelectionType] = useState('checkbox');

    return (
        <div>
            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data5}
            />
        </div>
    );
};
const Demo6 = () => {
    const [selectionType, setSelectionType] = useState('checkbox');

    return (
        <div>
            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data6}
            />
        </div>
    );
};

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

const {Panel} = Collapse;

function callback(key) {
    console.log(key);
}


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
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const text1 = `The present book Objectives on Agricultural Engineering (Exclusively for Agri Graduates) is written primarily for those who have received more previous instructions in the field of examinations. Its purpose is to introduce the intelligence and knowledge to success in the competitive examinations. It contains more than 2000 multiple choice, fill in the blanks and true or false type question on four Divisions of Discipline of Agricultural Engineering as Soil and Water Conservation Engineering, Farm Machinery and Power, Protected Cultivation and Secondary Agricultural and Renewable Energy and Green Technology. This book should serve as a useful resource to the agriculture graduates appearing for various competitive exams such as ICAR, GATE, JRF and for their curriculum etc. We will fell more satisfaction if this book would serve the purpose of students to success in their various examinations.`;
const text2 = `SOIL AND WATER CONSERVATION ENGINEERING`;
const text3 = `Unit I: Surveying
Unit II: Soil Erosion
Unit III: Soil Conservation and Watershed Management
Unit IV: Irrigation and Drainage
Unit V: Wells and Pumps
FARM MACHINERY AND POWER 
Unit I: Farm Power and IC Engines
Unit II: Tractor and Functional Components
Unit III: Tillage Implements
Unit IV: Sowing and Intercultural Implements
Unit V: Plant Protection and Harvesting Equipment’s
PROTECTED CULTIVATION AND SECONDARY AGRICULTURE 
Unit I: Introduction to Protected Cultivation and Green houses
Unit II: Design of Greenhouses
Unit III: Application of Greenhouses
UNIT IV: Engineering Propertied of Food Materials
Unit V: Drying and Dehydration
Unit VI: Material Handling
RENEWABLE ENERGY AND GREEN TECHNOLOGY
Unit I: Introduction to Renewable Energy Sources
Unit II: Biochemical Energy Conversion
Unit III: Thermochemical Energy Conversion
Unit IV: Solar Energy Conversion
Unit V: Wind and other Renewable Energy Sources`;

function handleChange(value) {
    console.log(`selected ${value}`);
}


class App4 extends Component {
    state = {
        value: 2,
      };
    
      onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
      };
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
            <div className="App">

                <Layout>
                    <Header style={{padding: 10}}>
                        <Title style={{color: 'white'}} level={5}>AGROBIOS</Title>
                    </Header>
                    <Layout>
                        <Sider>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['2']}

                            >
                              
                                    <Menu.Item key="1" onClick={this.transactionHandle2}>Manage Books</Menu.Item>
                               

                                <Menu.Item key="2" onClick={this.transactionHandle}>Transactions</Menu.Item>
                                <Menu.Item key="3" onClick={this.transactionHandle1}>Receipts</Menu.Item>
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
                                    <Collapse defaultActiveKey={['1']} onChange={callback}>
                                        <Panel header="Sales New Entry" key="1">

                                         

                                          <div>
                                              Customer: <Select defaultValue="Distributor" style={{width: 150, margin: 5}}
                                                                    onChange={handleChange}>
                                                    <Option value="jack">Jack</Option>
                                                    <Option value="lucy">Question Bank</Option>
                                                </Select>
                                                  <Input style={{width: 150, margin: 5}}
                                                                    placeholder="Client Name"/>
                                                Date:<DatePicker style={{width: 150, margin: 5,}}/>
                                                Bill Company:<Input style={{width: 150, margin: 5,}}
                                                              placeholder="9788194377634"/>
                                                Bill Number:<Input style={{width: 150, margin: 5,}}
                                                              placeholder="9788194377634"/>
                                            </div>
                                           <b>Product Info</b>
                                         <Input placeholder="Enter Item Code"></Input>
                                         <br/>
                                         <br/>
                                         <Table columns={columns1} />
                                        <br/>
                                        <br/>
                                        <br/>
                                        <div>Additional AddOn: <Input style={{width: 223, margin: 5,}}
                                                              placeholder="Enter Add On here"/>
                                                <Input style={{width: 150, margin: 5,}}
                                                              placeholder="Enter Value"/>  <Button style={{width:80}}>+ Add</Button>
                                                             <b style={{marginLeft:225}}>  Total: </b> <Input style={{ width: 150,marginLeft:45}}></Input> 
                                                              </div>
                                                              <br/>
                                         <br/>
                                         <Table columns={columns2} />
                                         <br/>
                                         <b style={{marginLeft:825}}> Grand Total: </b> <Input style={{ width: 150}}></Input>   
                                        </Panel>

                                        <Panel header="Invoice Options" key="5">
                                        <Row>
                                         <Col span={8}>Reference No. :&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; <Input style={{width: 150, margin: 5,}}
                                                              placeholder="Ref. No"/>  </Col>
                                           <Col span={8}>Reference Date:&nbsp;&nbsp;&nbsp;   <DatePicker style={{width: 150, margin: 5,}}
                                                              />  </Col>
                                     
                                             
                                        </Row>
                                        <Row>
                                        <Col span={8}>Dispatch By :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Select defaultValue="Indian Postal Services" style={{width: 150, margin: 5}}
                                                                    onChange={handleChange}>
                                                    <Option value="jack">Jack</Option>
                                                    <Option value="lucy">Question Bank</Option>
                                                </Select></Col>
                                           <Col span={8}>Courier/Agency:&nbsp;&nbsp;&nbsp;<Select defaultValue="--N/A--" style={{width: 150, margin: 5}}
                                                                    onChange={handleChange}>
                                                    <Option value="jack">Jack</Option>
                                                    <Option value="lucy">Question Bank</Option>
                                                </Select>
                                                </Col>

                                                
                                              
                                               
                                               
                                        </Row>
                                        <Row>
                                        <Col span={8}>Dispatch No. : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Input style={{width: 153, margin: 5,}}
                                                              placeholder="Dispatch No."/>  </Col>
                                           <Col span={8}>Dispatch Date: &nbsp;&nbsp;&nbsp; <DatePicker style={{width: 150, margin: 5,}}
                                                              />  </Col>
                                           
                                        </Row>
                                        <Row>
                                        <Col span={8}>Number Of Packets: <Input style={{width: 150, margin: 5}}
                                                              placeholder="Number Of Packets"/>  </Col>
                                           <Col span={8}>Transaction Type: <Select defaultValue="Credit" style={{width: 150, margin: 5}}
                                                                    onChange={handleChange}>
                                                    <Option value="jack">Jack</Option>
                                                    <Option value="lucy">Question Bank</Option>
                                                </Select>
                                                </Col>
                                       
                                        </Row>
                                        <Row>
                                        <Col span={8}><b>Remarks :</b>
                                        <textarea style={{width:300}} placeholder="Write the description if required"></textarea>
                                                </Col>
                                        <Col span={8}><b>Advance Amt.(If any):</b>&nbsp;&nbsp;&nbsp;
                                            <Radio.Group onChange={this.onChange} value={this.state.value} >
                                                        <Radio value={1} >Yes</Radio>
                                                        <Radio value={2} style={{margin:30}}>No</Radio>
                                                       
                                             </Radio.Group> 
                                             </Col>
                                            </Row>
                                        <Row style={{marginLeft:500}}>
                                        <Col><Button style={{width:100,margin:20}}>Cancel POS</Button></Col>
                                        <Col><Button style={{width:100,margin:20}}>Save</Button></Col>
                                        <Col><Button style={{width:200,margin:20}}>Save & Print Invoice</Button></Col></Row>
                                           
                                        </Panel>

                                    </Collapse>


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

export default App4;
