"use client";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

// Zustand
import { useUIStore } from "@/zustand";

// Icons
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const { drawer, setDrawer } = useUIStore();
  const { open } = drawer;

  return (
    <AppBar
      position="sticky"
      sx={{
        top: 0,
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => setDrawer({ open: !open })}
        >
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link
            href={"/"}
            passHref
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              priority
              src="https://res.cloudinary.com/ddmeptk5c/image/upload/f_auto,q_auto/v1/ud-assets/ten/dbdcrubyyf2j5mte0qu3"
              alt="Logo"
              width={60}
              height={45}
            />
          </Link>
          <Typography variant="h6" fontWeight={500} sx={{ ml: 2 }}>
            <Link href={"/"} passHref>
              ETL - Mercado Libre
            </Link>
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };
