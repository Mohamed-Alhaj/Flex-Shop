import { Container, Box } from "@mui/material";

export default function ProductCarousel({ product }) {
  return (
    <div>
      <Box sx={{ backgroundColor: "primary.main" }}>
        <Container maxWidth="sm">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              {product.images.map((img,i) => {
        return <div key={i} className={`carousel-item ${i===0?"active":""}`}>
                  <img
                    src={img}
                    className="d-block w-100 p-3"
                    alt="..."
                  ></img>
                </div>;
              })}
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
      </Box>
    </div>
  );
}
