import React, {useState, useEffect} from 'react';
import './App.css';
import {callKeywordScrape} from './services/scrapeService';
import {
  Layout,
  Row,
  Col,
  Input,
  Typography,
  Tag
} from 'antd';

const {Header, Content} = Layout;
const {Search} = Input;
const {Text, Title} = Typography

function App() {
  const [scrapeURL, setScrapeURL] = useState();
  const [scrapeInProgress, toggleScrapeInProgress] = useState(false);
  const [errorWithScrape, setErrorWithScrape] = useState();
  const [scrapedKeywords, setScrapedKeywords] = useState([]);

  useEffect(() => {
    toggleScrapeInProgress(true)
    callKeywordScrape(scrapeURL).then(response => {
      console.log(response);
      setScrapedKeywords(response.data);
    }).catch(err => {
      console.log(err)
      setErrorWithScrape(err);
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
        <Content>
          <Row gutter={[0, 32]} justify="center">
            <Col span={20}>
              <Title level={1}>Code Keywords</Title>
              <Title level={3}>Extract code keywords from websites</Title>
              <Search 
                autoFocus={true}
                allowClear={true}
                loading={scrapeInProgress}
                size="large"
                placeholder="Enter URL of website to scrape"
                onSearch={value => setScrapeURL(value)}
              />
            </Col>
          </Row>
          <Row gutter={[0, 32]} justify="center">
            <Col span={18}>
              {
                scrapedKeywords.map((term, index) => {
                  return (
                    <Tag 
                      key={index}
                      closable={true}
                      color="success"
                      // onClose={}
                    >{term}</Tag>
                  )
                })
              }
            </Col>
          </Row>
        </Content>
      {/* </Layout> */}
    </Layout>
  );
}

export default App;
