import React, { useEffect, useState } from 'react';

const Regressivo = ({ tempo, setTempo }) => {


    const [timer, setTimer] = useState();

    useEffect(() => {
        initInterval(tempo);
        // eslint-disable-next-line
    }, [tempo]);


    const initInterval = segundos => {

        clearInterval(timer);
        let intervalo = segundos;
        const id = setInterval(() => {
            intervalo--;
            if (intervalo >= 0) {
                setTempo(intervalo);
            } 
        }, 1000);

        setTimer(id);

    }

    const Cronometro = s => {
        const d = new Date();
        d.setHours(0);
        d.setMinutes(0);
        d.setMilliseconds(0);
        d.setSeconds(s);
        return String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0') + ':' + String(d.getSeconds()).padStart(2, '0');
    }
    


    return (
        <div>
            {Cronometro(tempo)}
        </div>
    );
};

export default Regressivo;