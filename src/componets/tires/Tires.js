import TiresTable from "./TiresTable";
import NewTireForm from "../tires/NewTireForm";

const Tires = () => {
  return (
    <div className="App">
      <div className="info">
        <TiresTable />
        <br></br>
        <br></br>
        <br></br>
        <NewTireForm />
      </div>
    </div>
  );
};

export default Tires;
