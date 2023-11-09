import React, { useState, useEffect } from 'react';
import { Typography, Button, Grid } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import studentImg from '../img/student.png';
import Normal_personImg from "../img/normal.png";

const Header = ({ onSettingsClick }) => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // --------------------------------------------------------



    return (
        // style={{padding: '10px 20px', borderBottom: '1px solid #e0e0e0'}}
        <Grid container justifyContent="space-between" alignItems="center" >

            <Grid item>
                <Typography variant="h4">{currentTime.toLocaleTimeString()}</Typography>
            </Grid>
            <Grid item>
            <Button 
                startIcon={<SettingsIcon style={{ fontSize: 40 }} />} 
                style={{ fontSize: '1.4rem', padding: '12px 24px' }}
                onClick={onSettingsClick}>
                Settings
            </Button>
            </Grid>
        </Grid>
    );

    // -----------------------------------------------------------


};

export default Header;
