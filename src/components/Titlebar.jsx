import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import projects from "../data/projects.json";
import { Link } from "lucide-react";

export default function TitlebarImageList() {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <ImageList 
      sx={{ 
        width: "70vw",
        scrollbarColor: "#000",
      }} 
      cols={isMdScreen ? 2 : 1} // 2 colunas em md+, 1 coluna em telas menores
      gap={20}
    >
      {projects.map((project) => (
        <ImageListItem key={project.id}>
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={project.title}
            subtitle={project.author}
            actionIcon={
              <a target="_blank" rel="noopener noreferrer" href={project.url}>
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${project.title}`}
                >
                  <Link />
                </IconButton>
              </a>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}