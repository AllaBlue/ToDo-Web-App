import { Container, Typography } from "@mui/material";

const Posts = () => {
  return (
    <div className="navigation-page">
      <Container maxWidth="sm">
        <Typography variant="h3" component="div" gutterBottom>
          Our New Great Interesting Posts!
        </Typography>
        <Typography variant="body1" gutterBottom>
          These posts are so interesting that they are all sold
        </Typography>
      </Container>
    </div>
  );
};

export default Posts;
