import { Box } from "@mui/material";
import NavBar from "../../component/navbar/NavBar";
import ContentSectionHouse from "../../component/ContentSectionHouse/ContentSectionHouse.jsx";
import "../../component/ContentSectionHouse/ContentSectionHouse.css";
import img1 from "../../imgs/ImagesCasas/Aires2/Aires2ImagenTop.jpg";
import img2 from "../../imgs/ImagesCasas/Aires2/Aires2Imagen1.jpg";
import img3 from "../../imgs/ImagesCasas/Aires2/Aires2Imagen2.jpg";

const Aires2 = () => {
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
          <h1 className="imagePrincipalTitleText">Aires 2</h1>
          <p className="imagePrincipalText">
            PENSADA PARA 6 PERSONAS<br></br>CONFORT Y EXCLUSIVIDAD{" "}
          </p>
        </Box>
      </Box>

      <ContentSectionHouse
        title="BIENVENIDOS A AIRES 2"
        text={[
          "Ubicada en un entorno natural privilegiado, Aires 2 es una casa pensada para el descanso, la comodidad y el disfrute. Con capacidad para hasta 6 personas, esta casa combina la tranquilidad del paisaje serrano con todas las comodidades de un hogar acogedor y funcional.",
          <p key="space1" style={{ margin: "10px 0" }} />,
          "Su amplio living-comedor invita a compartir momentos inolvidables, mientras que la cocina completamente equipada ofrece todo lo necesario para preparar deliciosas comidas en un ambiente cálido y confortable.",
          <p key="space2" style={{ margin: "10px 0" }} />,
          "La casa cuenta con dos dormitorios, uno de ellos matrimonial en suite, y dos baños completos, garantizando privacidad y bienestar para todos los huéspedes.",
          <p key="space3" style={{ margin: "10px 0" }} />,
          "Espacios exteriores para disfrutar",
          <p key="space4" style={{ margin: "10px 0" }} />,
          "El exterior está diseñado para el relax y la conexión con la naturaleza. Su amplia galería con asador es el lugar ideal para reuniones al aire libre, mientras que la pileta privada invita a refrescarse en los días soleados con vistas al entorno serrano.",
          <p key="space5" style={{ margin: "10px 0" }} />,
          "Además, la casa cuenta con cochera techada y un jardín espacioso, perfecto para disfrutar del aire libre en total tranquilidad.",
          <p key="space6" style={{ margin: "10px 0" }} />,
          "Un lugar perfecto en las Sierras de Córdoba. Cada rincón está pensado para ofrecer una experiencia única, donde la naturaleza y el confort se encuentran en perfecta armonía.",
          <p key="space7" style={{ margin: "10px 0" }} />,
          "Un lugar para descansar, disfrutar y crear recuerdos inolvidables.",
        ]}
        imageUrl={img2}
      />

      <ContentSectionHouse
        title="SERVICIOS"
        text={[
          "2 habitaciones, una matrimonial en suite",
          "3 baños (1 exterior para la pileta)",
          "agua caliente para la ducha y la cocina",
          "amplia galería con asador",
          "asador equipado con parrilla y kit de asador",
          "pileta privada",
          "reposeras",
          "aire acondicionado en todos los espacios",
          "calefacción mediante calefactor tiro balanceado",
          "internet satelital de alta velocidad starlink",
          "directv",
          "living con amplios ventanales",
          "cocina comedor y living integrados",
          "cocina completamente equipada con ollas, utensilios, vajilla completa, etc.",
          "ropa blanca",
          "acceso a cancha de pádel",
          "bajada al lago y acceso a demás servicios del barrio (canchas de fútbol, tenis, vóley, kayaks, gimnasio, sala de juegos, restaurante, etc.)",
        ].map((item, index) => (
          <li key={index}>{item}</li> // Usamos <li> para cada elemento de la lista
        ))}
        imageUrl={img3}
        reverse={true} // La imagen se coloca a la izquierda
      />
    </>
  );
};

export default Aires2;
