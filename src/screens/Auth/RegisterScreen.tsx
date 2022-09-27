import {Field, Form, Formik} from "formik";
import {useState} from "react";
import Switch from "react-switch";
import * as Yup from "yup";

import AuthLayout from "../../components/AuthLayout";

const initialValues = {
  username: "",
  password: "",
  email: "",
  team: false,
  teamID: "",
  role: "",
  continent: "",
  region: "",
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
  email: Yup.string().email("Formato Invalido").required("*Campo obligatorio"),
  role: Yup.string().required("*Campo obligatorio"),
  continent: Yup.string().required("*Campo obligatorio"),
  region: Yup.string().required("*Campo obligatorio"),
});

const RegisterScreen = () => {
  const [switchValue, setSwitchValue] = useState(false);

  const onSwitchChange = () => {
    setSwitchValue((prevState) => !prevState);
  };

  return (
    <AuthLayout title="Registro">
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({errors, touched, values}) => (
          <Form className="flex flex-col gap-y-2">
            <label htmlFor="username">Nombre de usuario</label>
            <Field
              className={
                errors.username && touched.username
                  ? "form-input rounded-lg h-8 border-red-500"
                  : "form-input rounded-lg h-8 border-gray-300"
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
                  : "form-input rounded-lg h-8 border-gray-300"
              }
              id="password"
              name="password"
              type="password"
            />
            {errors.password && touched.password && (
              <span className="text-red-500 font-medium">{errors.password}</span>
            )}

            <label htmlFor="email">Email</label>
            <Field
              className={
                errors.email && touched.email
                  ? "form-input rounded-lg h-8 border-red-500"
                  : "form-input rounded-lg h-8 border-gray-300"
              }
              id="email"
              name="email"
              type="email"
            />
            {errors.email && touched.email && (
              <span className="text-red-500 font-medium">{errors.email}</span>
            )}

            <div className="flex gap-2 items-center">
              <Switch
                activeBoxShadow="0px 1px 5px rgba(0,0,0,0.6)"
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                checked={switchValue}
                checkedIcon={false}
                height={20}
                id="team"
                offColor="#FFC5BE"
                uncheckedIcon={false}
                width={50}
                onChange={onSwitchChange}
                onColor="#FFC5BE"
                onHandleColor="#FF452B"
              />
              <label htmlFor="team">Perteneces a un equipo ya creado</label>
            </div>

            {switchValue && (
              <>
                <label htmlFor="teamID">Por favor, introduce el identificador de equipo</label>
                <Field
                  className={
                    errors.teamID && touched.teamID
                      ? "form-input rounded-lg h-8 border-red-500"
                      : "form-input rounded-lg h-8 border-gray-300"
                  }
                  id="teamID"
                  name="teamID"
                  type="text"
                />
                {errors.teamID && touched.teamID && (
                  <span className="text-red-500 font-medium">{errors.teamID}</span>
                )}
              </>
            )}

            <label htmlFor="role">Rol</label>
            <Field
              as="select"
              className={
                errors.role && touched.role
                  ? "form-input rounded-lg h-9 border-red-500 text-sm"
                  : "form-input rounded-lg h-9 border-gray-300 text-sm"
              }
              id="role"
              name="role"
            >
              <option value="" />
              <option className="text-md" value="Uno">
                Uno
              </option>
              <option className="text-md" value="Dos">
                Dos
              </option>
              <option className="text-md" value="Tres">
                Tres
              </option>
            </Field>
            {errors.role && touched.role && (
              <span className="text-red-500 font-medium">{errors.role}</span>
            )}

            <label htmlFor="continent">Continente</label>
            <Field
              as="select"
              className={
                errors.continent && touched.continent
                  ? "form-input rounded-lg h-9 border-red-500 text-sm"
                  : "form-input rounded-lg h-9 border-gray-300 text-sm"
              }
              id="continent"
              name="continent"
            >
              <option value="" />
              <option className="text-md" value="Cuatro">
                Cuatro
              </option>
              <option className="text-md" value="Cinco">
                Cinco
              </option>
              <option className="text-md" value="America">
                America
              </option>
            </Field>
            {errors.continent && touched.continent && (
              <span className="text-red-500 font-medium">{errors.continent}</span>
            )}

            {values.continent === "America" ? (
              <>
                <label htmlFor="region">Region</label>
                <Field
                  as="select"
                  className={
                    errors.region && touched.region
                      ? "form-input rounded-lg h-9 border-red-500 text-sm"
                      : "form-input rounded-lg h-9 border-gray-300 text-sm"
                  }
                  id="region"
                  name="region"
                >
                  <option value="" />
                  <option className="text-md" value="Siete">
                    Siete
                  </option>
                  <option className="text-md" value="Ocho">
                    Ocho
                  </option>
                  <option className="text-md" value="Nueve">
                    Nueve
                  </option>
                </Field>
                {errors.region && touched.region && (
                  <span className="text-red-500 font-medium">{errors.region}</span>
                )}
              </>
            ) : null}

            <button
              className="rounded-lg bg-button-primary text-white h-10 hover:bg-white hover:text-button-primary hover:border-button-primary border-2"
              type="submit"
            >
              Enviar
            </button>
          </Form>
        )}
      </Formik>
      <p className="font-medium">Ir a Iniciar sesion</p>
    </AuthLayout>
  );
};

export default RegisterScreen;
