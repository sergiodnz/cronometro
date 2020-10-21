import React, { useEffect, useState } from 'react';

const Cronometro = ({segundos}) => {
    const d = new Date();
    d.setHours(0);
    d.setMinutes(0);
    d.setMilliseconds(0);
    d.setSeconds(segundos);
    return d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
}

const Regressivo = ({ tempo }) => {

    const [timer, setTimer] = useState();
    const [segundos, setSegundos] = useState(tempo);
    const maxSeconds = (24*60*60);

    useEffect(() => {
        initInterval(tempo);
        console.log(tempo);
         // eslint-disable-next-line
    }, [tempo]);


    const initInterval = s => {
        
        clearInterval(timer);
        
        let intervalo = s>maxSeconds?maxSeconds:s;

        const id = setInterval(() => {
            intervalo--;
            if (intervalo >= 0) {
                setSegundos(intervalo);
            } 
        }, 1000);

        setTimer(id);
    }


    return (
        <div>
            <Cronometro segundos={segundos} />
        </div>
    );
};

export default Regressivo;