/* eslint-disable react/prop-types */
import { InfoIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

const VideoTitle = ({ title, overview }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="pt-[20em] w-screen aspect-video pl-[10em] absolute bg-gradient-to-r from-black">
      <Box width={"25%"}>
        <Heading>{title}</Heading>

        <Text marginTop={"1.5em"} marginBottom={"1.5em"} fontSize={"0.9em"}>
          {readMore ? overview : `${overview.substring(0, 80)}...`}
          <button className="btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "  read more"}
          </button>
        </Text>

        <Button
          marginRight={"1em"}
          width={"7em"}
          padding={"1.5em"}
          bg="#f5f6f7"
          color="Black"
          _hover={{ bg: "#ebedf0" }}
          className="fa"
        >
          <img src="/icons8-play-96.png" alt="" className="w-4 mr-1 mt-0.5" />{" "}
          Play
        </Button>
        <Button
          width={"10em"}
          padding={"1.5em"}
          className=""
          variant="outline"
          onClick={() => setReadMore(!readMore)}
        >
          <InfoIcon className="mr-2 " />{" "}
          {readMore ? " Less Info" : " More Info"}
        </Button>
      </Box>
    </div>
  );
};

export default VideoTitle;