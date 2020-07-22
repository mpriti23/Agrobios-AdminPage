import React, {Component} from 'react';
import './App.css';
import {Layout} from 'antd';
import {Typography, Input,DatePicker} from 'antd';
import {Menu, Breadcrumb, Button,Row, Col} from 'antd';
import {Select,Space} from 'antd';
import {Table} from 'antd';
import {Collapse} from 'antd';
import {Radio, Checkbox} from 'antd';
import {useState} from 'react';


import {UploadOutlined} from '@ant-design/icons';
const {Column}=Table;

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
        title: 'Action',
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
        del: 'Edit'
    },
    {
        key: '3',
        sno: 3,
        selauth: 'Chandran, N  ',
        royal: 0,
        del: 'Edit'
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
const data7 =[
  {
  key: '1',
  name: 'Entrepreneurs '
  } 
]; 
function onChange1(date, dateString) {
  console.log(date, dateString);
}


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
const Demo7 = () => {
  const [selectionType, setSelectionType] = useState('checkbox');

  return (
      <div>
          
               
          <Table
              rowSelection={{
                  type: selectionType,
                  ...rowSelection,
              }}
              columns={columnsA}
              dataSource={dataA}
          >  </Table>
   
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


class App7 extends Component {
  transactionHandle = () => {

    this.props.history.push('/Transaction');

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
                        <Title style={{color: 'white'}} level={5}>LOGO</Title>
                    </Header>
                    <Layout>
                        <Sider>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['Manage Books']}

                            >
                               
                                
                          
                                <Menu.Item key="Manage Books" onClick={this.transactionHandle2}>Manage Books</Menu.Item>
                               
                                <Menu.Item key="Transactions" onClick={this.transactionHandle}>Transactions</Menu.Item>
                                <Menu.Item key="Receipts" onClick={this.transactionHandle1}>Receipts</Menu.Item>
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
                                        <Panel header="Book Creation" key="1">
                                        <Row>
                                       <Col span={4}><Checkbox onChange={onChange}></Checkbox>&nbsp; Active/Inactive</Col>
                                       <Col span={4}> <Checkbox onChange={onChange}></Checkbox>&nbsp;Display/Hide</Col>
                                       </Row>
                                        <Row>
                                       
                                                    <Col span={8}>Book Name* :<Input style={{width: 180, margin: 5}}
                                                                    defaultValue="Objectives on Agricultural Engineering: (Exclusively for Agriculture Graduates)"/></Col>
                                               <Col span={8}> Book Type : <Select defaultValue="lucy" style={{width: 180, margin: 5}}
                                                                    onChange={handleChange}>
                                                    <Option value="jack">Jack</Option>
                                                    <Option value="lucy">Question Bank</Option>
                                                </Select> </Col>
                                                <Col span={8}> Book Code* : <Input style={{width: 190, margin: 5}}
                                                                    defaultValue="7634a"/></Col>

                                                      
                                                </Row>
                                           
                                               
                                           
                                          
                                            <Row>
                                               <Col span={8}> ISBN* :<Input style={{width: 223, margin: 5,}}
                                                              defaultValue="9788194377634"/></Col>
                                                <Col span={8}>Edition* :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Input style={{width: 180, margin: 5}} defaultValue="1"/></Col>
                                                <Col span={8}> Volume* :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Input style={{width: 190, margin: 5}} defaultValue="1"/></Col>
                                            </Row>
                                          <Row>
                                           
                                          <Col span={8}>   Size : <Select defaultValue="lucy" style={{width: 230, margin: 5}}
                                                               onChange={handleChange}>
                                                <Option value="jack">Jack</Option>
                                                <Option value="lucy">AMERICAN ROYAL</Option>
                                            </Select></Col>
                                            <Col span={8}>Weight :&nbsp;<Input style={{width: 100, margin: 5}} defaultValue="150"/>
                                                <Select defaultValue="lucy" style={{width: 90, margin: 5}}
                                                        onChange={handleChange}>
                                                    <Option value="jack">Jack</Option>
                                                    <Option value="lucy">Gms</Option>
                                                </Select> </Col>
                                                <Col span={8}> Binding : <Select defaultValue="lucy" style={{width: 215, margin: 5}}
                                                                  onChange={handleChange}>
                                                <Option value="jack">Jack</Option>
                                                <Option value="lucy">Paper Bond</Option>
                                            </Select></Col>
                                           </Row>
                                           <Row>
                                              <Col span={8}>  Language* : <Select defaultValue="lucy" style={{width: 188, margin: 5}}
                                                                    onChange={handleChange}>
                                                <Option value="jack">Jack</Option>
                                                <Option value="lucy">ENGLISH</Option>
                                            </Select></Col>
                                  
                                            <Col span={8}>   Current Pub. Year :<Input style={{width: 140, margin: 5}}
                                                                          defaultValue="2020"/></Col>
                                                <Col span={8}>    Ist Publishing Year : <Input style={{width: 150, margin: 5}}
                                                                             defaultValue="2020"/></Col>
                                           </Row>
                                          <Row>
                                          <Col span={8}>   Retail Price* :<Input style={{width: 185, margin: 5,}}
                                                                      defaultValue="250.00"/> </Col>
                                          <Col span={8}>      Whole Sale Price :<Input style={{width: 145, margin: 5}}
                                                                         defaultValue="250.00"/> </Col>
                                          <Col span={8}>  Total Pages :<Input style={{width: 195, margin: 5}} defaultValue="10"/> </Col>

                                          </Row>

                                            <Row>
                                               <Col span={8}> Color Pages :<Input style={{width: 185, margin: 5}} defaultValue="0"/></Col>
                                               <Col span={8}> Front Cover : <Button style={{width: 172, margin: 5}}>
                                                <UploadOutlined/> Click to Upload
                                            </Button></Col>

                                              <Col span={8}>  Publisher* :&nbsp;&nbsp;&nbsp;<Select defaultValue="lucy" style={{width: 190, margin: 5}}
                                                                    onChange={handleChange}>
                                                <Option value="jack">Jack</Option>
                                                <Option value="lucy">Agrobios(India)</Option>
                                            </Select></Col>

                                          </Row>
                                            <Row>
                                            <Col span={8}>  Back Page :&nbsp;&nbsp; <Button style={{width: 185, margin: 5}}>
                                                <UploadOutlined/> Click to Upload
                                            </Button></Col>
                                            <Col span={8}>   Sample page : <Button style={{width: 165, margin: 5}}>
                                                <UploadOutlined/> Click to Upload
                                            </Button> </Col>
                                            <Col span={8}> Display On Homepage:  <DatePicker style={{width: 125, margin: 5}} onChange={onChange}/></Col>
                                           </Row>
                                           <Row>
                                           <Col span={8}> Featured :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<DatePicker style={{width: 185, margin: 5}} onChange={onChange1}/></Col>
                                           <Col span={8}> Forthcoming :&nbsp;<DatePicker style={{width: 165, margin: 5}} onChange={onChange1}/></Col>
                                           <Col span={8}> New Release :&nbsp;&nbsp;<DatePicker style={{width: 180, margin: 5}} onChange={onChange1}/></Col>
                                          </Row>

                                        </Panel>
                                        <Panel header="About Books" key="2">
                                            <Input></Input>
                                        </Panel>
                                        <Panel header="Book Contents" key="3">
                                        <Input></Input>
                                        </Panel>
                                        <Panel header="Subjects " key="4">
                                            <p>AGRICULTURAL SCIENCES</p>
                                            <Demo/>
                                            <p>ENVIRONMENTAL SCIENCES</p>
                                            <Demo1/>
                                            <p>HINDI BOOKS</p>
                                            <Demo2/>
                                            <p>HOME SCIENCE</p>
                                            <Demo3/>
                                            <p>LIFE SCIENCE</p>
                                            <Demo4/>
                                            <p>TEXTBOOK</p>
                                            <Demo5/>
                                            <p>VETERINARY AND ANIMAL SCIENCE</p>
                                            <Demo6/>

                                        </Panel>
                                        <Panel header="Select Readership" key="5">
                                            
                                        <Row>
                                       <Col span={4}><Checkbox onChange={onChange}></Checkbox>&nbsp;&nbsp;&nbsp;&nbsp;Entrepreneurs</Col>
                                      
                                       </Row>
                                       <Row>
                                       <Col span={4}><Checkbox onChange={onChange}></Checkbox>&nbsp;&nbsp;&nbsp;&nbsp;Extension Workers</Col>
                                      
                                       </Row>
                                       <Row>
                                       <Col span={4}><Checkbox onChange={onChange}></Checkbox>&nbsp;&nbsp;&nbsp;&nbsp;Field Workers</Col>
                                      
                                       </Row>
                                       <Row>
                                       <Col span={4}><Checkbox onChange={onChange}></Checkbox>&nbsp;&nbsp;&nbsp;&nbsp;General Readers</Col>
                                      
                                       </Row>
                                       <Row>
                                       <Col span={4}><Checkbox onChange={onChange}></Checkbox> &nbsp;&nbsp;&nbsp;PG Students</Col>
                                      
                                       </Row>
                                       <Row>
                                       <Col><Checkbox onChange={onChange}></Checkbox> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scientists</Col>
                          
                                       </Row>
                                       <Row>
                                       <Col span={4}><Checkbox onChange={onChange}></Checkbox>&nbsp;&nbsp;&nbsp;&nbsp;UG Students</Col>
                                      
                                       </Row>
                                       </Panel>
                                     
                                       <Panel header="Select Author" key="6">
                                       <Button>Add Author</Button>
                                       <Table dataSource={dataA}>

<Column title="Sno." dataIndex="sno" key="1"/>
<Column title="Selected Author" dataIndex="selauth" key="2" />

<Column title="Royalty" dataIndex="royal" key="3"/>


<Column
    title="Action"
    key="action"
    render={(text, record) => (
        <Space size="middle">
            <a>Edit</a>
            <a>Delete</a>
        </Space>
    )}
/>

</Table>

                                 
                                      
                                          
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

export default App7;