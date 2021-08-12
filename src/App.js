import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom" 
import { Layout } from 'antd';
import AppHeader from './components/common/header';
import AppHome from './components/common/views/home';
import AppFooter from './components/common/views/footer';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="main-Layout">
        <Header >
            <AppHeader/>
        </Header>
        <Content>
            <AppHome />
        </Content>
        <Footer>
            <AppFooter /> 
        </Footer>
    </Layout>
  );
}

export default App;
