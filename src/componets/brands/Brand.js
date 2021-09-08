import BrandsTable from "./BrandsTable";
import { NewBrndForm } from "../brands/NewBrndForm";

const Brand = () => {
  return (
    <div className="App-brand">
      <div className="model">
        <br></br>
        <br></br>
      </div>
      <BrandsTable />
      <br></br>
      <br></br>
      <NewBrndForm />
      <br></br>
      <br></br>
      <div className="brands"></div>
    </div>
  );
};
export default Brand;
