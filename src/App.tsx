import React, { useEffect, useState } from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import { initGA, pageviewGA } from "./Components/GA";
import {
  SwipeableDrawer,
  List,
  ListItemText,
  ListItemButton,
  IconButton,
  Box,
  useTheme,
  useMediaQuery,
  Fab,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import Home from "./Components/Home/Home";
import Registration from "./Components/Registration/Registration";
import Result2019 from "./Components/Result/Result2019";
import Result2021 from "./Components/Result/Result2021";
import Result2022 from "./Components/Result/Result2022";
import Result2023 from "./Components/Result/Result2023";
import Result2024 from "./Components/Result/Result2024";
import Result2025 from "./Components/Result/Result2025";
import Andring from "./Components/Registration/Components/Andring";

interface NavItem {
  to: string;
  text: string;
}

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [viewResult, setViewResult] = useState<boolean>(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();

  useEffect(() => {
    initGA();
    pageviewGA();
  }, []);

  useEffect(() => {
    const today = new Date();
    const raceFinished = new Date("Sat Jul 19 2025 15:00:00 GMT+0200");
    if (today > raceFinished) {
      setViewResult(true);
    }
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const menuItems: NavItem[] = [
    { to: "/", text: "Hem" },
    ...(viewResult ? [{ to: "/result2025", text: "Resultat 2025" }] : []),
    { to: "/result2024", text: "Resultat 2024" },
    { to: "/result2023", text: "Resultat 2023" },
    { to: "/result2022", text: "Resultat 2022" },
    { to: "/result2021", text: "Resultat 2021" },
    { to: "/result2019", text: "Resultat 2019" },
    { to: "/registration", text: "Anmälan" },
  ];

  return (
    <Box sx={{ height: "100vh", overflow: "hidden" }}>
      <Fab
        color="primary"
        aria-label="menu"
        onClick={() => setMenuOpen(true)}
        sx={{
          position: "fixed",
          top: 8,
          left: 8,
          backgroundColor: "#2c3e50",
          "&:hover": {
            backgroundColor: "#34495e",
          },
          zIndex: 1200,
        }}
      >
        <MenuIcon />
      </Fab>

      <SwipeableDrawer
        anchor="left"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onOpen={() => setMenuOpen(true)}
        PaperProps={{
          sx: {
            width: isMobile ? "100%" : 280,
            backgroundColor: "#2c3e50",
            color: "white",
          },
        }}
        variant="persistent"
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton
            color="inherit"
            onClick={() => setMenuOpen(false)}
            sx={{ color: "white" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ width: '100%', padding: '8px' }}>
          {menuItems.map((item) => (
            <ListItemButton
              key={item.to}
              component={NavLink}
              to={item.to}
              sx={{
                borderRadius: '8px',
                mb: 1,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
                '&.active': {
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                },
              }}
            >
              <ListItemText
                primary={item.text}
                sx={{
                  color: 'white',
                  margin: 0,
                  '& .MuiTypography-root': {
                    fontSize: '1rem',
                    fontWeight: 500,
                    padding: '4px 0',
                  },
                }}
              />
            </ListItemButton>
          ))}
          <ListItemButton
            component="a"
            href="/Banguide_Stocken_SOS_2024.pdf"
            download
            sx={{
              borderRadius: '8px',
              mb: 1,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <ListItemText
              primary="Banguide"
              sx={{
                color: 'white',
                margin: 0,
                '& .MuiTypography-root': {
                  fontSize: '1rem',
                  fontWeight: 500,
                  padding: '4px 0',
                },
              }}
            />
          </ListItemButton>
        </List>
      </SwipeableDrawer>

      <Box
        component="main"
        sx={{
          transition: "margin 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
          marginLeft: menuOpen ? (isMobile ? "100%" : "280px") : 0,
          height: "100%",
          overflow: "auto",
        }}
      >
        <Routes>
          {viewResult && <Route path="/result2025" element={<Result2025 />} />}
          <Route path="/result2024" element={<Result2024 />} />
          <Route path="/result2023" element={<Result2023 />} />
          <Route path="/result2022" element={<Result2022 />} />
          <Route path="/result2021" element={<Result2021 />} />
          <Route path="/result2019" element={<Result2019 />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/andring/:id" element={<Andring />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;
