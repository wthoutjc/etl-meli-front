"use client";
import { AppBar, IconButton, Toolbar } from "@mui/material";
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
        <Link href={"/"} passHref>
          <Image
            priority
            src="https://res.cloudinary.com/ddmeptk5c/image/upload/f_auto,q_auto/v1/ud-assets/ten/dbdcrubyyf2j5mte0qu3"
            alt="Logo"
            width={60}
            height={45}
          />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };
