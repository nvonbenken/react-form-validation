import {
  BaseTextFieldProps,
  styled,
  TextField as MuiTextField
} from '@mui/material';

import QInputLabel from './QInputLabel';

interface ITextFieldProps extends BaseTextFieldProps {
  labelClass?: string;
  label?: string;
  name?: string;
  type?: string;
  classesToAdd?: string[];
  handleChange?: () => void;
  isValid?: boolean;
  helperText?: string;
  readOnly?: boolean;
  disabled?: boolean;
  required?: boolean;
  sizeVariant?: 'lg' | 'sm';
}

const getPadding = (sizeVariant: any) =>
  sizeVariant === undefined
    ? '0.375rem 0.75rem'
    : sizeVariant === 'sm'
    ? '0.25rem 0.5rem'
    : '0.5rem 1rem';

const getHeight = (sizeVariant: any) =>
  sizeVariant === undefined
    ? 'calc(1.35em + 2px)'
    : sizeVariant === 'sm'
    ? 'calc(1.35em + 2px)'
    : 'calc(1.4em + 2px)';

const getFontSize = (sizeVariant: any) =>
  sizeVariant === undefined
    ? '1rem'
    : sizeVariant === 'sm'
    ? '0.875rem'
    : '1.25rem';

const BaseTextField = styled(MuiTextField, {
  shouldForwardProp: prop => prop !== 'sizeVariant'
})<ITextFieldProps>(({ sizeVariant }) => {
  return {
    '&.MuiTextField-root': {
      display: 'block',
      borderRadius: '4px'
    },
    '& .MuiInputBase-root': {
      '& fieldset': {
        borderColor: '#9d9d9d'
      },
      '& :focus': {
        borderColor: '#80bdff',
        boxShadow: 'rgba(0, 123, 255, 0.25) 0 0 0 0.2rem'
      }
    },
    '& .MuiInputBase-input': {
      borderRadius: '4px',
      position: 'relative',
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      padding: getPadding(sizeVariant),
      height: getHeight(sizeVariant),
      fontSize: getFontSize(sizeVariant),
      transition:
        'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Open Sans',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ].join(','),
      fontWeight: '400',
      '&:focus': {
        borderColor: '#80bdff',
        boxShadow: 'rgba(0, 123, 255, 0.25) 0 0 0 0.2rem'
      },
      '&:disabled': {
        backgroundColor: '#e9ecef',
        opacity: '1'
      },
      '&:placeholder': {
        color: '#6c757d',
        opacity: '1'
      }
    },
    '& .MuiFormHelperText-root': {
      color: '#6c757d',
      display: 'block',
      marginTop: '0.25rem',
      fontSize: '80%',
      fontWeight: '400',
      boxSizing: 'border-box',
      marginLeft: '0'
    }
  };
});

const TextField = (props: ITextFieldProps) => {
  const {
    ref,
    name,
    required,
    label,
    type,
    labelClass,
    handleChange,
    helperText,
    readOnly,
    disabled,
    sizeVariant,
    error,
    ...rest
  } = props;

  return (
    <>
      {label && (
        <QInputLabel
          required={required}
          labelText={label}
          className={labelClass}
          htmlFor={name}
        />
      )}

      <BaseTextField
        inputRef={ref}
        type={type}
        sizeVariant={sizeVariant}
        onChange={handleChange}
        InputProps={{
          readOnly: readOnly
        }}
        disabled={disabled}
        error={error}
        helperText={helperText}
        {...rest}
      />
    </>
  );
};

TextField.defaultProps = {
  required: false,
  type: 'text',
  readOnly: false,
  disabled: false,
  variant: 'outlined'
};

export default TextField;
