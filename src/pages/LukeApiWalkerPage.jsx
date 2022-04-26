import Select from "react-select";
import { PageTitle } from "components/ui/PageTitle";
import { resourcesOptions } from "utils/general";
import { useForm } from "hooks/useForm";
import axios from "axios";
import { useState } from "react";
import { CardsContainer } from "components/luke-api-walker/CardsContainer";

const initialValues = {
  resource: "",
  resourceId: "",
};
export const LukeApiWalkerPage = () => {
  const { handleInputChange, values } = useForm(initialValues);

  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { resource, resourceId } = values;
      if (!resource || !resourceId) return null;

      setLoading(true);
      const url = `https://swapi.dev/api/${resource.value}/${resourceId}`;

      const response = await axios.get(url);

      setResult({
        resource,
        data: response.data,
      });
    } catch (error) {
      setResult(null);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="mx-auto mt-20 max-w-[1100px] px-3">
      <PageTitle name="26. Practica de enrutamiento" />
      <section className="mt-8 flex w-full flex-col items-center">
        <div className="grid w-1/2 grid-cols-2 gap-6">
          <div className="flex-1">
            <label className="text-base text-slate-700" htmlFor="color">
              Search for
            </label>
            <div>
              <Select
                value={values.resource}
                onChange={(data) => {
                  handleInputChange({
                    target: {
                      name: "resource",
                      value: data,
                    },
                  });
                }}
                name="resource"
                isSearchable
                options={resourcesOptions}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-1 items-end space-x-2"
          >
            <div>
              <label className="text-base text-slate-700" htmlFor="resourceId">
                Id
              </label>
              <div>
                <input
                  value={values.resourceId}
                  onChange={handleInputChange}
                  name="resourceId"
                  id="resourceId"
                  type="text"
                  className="block w-full rounded border border-zinc-400/60 px-3 py-1.5 outline-2 focus:outline-blue-500"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="rounded border border-zinc-500 bg-zinc-500 px-2 py-1.5 text-white hover:bg-zinc-600"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <CardsContainer loading={loading} result={result} />
      </section>
    </div>
  );
};
