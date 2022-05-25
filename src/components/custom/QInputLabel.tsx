import {
  InputLabel as MuiInputLabel,
  InputLabelProps,
  styled
} from '@mui/material';
// import classNames from 'classnames';

interface IInputLabelProps extends InputLabelProps {
  required?: boolean;
  labelText?: string;
  className?: string;
}

const StyledInputLabel = styled(MuiInputLabel)(() => ({
  '&.MuiInputLabel-root': {
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
    display: 'inline-block',
    fontSize: '11px',
    marginBottom: '3px',
    fontWeight: '700',
    '&.Mui-required': {
      fontWeight: '700'
    }
  }
}));

const QInputLabel = (props: IInputLabelProps) => {
  const { required, labelText, ...rest } = props;
  return (
    <StyledInputLabel
      //   className={classNames(className)}
      required={required}
      {...rest}
    >
      {labelText}
    </StyledInputLabel>
  );
};

QInputLabel.defaultProps = {
  required: false
};

export default QInputLabel;
