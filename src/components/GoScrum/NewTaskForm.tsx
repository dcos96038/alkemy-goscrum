import {Formik, Field, Form} from "formik";
import * as Yup from "yup";

const initialValues = {
  title: "",
  state: "",
  priority: "",
  description: "",
};

const NewTaskSchema = Yup.object().shape({
  title: Yup.string()
    .min(4, "El titulo debe tener entre 4 y 30 caracteres")
    .max(30, "El titulo debe tener entre 4 y 30 caracteres")
    .required("Titulo obligatorio"),
  state: Yup.string().required("Estado obligatorio"),
  priority: Yup.string().required("Prioridad obligatoria"),
  description: Yup.string()
    .min(10, "La descripcion debe tener al menos 10 caracteres")
    .required("Descripcion obligatoria"),
});

const NewTaskForm = () => {
  return (
    <div className="container m-5 w-full">
      <h2 className="font-semibold text-[24px]">Crear Tarea</h2>
      <h3 className=" text-[15px]">Crea tus tareas</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={NewTaskSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({errors, touched, values}) => (
          <Form className="flex gap-4 flex-col mt-2">
            <div className="flex gap-x-2">
              <Field
                className="form-input rounded-lg w-2/6 h-[37px] border-gray-300 text-sm"
                name="title"
                placeholder="Titulo"
                type="text"
              />

              <Field
                as="select"
                className="form-select rounded-lg w-2/6 h-[37px] border-gray-300 text-sm"
                name="state"
                value={values.state}
              >
                <option value="Seleccionar un estado">Seleccionar un estado</option>
                <option value="Hola">Hola</option>
              </Field>

              <Field
                as="select"
                className="form-select rounded-lg w-2/6 h-[37px] border-gray-300 text-sm"
                name="priority"
                value={values.priority}
              >
                <option value="Seleccionar una prioridad">Seleccionar una prioridad</option>
                <option value="Uno">Uno</option>
              </Field>
            </div>

            <Field
              as="textarea"
              className="form-input rounded-lg h-[100px] border-gray-300 w-full"
              name="description"
              placeholder="Descripcion"
              type="text"
            />
            {errors.title && touched.title && <span>{errors.title}</span>}
            {errors.state && touched.state && <span>{errors.state}</span>}
            {errors.priority && touched.priority && <span>{errors.priority}</span>}
            {errors.description && touched.description && <span>{errors.description}</span>}

            <button className="w-[100px] h-[40px] rounded-lg text-white bg-button-primary border-2 drop-shadow-md hover:bg-white hover:border-button-primary hover:text-button-primary">
              Crear
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewTaskForm;
