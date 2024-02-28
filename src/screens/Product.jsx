import React from "react";
import DataShownTable from "../components/DataShownTable";

const Product = () => {
  return (
    <div>
      <DataShownTable
        title="Title"
        company="Company"
        color="Color"
        instock="Instock"
        date="CreatedAt"
        amount="Price"
        url="https://api.jsonbin.io/v3/b/65dee2d2dc74654018aaf299"></DataShownTable>
    </div>
  );
};

export default Product;
