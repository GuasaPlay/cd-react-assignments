import { ValidColors } from "components/generador-de-caja/ValidColors";
import { useParams } from "react-router-dom";
import { colors } from "utils/general";

export const WordColorPage = () => {
  const params = useParams();
  console.log(params);
  const getBgColor = () => {
    const foundColor = colors.find(
      (color) => color.name === params.color2.toUpperCase().trim()
    );
    console.log(foundColor);
    return foundColor ? foundColor.code : "bg-red-400";
  };
  const getTextColor = () => {
    const foundColor = colors.find(
      (color) => color.name === params.color1.toUpperCase().trim()
    );

    return foundColor ? foundColor.text : "text-blue-500";
  };

  return (
    <>
      <div className="mt-6 flex justify-center px-4">
        <ValidColors />
      </div>
      <div
        className={`mt-12 flex w-full justify-center py-3 px-3 ${getBgColor()}`}
      >
        <h1 className={`text-2xl font-semibold ${getTextColor()}`}>
          The word is: {params.word}
        </h1>
      </div>
    </>
  );
};
