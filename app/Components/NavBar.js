"use client";

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreIcon from "@mui/icons-material/MoreVert";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Link from "next/link";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: theme.spacing(2),
  marginRight: 0,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));

export default function NavBar() {
  const typedRef = useRef(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: ["Bag", "Watch", "Laptop", "Phone", "Mascara"],
      typeSpeed: 40,
      backSpeed: 30,
      loop: true,
      showCursor: false,
    });

    return () => typed.destroy();
  }, []);

  const [navAnchorEl, setNavAnchorEl] = React.useState(null);
  const isNavMenuOpen = Boolean(navAnchorEl);

  const handleOpenNavMenu = (event) => {
    setNavAnchorEl(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setNavAnchorEl(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    ></Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={2} color="error">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </IconButton>
        <Typography component="span" sx={{ ml: 1 }}>
          Messages
        </Typography>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <FavoriteBorderIcon />
          </Badge>
        </IconButton>
        <Typography component="span" sx={{ ml: 1 }}>
          Notifications
        </Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open navigation menu"
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            onClick={handleOpenNavMenu}
          >
            <MenuIcon />
          </IconButton>
            <Typography
            component={Link}
            href={"/"}
              sx={{
                fontWeight: 700,
                whiteSpace: "nowrap",
                margin: "10px",
                fontSize: {
                  xs: "16px",
                  sm: "18px",
                  md: "22px",
                  lg: "26px",
                },
                flexShrink: 0,
                color:"white",
                textDecoration:"none"
              }}
            >
              Flex Shop
            </Typography>
          <Box
            component={"ul"}
            sx={{
              position: "relative",
              top: "10px",
              display: { xs: "none", md: "flex" },
              listStyle: "none",
              gap: 3,
              justifyContent: "center",
              alignItems: "center",
              flexGrow: 1,
              fontSize: {
                md: "13px",
                lg: "18px",
              },
              "& a": {
                color: "white",
                textDecoration: "none",
                transition: "color 0.3s ease",
              },
            }}
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
          </Box>
          <Search sx={{ margin: "20px 0" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder=""
              inputProps={{ "aria-label": "search" }}
            />
            <span
              ref={typedRef}
              style={{
                position: "absolute",
                left: "45px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "rgba(255,255,255,0.7)",
                pointerEvents: "none",
                fontSize: "14px",
                overflow: "hidden",
              }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={2} color="error">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <FavoriteBorderIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            ></IconButton>
          </Box>
          <Menu
            anchorEl={navAnchorEl}
            open={isNavMenuOpen}
            onClose={handleCloseNavMenu}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuItem onClick={handleCloseNavMenu}>
              <Link
                href="/"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Home
              </Link>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Link
                href="/"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Contact
              </Link>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Link
                href="/"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                About
              </Link>
            </MenuItem>
          </Menu>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="small"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
