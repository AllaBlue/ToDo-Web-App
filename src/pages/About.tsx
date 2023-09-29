import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <div className="navigation-page">
      <Container maxWidth="sm">
        <Typography variant="h3" component="div" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" gutterBottom>
          We are a team dedicated to providing amazing web experiences using
          Material-UI and Tailwind CSS.
        </Typography>
        <Button variant="contained" color="primary" onClick={handleClick}>
          Contact Us
        </Button>
      </Container>
    </div>
  );
};

export default About;
