import { Box } from "components/generador-de-caja/Box";
import { ValidColors } from "components/generador-de-caja/ValidColors";
import { PageTitle } from "components/ui/PageTitle";
import { useForm } from "hooks/useForm";
import { useState } from "react";
import { colors } from "utils/general";

const initialValues = {
  color: "",
  size: 200,
};

export const GeneradorDeCajaPage = () => {
  const [boxData, setBoxData] = useState([]);

  const { handleInputChange, values, resetForm } = useForm(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundColor = colors.find(
      (color) => color.name === values.color.toUpperCase().trim()
    );
    if (foundColor) {
      const box = {
        ...foundColor,
        size: parseInt(values.size) < 50 ? 200 : parseInt(values.size),
      };

      setBoxData([...boxData, box]);
      resetForm();
    }
  };

  return (
    <div className="mx-auto mt-20 max-w-[1100px] px-3">
      <PageTitle name="19. Generador de caja" />
      <section className="mt-8 flex w-full justify-center">
        <div className="w-1/2">
          <ValidColors />
          <form
            onSubmit={handleSubmit}
            className="flex w-full items-end space-x-4"
          >
            <div className=" flex-1">
              <label className="text-base text-slate-700" htmlFor="color">
                Color
              </label>
              <input
                type="text"
                name="color"
                id="color"
                value={values.color}
                onChange={handleInputChange}
                className="w-full rounded-lg border-2 border-gray-300 bg-gray-300 p-3 uppercase focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label className="text-base text-slate-700" htmlFor="size">
                Tamaño
              </label>
              <input
                type="number"
                name="size"
                id="size"
                value={values.size}
                onChange={handleInputChange}
                className="w-full rounded-lg border-2 border-gray-300 bg-gray-300 p-3 uppercase focus:outline-none"
              />
            </div>
            <div>
              <button
                type="submit"
                className="rounded-lg border-2 border-gray-300 py-3 px-6"
              >
                Add
              </button>
            </div>
          </form>
          <div className="mt-3 text-center">
            <p className="text-sm  text-slate-700">
              Si el campo tamaño es mejor a 50 entonces se aplicará el tamaño
              por defecto de 200
            </p>
          </div>
        </div>
      </section>
      <section className="mt-6">
        <div className="flex w-full flex-wrap">
          {boxData.map(({ code, size }, index) => (
            <Box size={size} color={code} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};
