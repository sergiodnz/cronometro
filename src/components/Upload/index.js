import React, { useEffect, useState } from 'react';
import {doUpload}  from './api';

const Upload = () => { 

	// Initially, no file is selected 
	const [file, setFile] = useState({selectedFile: null});
	const [resposta, setResposta] = useState();
	const [tempo, setTempo] = useState(0);
	const [timer, setTimer] = useState();

	useEffect(() => {
		initTemporizador(tempo?tempo:0);
		// eslint-disable-next-line
	},[tempo])
	
	// On file select (from the pop up) 
	const onFileChange = event => { 
		// Update the state 
		setFile({ selectedFile: event.target.files[0] })
		initTemporizador(tempo);
	};

	const initTemporizador = s => {
		
        clearInterval(timer);
        
		if (s > 0){
			const id = setInterval(() => {
				onFileUpload();
			}, s * 1000 );
			setTimer(id);
		}
    }

	// On Tempo select (from the input) 
	const onTempoChange = event => { 
		// Update the state 
		setTempo( event.target.value );
		initTemporizador(tempo);
	}; 
	
	// On file upload (click the upload button) 
	const onFileUpload = () => { 
		//e.preventDefault();
		// Create an object of formData 
		if (file && file.selectedFile){

			const formData = new FormData(); 

			// Update the formData object 
			formData.append( 
				"userfile", 
				file.selectedFile, 
				file.selectedFile.name
			); 
		
			
			// Request made to the backend api 
			// Send formData object 
			doUpload(formData).then( response => {
				setResposta(response);
			});

		}
		
	}; 
	
	// File content to be displayed after 
	// file upload is complete 
	const fileData = () => { 


	if (file.selectedFile) { 

		return ( 
		<div> 
			<p>Temporizador: {tempo}</p> 
			<p>Arquivo: {file.selectedFile.name}</p> 
			<p>Data:{resposta && resposta.data?resposta.data:''}  </p> 
			<p>Mensagem:{resposta && resposta.mensagem?resposta.mensagem:''}  </p>
		</div> 
		); 
	} else { 
		return ( 
		<div> 
			<br /> 
			<h4>Nenhum arquivo enviado</h4> 
		</div> 
		); 
	} 
	}; 
	

	return ( 
			<div>
				<select
            value={tempo}
            name="Tempo"
            onChange={e => onTempoChange(e)}
          >
			<option value={0}>parado</option>
			<option value={10}>10 segundos</option>
            <option value={30}>30 segundos</option>
			<option value={60}>60 segundos</option>
			<option value={10 * 60}>10 minutos</option>
			<option value={20 * 60}>20 minutos</option>
			<option value={30 * 60}>30 minutos</option>
          </select>
				<input type="file" accept=".php" name="notas.php" onChange={e => onFileChange(e)} /> 
				<button onClick={ e => onFileUpload(e)}> 
				Upload! 
				</button> 
                {fileData()} 
			</div> 
		
	); 
	
} 

export default Upload; 
