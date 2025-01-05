import {useState} from 'react'
import './App.css'
import {Button, Col, Input, Layout, Row, Space} from "antd";
import {Content} from "antd/es/layout/layout";
import TextArea from "antd/es/input/TextArea";

function App() {
    const [count, setCount] = useState(0)

    return (
        <Layout style={{height: '100vh', width: '100vh'}}>
            <Content>
                <Row justify="center" align="middle" style={{height: '100%'}}>
                    <Col span={18} style={{textAlign: 'center'}}>
                        <Row justify="space-between">
                            <Col span={18}>
                                <Input placeholder="Enter text here" style={{width: '100%'}}/>
                            </Col>
                            <Col span={6}>
                                <Button type="primary" style={{marginLeft: '10px', width: '100%'}}>Click Me</Button>
                            </Col>
                        </Row>
                        <Row justify="space-between" style={{marginTop: '10px'}}>
                            <Col span={18}>
                                <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}

export default App
