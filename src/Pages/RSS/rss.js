import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Header/Navbar";
import Footer from "../../Components/Footer/Footer";

function RssComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/rss.xml")
      .then((response) => response.text())
      .then((responseText) => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(responseText, "text/xml");
        setData(xml);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (data) {
    const items = data.getElementsByTagName("item");
    return (
      <div>
        <Navbar />
        {Array.from(items).map((item, index) => {
          const title = item.getElementsByTagName("title")[0].textContent;
          const link = item.getElementsByTagName("link")[0].textContent;
          const description =
            item.getElementsByTagName("description")[0].textContent;
          return (
            <div key={index}>
              <h2>{title}</h2>
              <a href={link}>{link}</a>
              <p>{description}</p>
            </div>
          );
        })}
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <div>Cargando...</div>

        <Footer />
      </div>
    );
  }
}

export default RssComponent;
