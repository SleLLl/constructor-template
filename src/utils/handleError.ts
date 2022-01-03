import { toast } from 'react-toastify';

type ToastSetting = {
  toastMessage?: string;
  showToast?: boolean;
};

const handleError = (e: unknown, setting?: ToastSetting): void => {
  // eslint-disable-next-line no-console
  (setting?.showToast ?? true) &&
    toast.error(setting?.toastMessage || 'Erro ao carregar dados', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  console.warn(e, 'error handler');
};

export default handleError;
