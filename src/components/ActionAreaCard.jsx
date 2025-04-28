import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import selton from "../assets/selton.jpg";

export default function ActionAreaCard() {
  return (
    <Card
      sx={{
        maxWidth: 450,
        minWidth: 300,
        backgroundColor: "#222222",
        borderRadius: 5, 
        borderColor: "#1DCD9F",
        borderWidth: 3,
        borderStyle: "solid",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image="src/assets/selton.jpg"
          alt={selton}
          sx={{  }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "#F2F2F2" }}
          >
            Selton Batista
          </Typography>
          <Typography variant="body2" sx={{ color: "#F2F2F2", fontSize: 18 ,}}>
            Olá, meu nome é Selton Batista, sou um desenvolvedor de software
            júnior com experiência em React e Node.js. Estou sempre buscando
            aprender e crescer na área de tecnologia.
            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
