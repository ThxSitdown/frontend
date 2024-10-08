import Image from "next/image";
import cardpic from "../../../public/picicon.png";

export default function Card() {
  return (
    <>
    <div className="container mb-4">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <Image src={cardpic} className="card-img-top" alt="Card image" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <Image src={cardpic} className="card-img-top" alt="Card image" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <Image src={cardpic} className="card-img-top" alt="Card image" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
