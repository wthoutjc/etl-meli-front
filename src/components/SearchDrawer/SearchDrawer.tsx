"use client";
import Link from "next/link";
import Image from "next/image";
import {
  AppBar,
  Box,
  IconButton,
  SwipeableDrawer,
  Toolbar,
} from "@mui/material";

// Zustand
import { useUIStore } from "@/zustand";
import { SearchMenu } from "@/components/SearchDrawer/SearchMenu";

// Icons
import MenuIcon from "@mui/icons-material/Menu";

const SearchDrawer = () => {
  const { drawer, setDrawer } = useUIStore();
  const { open } = drawer;

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setDrawer({ open });
    };

  return (
    <SwipeableDrawer
      anchor={"left"}
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <Box sx={{ width: 380 }} role="presentation">
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <AppBar
            position="static"
            sx={{
              width: 380,
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
          <SearchMenu />
        </Box>
      </Box>
    </SwipeableDrawer>
  );
};

export { SearchDrawer };
