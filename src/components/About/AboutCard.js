import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           Merhaba, Ben <span className="purple">Ahmet COŞKUN </span>
            
            <br />

          Elektronik Mühendisi ve Yazılım Geliştirme Uzmanı
            <br />
            Ankara'da bir kamu kurumunda Bilişim Personeli olarak çalışmaktayım.

            Web ve mobil uygulama projelerinde çalıştım ve devam eden projelerde yer almaktayım.
            <br/>
            Fırsat buldukça freelance web site ve uygulama projeleri de yapmaktayım. Futbolu, gezmeyi, film izlemeyi ve denizi severim.
          </p>
         

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
