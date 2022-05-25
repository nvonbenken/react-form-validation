import {
  CustomReactHookFormValidation,
  CustomYupValidation,
  CustomZodValidation
} from './custom';

const Custom = () => {
  return (
    <div className="flex flex-col">
      <CustomReactHookFormValidation />
      <CustomYupValidation />
      <CustomZodValidation />
    </div>
  );
};

export default Custom;
