import {Field, Form, Formik} from "formik";
import * as Yup from "yup";

import AuthLayout from "../../components/AuthLayout";

interface FormValues {
  username: string;
  password: string;
}

const initialValues: FormValues = {
  username: "",
  password: "",
};

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, "El usuario debe ser de longitud mayor a 4 y menor a 20")
    .max(20, "El usuario debe ser de longitud mayor a 4 y menor a 20")
    .required("*Campo obligatorio"),
  password: Yup.string()
    .min(8, "La longitud de la contraseña debe ser mayor a 8 y menor a 16")
    .max(16, "La longitud de la contraseña debe ser mayor a 8 y menor a 16")
    .required("*Campo obligatorio"),
});

const LoginScreen = () => {
  return (
    <AuthLayout title="Iniciar sesión">
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({errors, touched}) => (
          <Form className="flex flex-col gap-y-2">
            <label htmlFor="username">Nombre de usuario</label>
            <Field
              className={
                errors.username && touched.username
                  ? "form-input rounded-lg h-8 border-red-500"
                  : "form-input rounded-lg h-8 border-gray-100"
              }
              id="username"
              name="username"
              type="text"
            />
            {errors.username && touched.username && (
              <span className="text-red-500 font-medium">{errors.username}</span>
            )}

            <label htmlFor="password">Contraseña</label>
            <Field
              className={
                errors.password && touched.password
                  ? "form-input rounded-lg h-8 border-red-500"
                  : "form-input rounded-lg h-8 border-gray-100"
              }
              id="password"
              name="password"
              type="password"
            />
            {errors.password && touched.password && (
              <span className="text-red-500 font-medium">{errors.password}</span>
            )}

            <button
              className="rounded-lg bg-button-primary text-white h-10 hover:bg-white hover:text-button-primary hover:border-button-primary border-2"
              type="submit"
            >
              Enviar
            </button>
          </Form>
        )}
      </Formik>
      <p className="font-medium">Registrarme</p>
    </AuthLayout>
  );
};

export default LoginScreen;
