import { FilmsCard } from "./FilmsCard";
import { LoadingApi } from "./LoadingApi";
import { NotFoundResource } from "./NotFoundResource";
import { PeopleCard } from "./PeopleCard";
import { PlanetsCard } from "./PlanetsCard";
import { SpeciesCard } from "./SpeciesCard";
import { StarshipsCard } from "./StarshipsCard";
import { VehiclesCard } from "./VehiclesCard";

export const CardsContainer = ({ loading, result }) => {
  return (
    <>
      {!loading && result && result.resource.value === "people" && (
        <PeopleCard result={result} />
      )}
      {!loading && result && result.resource.value === "films" && (
        <FilmsCard result={result} />
      )}
      {!loading && result && result.resource.value === "planets" && (
        <PlanetsCard result={result} />
      )}
      {!loading && result && result.resource.value === "species" && (
        <SpeciesCard result={result} />
      )}
      {!loading && result && result.resource.value === "vehicles" && (
        <VehiclesCard result={result} />
      )}
      {!loading && result && result.resource.value === "starships" && (
        <StarshipsCard result={result} />
      )}

      {!loading && !result && <NotFoundResource />}
      {loading && <LoadingApi />}
    </>
  );
};
