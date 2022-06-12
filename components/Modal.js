import React from 'react'
import ModalMaterial from '@mui/material/Modal';
import { Box } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    outline: 'none'
};

const Modal = ({ open, onClose, children, className }) => {
    return (
        <ModalMaterial
            open={open}
            onClose={onClose}
            classes={{root: {height: 'max-content'}}}
        >
            <Box sx={style} className={["rounded-lg", className].join(" ")}>
                {children}
            </Box>
        </ModalMaterial>
    )
}

export default Modal