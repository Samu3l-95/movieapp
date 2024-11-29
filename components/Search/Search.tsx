import { Row, Col, List } from "antd";
import {
  StyledContentDiv,
  StyledDivList,
  StyledIcon,
  StyledListItem,
  StyledRowContainer,
  StyledSearch,
  StyledText,
  StyledTextList,
} from "./StyledSearch";
import { useMovieContext } from "@/context/MovieContext";
import { useEffect } from "react";
import Link from "next/link";

const Search = () => {
  const { searchTerm, setSearchTerm, movies, loading, fetchMovies } =
    useMovieContext();
  const term = searchTerm || "";

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (fetchMovies) {
        fetchMovies(term);
      } else {
        console.error("function is not defined.");
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <StyledRowContainer justify={"center"}>
      <Col xs={24} sm={24} lg={10}>
        <Row justify={"center"}>
          <Col xs={24} sm={24} lg={24} style={{ display: "contents" }}>
            <StyledText fontWeight="500" fontSize="48px" margin="20px">
              Que filme procura?
            </StyledText>
          </Col>
        </Row>
          <StyledSearch
            value={searchTerm}
            onChange={(e) => setSearchTerm!(e.target.value)}
            suffix={<StyledIcon />}
            placeholder="Introduza o nome do filme"
          />
          {movies!.length > 0 && (
            <StyledContentDiv>
              <Row style={{ height: 30 }} />
              <StyledDivList>
                <List
                  size="small"
                  dataSource={movies}
                  renderItem={(movie) => (
                    <Link href={`/movie/${movie.imdbID}`} key={movie.imdbID}>
                      <StyledListItem key={movie.imdbID}>
                        <StyledTextList>
                          {movie.Title} ({movie.Year})
                        </StyledTextList>
                      </StyledListItem>
                    </Link>
                  )}
                />
              </StyledDivList>
            </StyledContentDiv>
          )}
        </Col>
    </StyledRowContainer>
  );
};

export default Search;
