import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Spin, Row, Col } from "antd";
import HeaderNav from "@/components/Header/HeaderNav";
import AntdStyledComponentsRegistry from "@/components/AntStyled/AntdStyledComponentsRegistry";
import {
  BackButton,
  ColImage,
  DetailsContainer,
  DetailsRatings,
  DetailsRatingsContent,
  MovieImage,
  RatingsContainer,
  StyledText,
} from "@/styles/StyledMovie";
import { LeftOutlined } from "@ant-design/icons";

const MovieDetails = () => {
  const { query, push } = useRouter();
  const { id } = query;
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;
  const apiUrl = process.env.NEXT_PUBLIC_OMDB_API;
  const url = `${apiUrl}/?i=${id}&apikey=${apiKey}`;

  useEffect(() => {
    if (id) {
      const fetchMovieDetails = async () => {
        setLoading(true);
        try {
          const response = await fetch(url);
          const data = await response.json();
          setMovie(data);
        } catch (error) {
          console.error("Failed to fetch movie details:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchMovieDetails();
    }
  }, [id]);

  if (loading || !movie) {
    return (
      <Row justify="center" align="middle" style={{ height: "100vh" }}>
        <Spin size="large" />
      </Row>
    );
  }

  return (
    <AntdStyledComponentsRegistry>
    
        <HeaderNav>
          <Row justify="center" style={{ padding: "40px 20px" }}>
            <Col xs={24} sm={22} md={22} lg={22}>
              <BackButton
                icon={<LeftOutlined />}
                type="default"
                onClick={() => push("/")}
              >
                Voltar
              </BackButton>
              <Row gutter={24}>
                <Col xs={24} md={24} lg={16}>
                  <DetailsContainer>
                    <StyledText fontSize="48px" fontWeight="500">
                      {movie.Title}
                    </StyledText>
                    <Row style={{ marginTop: 15 }}>
                      <StyledText fontSize="20px" fontWeight="100">
                        Ano: {movie.Year}
                      </StyledText>
                    </Row>
                    <Row>
                      <StyledText fontSize="20px" fontWeight="100">
                        Tempo: {movie.Runtime}
                      </StyledText>
                    </Row>
                    <Row>
                      <StyledText fontSize="20px" fontWeight="100">
                        Atores: {movie.Actors}
                      </StyledText>
                    </Row>
                    <RatingsContainer>
                      <Row>
                        <StyledText fontSize="32px" fontWeight="500">
                          Avaliações
                        </StyledText>
                      </Row>
                      <DetailsRatings>
                        {movie.Ratings.map((rating: any) => (
                          <div key={rating.Source}>
                            <StyledText fontSize="20px" fontWeight="500">
                              {rating.Source}
                            </StyledText>
                            <br />
                            <DetailsRatingsContent>
                              <StyledText
                                color="#3dac9d"
                                fontSize="20px"
                                fontWeight="500"
                              >
                                {rating.Value}
                              </StyledText>
                            </DetailsRatingsContent>
                          </div>
                        ))}
                      </DetailsRatings>
                    </RatingsContainer>
                  </DetailsContainer>
                </Col>
                <ColImage xs={24} md={8}>
                  <MovieImage
                    src={
                      movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"
                    }
                    alt={movie.Title}
                  />
                </ColImage>
              </Row>
            </Col>
          </Row>
        </HeaderNav>
     
    </AntdStyledComponentsRegistry>
  );
};

export default MovieDetails;
