import {
  MuiReactHookFormValidation,
  MuiYupValidation,
  MuiZodValidation
} from './mui';

const Mui = () => {
  return (
    <div className="flex flex-col">
      <MuiReactHookFormValidation />
      <MuiYupValidation />
      <MuiZodValidation />
    </div>
  );
};

export default Mui;
