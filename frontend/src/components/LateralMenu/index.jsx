import { useState, useEffect } from "react";
import { Container } from "./styles";
import { FilterMenu } from "../FilterMenu";
import { HiMenu } from "react-icons/hi";
import useFetch from "../../hooks/useFetch";

export const LateralMenu = ({ onclick, checkedTipos, checkedBandas, setCheckedTipos, setCheckedBandas}) => {
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
        checkedItems={checkedBandas}
        title={"Por Banda"}
        data={dataBandas}
        onChange={setCheckedBandas}
        />
      }
      {
        !loadingTipos && 
        <FilterMenu
        checkedItems={checkedTipos}
        title={"Por Produto"}
        data={dataTipos}
        onChange={setCheckedTipos}
        />
      }
    </Container>
  );
};
