import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import FormTextInput from '../../components/mui/FormTextInput';
import SplitCard from '../../components/SplitCard';

const validationSchema = z.object({
  firstName: z.string().nonempty({ message: 'Required' }),
  lastName: z.string().nonempty({ message: 'Required' }),
  age: z.preprocess(
    a => parseInt(z.string().parse(a)),
    z
      .number({
        required_error: 'Required',
        invalid_type_error: 'Enter a number'
      })
      .min(10, { message: 'You must be at least 10' })
  )
});

const MuiZodValidation = () => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({ resolver: zodResolver(validationSchema) });

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

  const schemaSample = `const validationSchema = z.object({
  firstName: z.string().nonempty({ message: 'Required' }),
  lastName: z.string().nonempty({ message: 'Required' }),
  age: z.preprocess(
    a => parseInt(z.string().parse(a)),
    z
      .number({
        required_error: 'Required',
        invalid_type_error: 'Required'
      })
      .min(10, { message: 'You must be at least 10' })
  )
});`;

  return (
    <SplitCard
      validationType="zod"
      content={form}
      sample={codeSample}
      schemaSample={schemaSample}
    />
  );
};

export default MuiZodValidation;
