import ReactCaroussel from "react-caroussel";
import "react-caroussel/dist/index.css";
import "../Caroussel/Caroussel.css";
import { assets } from "../../assets/assets";

const Card = ({ item, index }) => {
  function isImage(url) {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
  }

  return (
    <>
      {isImage(item.link) ? (
        <div className="row m-0">
          <div className="col-1 py-3">
            <div className="card">
              <div className="card-body">
                <div className="image-aspect-ratio image-aspect-ratio-21by9">
                  <img alt="test" src={item.link} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row m-0">
          <div className="col-1 py-3">
            <div className="card">
              <div className="card-body">
                <div className="image-aspect-ratio image-aspect-ratio-21by9">
                  <video autoPlay preLoad="auto" muted>
                    <source src={item.link} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default function Caroussel() {
  const Data = [
    {
      link: assets.img1,
    },
    {
      link: assets.vid1,
    },
    {
      link: assets.img2,
    },
    {
      link: assets.img3,
    },
    {
      link: assets.img4,
    },
    {
      link: assets.vid2,
    },
    {
      link: assets.img5,
    },
  ];
  return (
    <>
      <ReactCaroussel slidesToShow={1} slidesToScroll={1} infinite={true}>
        {Data.map((item, index) => (
          <Card key={index} item={item} index={index} />
        ))}
      </ReactCaroussel>
    </>
  );
}
