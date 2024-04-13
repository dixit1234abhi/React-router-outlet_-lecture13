import React from 'react'
import {Outlet} from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';

export default function Layout() {
  return (
    <>
    <Header/>
    <main>
        <Row className="h-100">
          <Col sm={2} className="abhi_tbdr ">
            <Aside/>
          </Col>
          <Col sm={10} className="abhi_tbdr">
           <Outlet/>
          </Col>
        </Row>
      </main>
    <Footer/>
  </>
  )
}