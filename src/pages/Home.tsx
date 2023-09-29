import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/todos");
  };
  return (
    <div className="navigation-page">
      <Container maxWidth="sm">
        <Typography variant="h3" component="div" gutterBottom>
          Welcome to our Home Page
        </Typography>
        <Typography variant="body1" gutterBottom>
          This is a simple and visually appealing home page created using
          Material-UI and Tailwind CSS.
        </Typography>
        <Button variant="contained" color="primary" onClick={handleClick}>
          Get Started
        </Button>
      </Container>
    </div>
  );
};

export default Home;
