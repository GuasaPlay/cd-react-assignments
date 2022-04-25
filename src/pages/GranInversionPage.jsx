import PersonCard from "components/apoyalo/PersonCard";
import { PageTitle } from "components/ui/PageTitle";

export const GranInversionPage = () => {
  return (
    <div className="mx-auto mt-20 max-w-[1100px]">
      <PageTitle name="12. Gran inversión" />
      <div className="mt-6 space-y-4">
        <PersonCard
          firstName="Jane"
          lastName="Doe"
          age={45}
          hairColor="Black"
        />
        <PersonCard
          firstName="John"
          lastName="Smith"
          age={88}
          hairColor="Brown"
        />
        <PersonCard
          firstName="Millard"
          lastName="Fillmore"
          age={50}
          hairColor="Brown"
        />
        <PersonCard
          firstName="Maria"
          lastName="Smith"
          age={62}
          hairColor="Brown"
        />
      </div>
    </div>
  );
};
