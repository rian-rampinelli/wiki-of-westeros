import emailjs from '@emailjs/browser';

export default function enviarEmail(nomePagina) {

    const templateParams = {
        message: `Entrando na página ${nomePagina}`,
        email: "riaann.gkmc@gmail.com"
    };

    emailjs.send('service_95xkykl', 'template_o6myioe', templateParams, 'YU30LAJ_Djv-ASqLK')
        .then(
            (result) => {
                console.log('Email enviado com sucesso!', result.text);
            },
            (error) => {
                console.error('Erro ao enviar o email:', error.text);
            }
        );
}