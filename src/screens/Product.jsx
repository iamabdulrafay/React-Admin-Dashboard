import React from "react";
import DataShownTable from "../components/DataShownTable";

const Product = () => {
  return (
    <div className="container  mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
