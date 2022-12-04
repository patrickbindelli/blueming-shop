import { useState, useEffect } from "react";
import { Container } from "./styles";
import { FilterMenu } from "../FilterMenu";
import { HiMenu } from "react-icons/hi";
import useFetch from "../../hooks/useFetch";

export const LateralMenu = ({ onclick, checkedTipos, checkedBandas, onChange}) => {
  const {data: dataBandas, error: errorBandas, loading: loadingBandas} = useFetch('/api/bandas/')
  const {data: dataTipos, error: errorTipos, loading: loadingTipos} = useFetch('/api/tipos/')

  if(errorBandas || errorTipos){
    return(
      <Container>
      <HiMenu className="menu" size={40} onClick={onclick} />
      <div className="filtros-header">
        <span className="filtros-title">FILTROS</span>
      </div>
      <p className="errorMsg">Erro ao carregar menu</p>
    </Container>
      
    )
  }

  return (
    <Container>
      <HiMenu className="menu" size={40} onClick={onclick} />
      <div className="filtros-header">
        <span className="filtros-title">FILTROS</span>
      </div>
      {
        !loadingBandas && 
        <FilterMenu
        checkedItems={checkedTipos}
        title={"Por Banda"}
        data={dataBandas}
        onChange={onChange}
        />
      }
      {
        !loadingTipos && 
        <FilterMenu
        checkedItems={checkedBandas}
        title={"Por Produto"}
        data={dataTipos}
        onChange={onChange}
        />
      }
    </Container>
  );
};
