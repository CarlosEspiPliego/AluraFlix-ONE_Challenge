import Swal from "sweetalert2";

export const useAlert = () => {
    const showAlert = ({ title, text, icon, confirmButtonText, showCancelButton, cancelButtonText, callback }) => {
        Swal.fire({
            title,
            text,
            icon,
            confirmButtonText,
            showCancelButton,
            cancelButtonText
        }).then((result) => {
            if (result.isConfirmed) {
                callback();
            }
        });
    }

    return showAlert;
}