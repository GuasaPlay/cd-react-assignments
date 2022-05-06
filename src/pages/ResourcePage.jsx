import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CardsContainer } from "components/luke-api-walker/CardsContainer";
import { resourcesOptions } from "utils/general";

export const ResourcePage = () => {
  const params = useParams();

  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchResource = async () => {
      try {
        setLoading(true);
        const { resource, resourceId } = params;

        const url = `https://swapi.dev/api/${resource}/${resourceId}`;

        const response = await axios.get(url);

        const urlHomeworld = response.data.homeworld;

        const responseHomeworld =
          urlHomeworld && (await axios.get(urlHomeworld));

        setResult({
          resource: resourcesOptions.find(
            (option) => option.value === resource
          ),
          data: {
            ...response.data,
            ...(responseHomeworld && { homeworld: responseHomeworld.data }),
          },
        });
      } catch (error) {
        setResult(null);
      } finally {
        setLoading(false);
      }
    };
    fetchResource();
  }, [params]);

  return (
    <div className="mx-auto mt-20 max-w-[1100px] px-3">
      <section className="mt-8 flex w-full flex-col items-center">
        <CardsContainer loading={loading} result={result} />
      </section>
    </div>
  );
};
