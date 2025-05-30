import styled from 'styled-components';
import { Fade } from "react-awesome-reveal";

const MapSection = styled("section")`
  padding: 4rem 0;
  background: #f5f5f5;
`;

const MapContainer = styled("div")`
  width: 100%;
  height: 400px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const MapTitle = styled("h6")`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  color: #18216d;
`;

const Map = () => {
  return (
    <MapSection>
      <Fade direction="up" triggerOnce>
        <MapTitle>Service Areas</MapTitle>
        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d206853.7215698362!2d-79.395!3d36.5859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1647881234567!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Service Areas Map"
          />
        </MapContainer>
      </Fade>
    </MapSection>
  );
};

export default Map; 