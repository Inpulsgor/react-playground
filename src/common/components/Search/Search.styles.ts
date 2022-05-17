export const styles = {
  form: {
    display: 'flex',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
    bgcolor: 'custom.white',
    padding: '3px 3px 3px 15px',
    borderRradius: '5px',
    gap: '0 8px',
    maxHeight: '36px',
  },
  input: {
    color: '#000',
    '&.MuiInputBase-root': {
      color: '#000',
    },
  },
  button: {
    padding: '8px',
    bgcolor: '#7653FC',
    '&:hover': {
      bgcolor: '#7623FC',
    },
    '&.MuiIconButton-root': {
      borderRadius: '5px',
    },
    maxWidth: '30px',
  },
  buttonIcon: {
    fontSize: '23px',
    color: '#fff',
  },
};
