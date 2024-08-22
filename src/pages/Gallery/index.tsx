import GalleryBanner from "@/assets/GalleryBanner.jpg";
import Motion from "@/components/Motion";
import { useFetch } from "@/hooks/useFetch";
import { RootInterface } from "@/utils/apiResponse";
import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from "react-router-dom";

const Gallery = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const { data, loading, error } = useFetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=restaurant&page=3&per_page=24`
  );
  return (
    <Flex flexDir={"column"}>
      <Box position="relative">
        <Image
          src={GalleryBanner}
          alt="banner"
          w={"full"}
          aspectRatio={{ base: 4 / 3, sm: 16 / 9, md: 16 / 5 }}
          objectFit={"cover"}
        />
        <Text
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          color="white"
          fontSize="2xl"
          fontWeight="bold"
        >
          Gallery
        </Text>
      </Box>
      <Container
        maxW={{ base: "98vw", sm: "95vw", md: "90vw", xl: "85vw" }}
        py={10}
      >
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error</p>
        ) : (
          data && (
            <ResponsiveMasonry
              columnsCountBreakPoints={{
                0: 1,
                550: 2,
                900: 3,
                1200: 4,
              }}
            >
              <Masonry gutter="20px">
                {(data as RootInterface)?.hits.map((item) => (
                  <Motion.Flex
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Link to={item.webformatURL} key={item.id} target="_blank">
                      <Image
                        loading="lazy"
                        key={item.id}
                        src={item.webformatURL}
                        alt={item.tags}
                        borderRadius={10}
                      />
                    </Link>
                  </Motion.Flex>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          )
        )}
      </Container>
    </Flex>
  );
};

export default Gallery;
