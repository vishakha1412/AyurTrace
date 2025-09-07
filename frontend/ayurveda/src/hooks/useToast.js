import { toast } from 'react-toastify';

export const useToast = () => {
  const notifySuccess = (msg) => toast.success(msg);
  const notifyError = (msg) => toast.error(msg);
  return { notifySuccess, notifyError };
};

