function LoginForm() {
  const handleSubmit = (formData: FormData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    console.log({ email, password });
  };
  return (
    <>
      <form action={handleSubmit}>
        <input type="text" placeholder="Inserte su email" name="email" />
        <input type="password" placeholder="Contraseña" name="password" />
        <button>Login</button>
      </form>
    </>
  );
}

export default LoginForm;
