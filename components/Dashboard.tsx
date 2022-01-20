import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import DashboardOptions from './DashboardOptions';

import { useRouter } from 'next/router';

type DashboardProps = { children: React.ReactNode }

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));
export default function ResponsiveDrawer({ children }: DashboardProps) {

    const router = useRouter();

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{
                width: '100%',
                ml: { sm: '240px' },
            }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box component="div">
                        <Typography variant="h6" noWrap component="div">
                            <Typography sx={{ cursor: 'pointer' }} onClick={() => { router.push('/') }} variant="h6" noWrap component="div" lineHeight={2.6}>
                                {'Apod App'}
                            </Typography>
                        </Typography>
                    </Box>
                    <Box component="div">
                        <DashboardOptions />
                    </Box>
                </Toolbar>
            </AppBar>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `100%` } }}
            >
                <DrawerHeader />
                {children}
            </Box>
        </Box >
    );
}
