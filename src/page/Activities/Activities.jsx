import { Box } from "@mui/material";
import NavBar from "../../component/navbar/NavBar";
import ContentSectionActivities from "../../component/ContentSectionActivities/ContentSectionActivities.jsx";
import "../../component/ContentSectionActivities/ContentSectionActivities.css";
import img1 from "../../imgs/ImagesActivities/ImagePrincipalTop.jpg";
import img2 from "../../imgs/ImagesCasas/Aires2/Aires2Imagen1.jpg";
import img3 from "../../imgs/ImagesCasas/Aires2/Aires2Imagen2.jpg";

const Activities = () => {
  return (
    <>
      <NavBar />

      <Box
        sx={{
          backgroundImage: `url(${img1})`,
          fontSize: { xs: "10px", md: "20px", lg: "20px" },
        }}
        className="boxImagePrincipalTop"
      >
        <Box className="boxPrincipalTextTop">
          <h1 className="imagePrincipalTitleText">Actividades</h1>
        </Box>
      </Box>

      <ContentSectionActivities
        title="EL COMPLEJO: "
        text={[
          "La ubicación de Aires del Lago te permite disfrutar de la tranquilidad del lago y, al mismo tiempo, explorar dos de los destinos turísticos más atractivos de Córdoba: Villa General Belgrano y Los Reartes, que se encuentran a solo 20 minutos de distancia.",
          <p key="space1" style={{ margin: "10px 0" }} />,
          "En Los Reartes: un pueblo serrano con un encanto natural incomparable. Podés disfrutar de sus playas de río, recorrer sus senderos rodeados de naturaleza y visitar su casco histórico. Además, es ideal para actividades como cabalgatas, trekking y mountain bike.",
          <p key="space2" style={{ margin: "10px 0" }} />,
          "En Villa General Belgrano: un rincón con aire europeo en el corazón de Córdoba. Aquí podés pasear por sus pintorescas calles, degustar la gastronomía, visitar cervecerías artesanales y participar en festivales como la Oktoberfest. También ofrece opciones de turismo aventura, como parapente, caminatas serranas y paseos en cuatriciclo.",
          <p key="space3" style={{ margin: "10px 0" }} />,
          "Ya sea que prefieras la calma del lago, la aventura en la montaña o la cultura y gastronomía, Aires del Lago es el punto de partida perfecto para vivir experiencias inolvidables.",
          <p key="space4" style={{ margin: "10px 0" }} />,
          "El exterior está diseñado para el relax y la conexión con la naturaleza. Su amplia galería con asador es el lugar ideal para reuniones al aire libre, mientras que la pileta privada invita a refrescarse en los días soleados con vistas al entorno serrano.",
        ]}
        imageUrl={img2}
      />

      <ContentSectionActivities
        title="EL BARRIO:"
        text={[
          "Cancha de tenis",
          "Cancha de fútbol",
          "Cancha de vóley",
          "Piletas",
          "Gimnasio",
          "Sala de juegos",
          "Restaurante",
          "Proveeduría",
          "Bajada al lago",
          "Kayaks",
          "Servicio de botadura y varadura",
        ].map((item, index) => (
          <li key={index}>{item}</li> // Usamos <li> para cada elemento de la lista
        ))}
        imageUrl={img3}
        reverse={true} // La imagen se coloca a la izquierda
      />
    </>
  );
};

export default Activities;
