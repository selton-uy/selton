import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";


export default function ActionAreaCard({Img}) {
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
          image={Img}
          alt="selton"
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
          Olá! Me chamo Selton Batista, sou estudante de Engenharia de Software e desenvolvedor web apaixonado por transformar ideias em soluções digitais. Trabalho com tecnologias como React, JavaScript, Tailwind CSS e Node.js, criando interfaces modernas, funcionais e responsivas. Estou sempre buscando aprender mais e entregar projetos que unam performance, design e usabilidade.
            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
