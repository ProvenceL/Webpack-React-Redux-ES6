import React,{PureComponent} from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export default class MainPage extends PureComponent{
  render(){
    return <div>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  }
}