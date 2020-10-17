import { TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Debounce from 'react-throttle/lib/components/Debounce';

const Regressivo = ({ segundos = 0 }) => {

    const [tempo, setTempo] = useState(segundos);

    useEffect(() => {

        setTimeout(() => {
            if (tempo > 0) {
                const novo_tempo = tempo - 1;
                setTempo(novo_tempo);
            } else { return; }
        }, 1000);
        if (tempo === 0) {
            clearTimeout();
        }
    }, [tempo]);

    const exibeCronometro = (s = 0) => {
        const d = new Date();
        d.setHours(0);
        d.setMinutes(0);
        d.setMilliseconds(0);
        d.setSeconds(s);
        return String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0') + ':' + String(d.getSeconds()).padStart(2, '0');
    }

    const alterarTempo = event => {
        clearTimeout();
        if (!isNaN(event.target.value)) {
            setTempo(parseInt(event.target.value));
        } else {
            setTempo(0);
        }
    };

    return (
        <div>
            {exibeCronometro(tempo)}
            <hr />
            <Debounce time="400" handler="onChange">
                <TextField
                    id="outlined-basic"
                    label="Tempo em segundos"
                    onChange={e => alterarTempo(e)}
                />
            </Debounce>

        </div>
    );
};

export default Regressivo;