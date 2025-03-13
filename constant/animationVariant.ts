import { Bounce, ToastPosition } from 'react-toastify'

export const hiddenAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export const toastifyStyle = {
  position: 'top-center' as ToastPosition,
  autoClose: 2000,
  hideProgressBar: true,
  draggable: false,
  theme: 'dark',
  transition: Bounce,
  closeButton: false,
  style: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '13px',
    width: '100%',
    fontWeight: 500,
    paddingInline: '20px',
  },
}
