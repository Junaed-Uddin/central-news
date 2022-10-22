import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../Pages/Shared/LeftSideNav';
import RightSideNav from '../Pages/Shared/RightSideNav';
import Header from '../Pages/Shared/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={2} className='d-none d-md-block'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg={7}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;