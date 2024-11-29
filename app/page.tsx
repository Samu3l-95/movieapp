"use client";
import "../app/globals.css";
import HeaderNav from "@/components/Header/HeaderNav";
import AntdStyledComponentsRegistry from "@/components/AntStyled/AntdStyledComponentsRegistry";
import Search from "@/components/Search/Search";
import { MovieProvider } from "@/context/MovieContext";
import { useEffect, useState } from "react";
import { Row, Spin } from "antd";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <MovieProvider>
      <AntdStyledComponentsRegistry>
        <>
          {isLoading ? (
            <Row justify="center" align="middle" style={{ height: "100vh" }}>
              <Spin size="large" />
            </Row>
          ) : (
            <HeaderNav>
              <Search />
            </HeaderNav>
          )}
        </>
      </AntdStyledComponentsRegistry>
    </MovieProvider>
  );
}
