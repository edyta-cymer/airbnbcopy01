import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const GalleryCard = ({ photo, type, title, rating, superHost }) => {
  const theme = createTheme({
    status: {
      danger: "#eB5757",
    },
    palette: {
      primary: {
        main: "#eB5757",
        darker: "#053e85",
      },
      neutral: {
        main: "#64748B",
        contrastText: "#fff",
      },
    },
  });

  return (
    <div className="gallery-card">
      <img src={photo} alt={title} id="gallery-card-photo" />
      <div className="card-info">
        <div className="first-text-field-gallerycard">
          {superHost ? <div className="superhost">Superhost</div> : null}
          <div className="type">{type}</div>
          <div className="rating-box">
            <ThemeProvider theme={theme}>
              <StarIcon color="primary" fontSize="small" />
              {rating}
            </ThemeProvider>
          </div>
        </div>
        <div className="title">{title}</div>
      </div>
    </div>
  );
};

export default GalleryCard;
