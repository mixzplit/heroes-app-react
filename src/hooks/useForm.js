import { useState } from "react";

// Nuestro valor inicial sera un Objeto que
// recibiremos desde el exterior
export const useForm = (initialForm = {}) => {

  const [formState, setFormState] = useState(initialForm);


  // Cambios del form
  // target es una propiedad del evento onChange
  // desestructuramos y despues obtenemos lo que
  // necesitamos
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    // nuevo estado
    setFormState({
      ...formState, //estado actual
      [name]: value, // nuevo valor de la propiedad name
    });
  };

  // Limpiar Formulario
  // seteamos el valor inicial del formulario
  const onResetForm = () => {
    setFormState( initialForm );
  }


  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  };
};