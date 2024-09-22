import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Geçmiş Çalışmalarım </strong>
        </h1>
        <p style={{ color: "white" }}>
          Burda paylaşmamda sıkıntı olmayacağını düşündüğüm projelerin isimleri yer almaktadır. Kurum açısından sıkıntı paylaşılmaması uygun olmayan uygulamaları yazmadım.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Rehber ve Not Projeleri</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                C programlama dilinde yazdığım, yazılımı bana sevdiren iki projedir. Rehber uygulaması; telefon ve adres bilgisini kaydeden bir programdır. Öğrenci otomasyonu uygulaması; Öğrenci bilgileri dersleri ve o derslerden almış olduğu notları kaydeden programdır
                </Card.Text>

              </Card.Body>
            </Card>
            </Col>
            <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Aile hekimliği web projesi</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                ASP.Net MVC 5 - Angular.js - Linq - Entitiy Freamwork - C# - Bootstrap - HTML5 kullanılarak yazılan proje Aile Hekimlerinin kullanmış olduğu masaüstü programının web uyarlamasıdır. Hasta kayıt, randevu, muayene, laboratuvar, ilaç ve hastane gelir gider gibi bölümlerin olduğu kapsamlı bir programdır.
                </Card.Text>

              </Card.Body>
            </Card>
            </Col>
            <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Masaüstü Programları</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                C# diliyle yazmış olduğum Hastane Otomasyon ve İngilizce-Türkçe Sözlük projeleri. Hastane Otomasyon; hasta kayıt ve muayene randevu gibi işlemler içeren projedir. İngilizce - Türkçe Sözlük; kendi hazırlamış olduğunuz kelimeleri deftere kaydetmek yerine bu programa kaydedip sonradan arama ile istediğiniz kelimenin bulunmasını sağlayan program.
                </Card.Text>

              </Card.Body>
            </Card>
            </Col>
            <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>CRM programı</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
               Asp.Net - C# - Typescript - JQuery - HTML5 - Bootstrap kullanılarak yazılmış olunan projede Banka-Kredi Kartı-Muhasebe-Personel-Şikayet-Taksit ekranlarını yaptım. Banka-Kredi Kartı hesaplarını, Muhasebe hesaplarını, Taksit işlemlerini, Firma şikayet işlemlerini ve Firma Personel Kayıtlarının olduğu programdır.
                </Card.Text>

              </Card.Body>
            </Card>
            </Col>
            <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>CV Hazırlama Programı</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
             Asp.Net   C# - Typescript - Bootstrap kullanılarak CV hazırlayıcı program. Bilgilerinizi giriyorsunuz ve istediğiniz tasarımda CV'niz hazırlanıyor
                </Card.Text>

              </Card.Body>
            </Card>
            </Col>
            <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Mail Gönderme Programı</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                C# - Asp.net - JQuery - HTML5 - Bootstrap kullanılarak mail içeriği düzenleyebileceğiniz ve maili kullanıcılarınıza gönderebileceğiniz program.
                </Card.Text>

              </Card.Body>
            </Card>
            </Col>
            <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Para Kart Programı</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                C# - Asp.net - JQuery - HTML5 - Bootstrap kullanılarak yazılmış olunan proje; Para Karta para yükleme ve kişi kayıt işlemlerinin yapıldığı WEB projesi. Kullanıcıların IOS ve Andoid telefonlarından uygulama olarak indirip bakiye sorgulama, bilgilerini güncelleme ve görüntüleme gibi işlemlerini yapabildikleri mobil program.
                </Card.Text>

              </Card.Body>
            </Card>
            </Col>
            <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Diğer Projeler(Bu kısımda proje adı veremiyorum ama yapılan yaklaşım 12 uygulama bulunmaktadır.)</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
              Asp.Net Core - Angular---  Personel Takip ve Puantaj
              Java EE - JSF ---Kurumsal uygulamalar
              Spring Boot - React --- Kurumsal Uygulamalar
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
