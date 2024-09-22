import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/vesikalık1.jpg";
import Tilt from "react-parallax-tilt";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
             <span className="purple">  Kısaca</span> 
            </h1>
            <p className="home-about-body">
              Kamu kurumunda Bilişim Personeli olarak çalışmaktayım.
              <br />
              <br />Şuan Spring Boot ve Angular ile yazılım geliştirmeye devam ediyorum.
             
              <br />
              <br />
             Geçtiğimiz yıllarda Asp.Net MVC, Asp.Net Core, Java EE/Jakarta EE uygulamaları geliştirdim.
              
              <br /> 

              Angular ve React teknolojilerinde geçmiş uygulamalarım vardır.
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>İletişim</h1>
            <p>
              <span className="purple">iletisim@ahmetcoskun.com.tr </span>
            </p>
        
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
