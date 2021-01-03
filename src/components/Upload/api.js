import server from '../../config/server';

export const doUpload = (formData) => {
    return server.post('doupload', formData, {
        headers: {
         "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        }
       } ).then(res => res.data);
};
