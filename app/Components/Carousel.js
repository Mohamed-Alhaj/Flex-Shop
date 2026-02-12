import { Container } from "@mui/material";

export default function Carousel() {
  return (
    <>
     <Container>
      <div
        data-bs-ride="carousel"
        data-bs-interval="3000"
        id="carouselExample"
        className="carousel slide mt-3 mb-3"
        style={{ maxWidth: "80%", margin: "auto"}}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              style={{ maxHeight: "70vh" }}
              src="https://www.shutterstock.com/image-photo/facial-cosmetic-products-containers-on-600nw-2566963627.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p color="primary">
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              style={{ maxHeight: "70vh" }}
              src="https://cdn.prod.website-files.com/694b229a4e093576b86e43c0/694b229a4e093576b86e45e7_generic_products.jpg"
              className="d-block w-100"
              alt="..."
            />
             <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              style={{ maxHeight: "70vh" }}
              src="https://www.bointernational.net/wp-content/uploads/2023/08/Skin-Care-Range.jpg"
              className="d-block w-100"
              alt="..."
            />
             <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </Container>
    </>
  );
}
