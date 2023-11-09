import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer = ({ welfareInfo }) => {
    return (
        <Box py={2}>
            <Typography variant="body2">{welfareInfo}</Typography>
        </Box>
    );
};

export default Footer;
