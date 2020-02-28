import Swal from "sweetalert2";

export default function({ $auth }) {

  $auth.onError((error)  => {
    Swal.fire('error',error.response.data[0].message, 'error')
  })
}