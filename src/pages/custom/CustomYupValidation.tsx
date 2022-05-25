import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import FormTextInput from '../../components/custom/FormTextInput';
import SplitCard from '../../components/SplitCard';

const validationSchema = yup.object({
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  age: yup
    .number()
    .typeError('Enter a number')
    .required('Required')
    .min(10, 'You must be at least 10')
});

const CustomYupValidation = () => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = (data: any) => console.log(data);

  const form = (
    <form className="p-2 pr-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col py-2">
        <FormTextInput
          name="firstName"
          control={control}
          label="First Name"
          error={Boolean(errors.firstName)}
          errorText={errors.firstName?.message}
        />
      </div>
      <div className="flex flex-col py-2">
        <FormTextInput
          name="lastName"
          control={control}
          label="Last Name"
          error={Boolean(errors.lastName)}
          errorText={errors.lastName?.message}
        />
      </div>
      <div className="flex flex-col py-2">
        <FormTextInput
          name="age"
          control={control}
          label="Age"
          type="number"
          error={Boolean(errors.age)}
          errorText={errors.age?.message}
        />
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
  const codeSample = `<div className="flex flex-col py-2">
  <FormTextInput
    name="age"
    control={control}
    label="Age"
    type="number"
    error={Boolean(errors.age)}
    errorText={errors.age?.message}
  />
</div>`;

  const schema = `const validationSchema = yup.object({
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  age: yup
    .number()
    .typeError('Enter a number')
    .required('Required')
    .min(10, 'You must be at least 10')
});`;

  return (
    <SplitCard
      validationType="yup"
      content={form}
      sample={codeSample}
      schemaSample={schema}
    />
  );
};

export default CustomYupValidation;
