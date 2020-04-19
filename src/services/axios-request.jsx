import axios from 'axios';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

const baseuRL = 'https://5e9b4f3710bf9c0016dd1d2f.mockapi.io/api/v1/';

const callSignUp = (user) => {
  axios.post(`${baseuRL}register`, { user })
    .then((res) => {
      if (res.status === 201) {
        Swal.fire({
          title: 'Registro Exitoso',
          text: 'Se enviaron los datos correctamente',
          icon: 'success',
          confirmButtonText: 'Cool',
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Ocurrio un error al enviar los datos',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    });
};

export default callSignUp;
