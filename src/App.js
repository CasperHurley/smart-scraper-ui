import React, {useState, useEffect} from 'react';
import './App.css';
import {callKeywordScrape} from './services/scrapeService';
import {
  Layout,
  Row,
  Col,
  Input,
  Typography
} from 'antd';

const {Header, Content} = Layout;
const {Search} = Input;
const {Text, Title} = Typography

function App() {
  const [scrapeURL, setScrapeURL] = useState();
  const [scrapeInProgress, toggleScrapeInProgress] = useState(false);
  console.log(process.env)
  useEffect(() => {
    toggleScrapeInProgress(true)
    callKeywordScrape(scrapeURL).then(response => {
      console.log(response);
    }).catch(err => {
      console.log(err)
    }).finally(() => {
      toggleScrapeInProgress(false);
    })
  }, [scrapeURL])

  return (
    <Layout className="App">
      {/* <Header>
        <Row style={{height: "100%"}} align="middle" >
          <Col xs={28} sm={8}>
            <Text>Keyword Scraper</Text>
          </Col>
        </Row>
      </Header> */}
      {/* <Layout> */}
        <Content style={{height: "100%"}}>
          <Row style={{height: "100%"}} justify="center">
            <Col>
              <Title level={1}>Keywords</Title>
              <Title level={3}>Extract keywords from websites</Title>
              <Search 
                loading={scrapeInProgress}
                size="large"
                placeholder="Enter URL of website"
                onSearch={value => setScrapeURL(value)}
              />
            </Col>
          </Row>
        </Content>
      {/* </Layout> */}
    </Layout>
  );
}

export default App;
