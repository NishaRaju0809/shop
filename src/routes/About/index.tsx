import image from "../../assets/images/heroImage.png";
import "./styles.css";

type Props = {};

export default function About({}: Props) {
  const stats = [
    { label: "Interior Design Projects", value: "200+" },
    { label: "Exterior Design Projects", value: "200+" },
    { label: "Clients Served", value: "460+" },
  ];

  return (
    <div className="about-container">
      <img
        className="demoImage"
        src={require(`../../assets/images/image1.jpg`)}
        alt={`image1`}
      />
      <img
        className="demoImage"
        src={require(`../../assets/images/image2.jpg`)}
        alt={`image1`}
      />
      <div className="description">
        <h3 className="light">Who we are?</h3>
        <h1>Image Furnishers</h1>
        <h3 className="light">
          We were born in January 1996, in Delhi, where we got into the business
          of furnishings for homes and commercial spaces. We started with an
          intention to champion the art of happy living and let the people
          acquire their personal style at their homes and business
          establishments. After the years of hard work and dedication.
        </h3>
        {stats.map((item) => {
          return (
            <div key={item.label}>
              <h3 className="light">
                {item.label} <span className="value">{item.value}</span>
              </h3>
              <div className="lines-container">
                <div className="line" />
                <div className="line2" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
