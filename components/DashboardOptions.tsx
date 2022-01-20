import { List, ListItemButton, ListItemText, Divider, useTheme, ListSubheader, IconButton, Box } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "./Layout";
import { signOut } from 'next-auth/react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LogoutIcon from '@mui/icons-material/Logout';
export default function DashboardOptions() {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    return <>
        <IconButton
            color="inherit"
            edge="end"
            onClick={colorMode.toggleColorMode}
            sx={{ mr: 2 }}
        >
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

        <IconButton
            color="inherit"
            edge="end"
            onClick={() => signOut()}
            sx={{ mr: 2 }}
        >
            <LogoutIcon />
        </IconButton>
    </>
}