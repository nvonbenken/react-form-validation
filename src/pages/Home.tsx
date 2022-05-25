const Home = () => {
  return (
    <div className="h-screen">
      <p className="text-xl font-bold">Why?</p>
      <p>
        This was created as a demo to provide examples of different form
        validation options.
      </p>
      <br />
      <p className="text-xl font-bold">Useful Links:</p>
      <div>
        <p className="text-lg">React Hook Form</p>
        <a
          className="text-blue-600 underline"
          href="https://react-hook-form.com/get-started#Applyvalidation"
        >
          Documentation
        </a>
      </div>
      <div>
        <p className="text-lg">Yup</p>
        <a
          className="text-blue-600 underline"
          href="https://github.com/jquense/yup#getting-started"
        >
          Documentation
        </a>
      </div>
      <div>
        <p className="text-lg">Zod</p>
        <a className="text-blue-600 underline" href="https://zod.dev/">
          Documentation
        </a>
      </div>
    </div>
  );
};

export default Home;
