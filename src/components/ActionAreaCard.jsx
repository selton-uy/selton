import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export default function ActionAreaCard({ img ,children,txt}) {
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
        minHeight:"90%"
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={img}
          alt=" fotinha do selton"
          sx={{zIndex: 0}}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "#F2F2F2", }}
          >
            {txt}
          </Typography>
          <Typography variant="body2" sx={{ color: "#F2F2F2", fontSize: 18 }}>
            {children}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
