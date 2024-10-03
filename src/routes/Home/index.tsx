import image from "../../assets/images/heroImage.png";
import "./styles.css";

type Props = {};

export default function Home({}: Props) {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
        }}
        className="hero-container"
      >
        <div className="tagline-container">
          <h1 className="tagline">
            Make.
            <br /> Yourself. At Home.
          </h1>
          <h3 className="tagline2">
            Welcome to Image Furnishers. The Luxury Interior Solutions
          </h3>
        </div>
      </div>
      <div className="brand-image">
        {[1, 2, 3, 4, 5].map((item) => {
          return (
            <img
              key={item}
              src={require(`../../assets/images/brand${item}.svg`)}
              alt={`brand${item}`}
            />
          );
        })}
      </div>
    </div>
  );
}
