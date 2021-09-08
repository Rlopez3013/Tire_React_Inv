import MakersTable from "../makers/MakersTable";
import NewMkrForm from "../makers/NewMkrForm";

const Maker = () => {
  return (
    <div className="model-table">
      <div className="mdls-table">
        <MakersTable />
        <br></br>
        <br></br>
        <br></br>
        <NewMkrForm />
      </div>
    </div>
  );
};
export default Maker;
