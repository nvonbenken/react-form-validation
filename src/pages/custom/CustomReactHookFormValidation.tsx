import { useForm } from 'react-hook-form';

import FormTextInput from '../../components/custom/FormTextInput';
import SplitCard from '../../components/SplitCard';

const CustomReactHookFormValidation = () => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  const form = (
    <form className="p-2 pr-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col py-2">
        <FormTextInput
          name="firstName"
          control={control}
          label="First Name"
          rules={{ required: true }}
          error={Boolean(errors.firstName)}
        />
        {errors.firstName && (
          <p className="text-red-500 text-xs italic">Required</p>
        )}
      </div>
      <div className="flex flex-col py-2">
        <FormTextInput
          name="lastName"
          control={control}
          label="Last Name"
          rules={{ required: true }}
          error={Boolean(errors.firstName)}
        />
        {errors.lastName && (
          <p className="text-red-500 text-xs italic">Required</p>
        )}
      </div>
      <div className="flex flex-col py-2">
        <FormTextInput
          name="age"
          control={control}
          label="Age"
          type="number"
          rules={{
            validate: {
              required: (value: any) => value !== undefined && value !== '',
              oldEnough: (value: any) => value >= 10
            }
          }}
          error={Boolean(errors.age)}
        />
        {errors.age && errors.age.type === 'required' && (
          <p className="text-red-500 text-xs italic">Required</p>
        )}
        {errors.age && errors.age.type === 'oldEnough' && (
          <p className="text-red-500 text-xs italic">You must be at least 10</p>
        )}
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
    rules={{
      validate: {
        required: (value: any) => value !== undefined && value !== '',
        oldEnough: (value: any) => value >= 10
      }
    }}
    error={Boolean(errors.age)}
  />
  {errors.age && errors.age.type === 'required' && (
    <p className="text-red-500 text-xs italic">Required</p>
  )}
  {errors.age && errors.age.type === 'oldEnough' && (
    <p className="text-red-500 text-xs italic">You must be at least 10</p>
  )}
</div>`;

  return (
    <SplitCard
      validationType="react-hook-form"
      content={form}
      sample={codeSample}
    />
  );
};

export default CustomReactHookFormValidation;
