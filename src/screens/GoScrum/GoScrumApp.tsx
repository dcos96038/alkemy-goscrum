import {Field, Form, Formik} from "formik";

import Header from "../../components/GoScrum/Header";

const GoScrumApp = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col sm:flex-row">
        <div className="container m-5 w-full">
          <h2 className="font-semibold text-[24px]">Crear Tarea</h2>
          <h3 className=" text-[15px]">Crea tus tareas</h3>
          <Formik
            initialValues={{title: "", state: "", priority: "", description: ""}}
            onSubmit={(values) => console.log(values)}
          >
            {({errors, touched}) => (
              <Form className="flex gap-4 flex-col mt-2">
                <div className="flex gap-x-2 ">
                  <Field
                    className="form-input rounded-lg w-2/6 h-[37px] border-gray-300 text-sm"
                    name="title"
                    placeholder="Titulo"
                    type="text"
                  />
                  <Field
                    as="select"
                    className="form-input rounded-lg w-2/6 h-[37px] border-gray-300 text-sm"
                    name="state"
                  >
                    <option selected value="Seleccionar un estado">
                      Seleccionar un estado
                    </option>
                    <option value="Hola">Hola</option>
                  </Field>
                  <Field
                    as="select"
                    className="form-input rounded-lg w-2/6 h-[37px] border-gray-300 text-sm"
                    name="priority"
                  >
                    <option selected value="Seleccionar una prioridad">
                      Seleccionar una prioridad
                    </option>
                    <option value="Uno">Uno</option>
                  </Field>
                </div>
                <Field
                  as="textarea"
                  className="form-input rounded-lg h-[100px] border-gray-300 w-full"
                  name="title"
                  placeholder="Descripcion"
                  type="text"
                />
                <button className="w-[100px] h-[40px] rounded-lg text-white bg-button-primary border-2 drop-shadow-md hover:bg-white hover:border-button-primary hover:text-button-primary">
                  Crear
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="container">
          <h2 className="font-semibold text-[24px]">Mis tareas</h2>
        </div>
      </div>
    </>
  );
};

export default GoScrumApp;
