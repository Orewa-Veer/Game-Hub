import { Badge } from "@chakra-ui/react";
interface Prop {
  score: number;
}
const CardsBadge = ({ score }: Prop) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <>
      <Badge
        colorPalette={color}
        paddingX={2}
        paddingY={1}
        fontSize={"14px"}
        borderRadius={2}
      >
        {score}
      </Badge>
    </>
  );
};

export default CardsBadge;
