import { Link } from 'react-router-dom';
import React from 'react';
import { Button } from '@material-ui/core';

const Opcoes = () => {
    return (
        <>
            <Button color='inherit'component={Link} to='/' disableElevation>Home</Button>
            <Button color='inherit'component={Link} to='/upload' disableElevation>Upload</Button>
            <Button color='inherit'component={Link} to='/cronometro' disableElevation>Cronometro</Button>
        </>
    );
};

export default Opcoes;