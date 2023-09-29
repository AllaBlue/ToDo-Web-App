import { Button, Container, Typography } from "@mui/material";

const Contact = () => {
  return (
    <div className="navigation-page">
      <Container maxWidth="sm">
        <Typography variant="h3" component="div" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" gutterBottom>
          Feel free to reach out to us if you have any questions or inquiries.
        </Typography>
        <Button variant="contained" color="primary">
          Send Message
        </Button>
      </Container>
    </div>
  );
};

export default Contact;
