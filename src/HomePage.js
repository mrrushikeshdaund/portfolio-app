import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Button,
  Chip,
  Box,
  Divider,
} from "@mui/material";
import { GitHub, LinkedIn, Email, Verified } from "@mui/icons-material";
import { motion } from "framer-motion";

const portfolioData = {
  name: "Rushikesh Daund",
  title: "Full Stack Developer | AWS Cloud Enthusiast",
  email: "er.rushikesh.daund@gmail.com",
  phone: "+91-7276743062",
  location: "Aurangabad, India",
  github: "https://github.com/mrrushikeshdaund",
  linkedin: "https://www.linkedin.com/in/rushikesh-daund-4b1333156/",
  skills: [
    "React",
    "Angular",
    "Node.js",
    "Express.js",
    "TypeScript",
    "MongoDB",
    "AWS",
    "Material UI",
    "JavaScript",
    "Python",
  ],
  certifications: [
    {
      name: "AWS Solution Architect Associate",
      link: "https://drive.google.com/file/d/1GKqcy6XIvLKtix0IKVgtra03CAeoJLIb/view",
    },
    {
      name: "AWS Academy Graduate - Cloud Architecting",
      link: "https://drive.google.com/file/d/1TrO2nEwEKZSIrLryrGfk_c5p-K1IM5Yx/view",
    },
  ],
  projects: [
    {
      title: "Restate Transactions (RE Pipeline)",
      technologies: "IBM TRIRIGA, Node.js, Angular, Express.js",
      description:
        "Developed UX enhancements, performed requirement analysis, and ensured feasibility checks.",
    },
    {
      title: "Grid Edit Framework",
      technologies: "Angular, TypeScript, AG Grid, MUI Components",
      description:
        "Implemented bulk edit features and optimized tabular data handling for enterprise applications.",
    },
    {
      title: "Capital Project Management Portal",
      technologies: "Angular, IBM TRIRIGA, TypeScript, MUI Components",
      description:
        "Enhanced UI/UX and improved functionality to streamline project management workflows.",
    },
    {
      title: "Portfolio Management",
      technologies: "IBM TRIRIGA, Polymer v3, Azure DevOps, ETL Process",
      description:
        "Implemented complete CI/CD Pipeline and collaborated with a team to divide tasks as per sprints.",
    },
    {
      title: "Lease Administration Application",
      technologies: "IBM TRIRIGA, Financial APIs, JavaScript",
      description:
        "Developed lease data management, financial calculations, reporting dashboards, and integrated APIs for real-time lease data updates.",
    },
  ],
};

const HomePage = () => {
  return (
    <Container
      maxWidth="md"
      sx={{ py: 5, backgroundColor: "#ffffff", borderRadius: 2, boxShadow: 3 }}
    >
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} sm={4}>
          <Avatar
            sx={{
              width: 180,
              height: 180,
              margin: "auto",
              boxShadow: 3,
              border: "4px solid #3f51b5",
            }}
            src="/profile-pic.png"
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="h4" fontWeight={600} color="#3f51b5">
            {portfolioData.name}
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            {portfolioData.title}
          </Typography>
          <Typography variant="body1">{portfolioData.location}</Typography>
          <Box mt={2}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<GitHub />}
              href={portfolioData.github}
              target="_blank"
              sx={{ mr: 1 }}
            >
              GitHub
            </Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<LinkedIn />}
              href={portfolioData.linkedin}
              target="_blank"
              sx={{ mr: 1 }}
            >
              LinkedIn
            </Button>
            <Button
              variant="contained"
              color="success"
              startIcon={<Email />}
              href={`mailto:${portfolioData.email}`}
            >
              Email
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />
      <Typography variant="h5" sx={{ color: "#3f51b5", fontWeight: 600 }}>
        Skills
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={1} mt={1}>
        {portfolioData.skills.map((skill, index) => (
          <Chip key={index} label={skill} variant="outlined" color="primary" />
        ))}
      </Box>

      <Divider sx={{ my: 3 }} />
      <Typography variant="h5" sx={{ color: "#3f51b5", fontWeight: 600 }}>
        Certifications
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={1} mt={1}>
        {portfolioData.certifications.map((cert, index) => (
          <Button
            key={index}
            variant="outlined"
            startIcon={<Verified />}
            href={cert.link}
            target="_blank"
            sx={{ color: "#3f51b5", fontWeight: "bold" }}
          >
            {cert.name}
          </Button>
        ))}
      </Box>

      <Divider sx={{ my: 3 }} />
      <Typography variant="h5" sx={{ color: "#3f51b5", fontWeight: 600 }}>
        Projects
      </Typography>
      <Grid container spacing={3} mt={1}>
        {portfolioData.projects.map((project, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={600} color="#3f51b5">
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    gutterBottom
                  >
                    {project.technologies}
                  </Typography>
                  <Typography variant="body1">{project.description}</Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Footer Section */}
      <Divider sx={{ my: 3 }} />
      <Box
        component="footer"
        sx={{
          textAlign: "center",
          py: 3,
          mt: 4,
          backgroundColor: "#f5f5f5",
          borderRadius: 2,
        }}
      >
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} {portfolioData.name}. All rights
          reserved.
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
