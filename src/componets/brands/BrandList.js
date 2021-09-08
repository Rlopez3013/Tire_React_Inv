import React, { useContext } from "react";

import BrandContext from "../context/BrandContext";

const BrandList = () => {
  const [brands, setBrands] = useContext(BrandContext);

  return (
    <>
      {brands.map((brand) => (
        <brands brand={brand.brand} key={brand.id} />
      ))}
    </>
  );
};
export default BrandList;
