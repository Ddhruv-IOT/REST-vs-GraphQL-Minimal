import AssetList1 from "./components/restApi/AssetList1";
import AssetList2 from "./components/graphql/AssetList2";
import "./App.css";

function App() {
  return (
    <>
      <div className="main">
        <div className="box">
          <AssetList1 />
        </div>
        <div className="box">
          <AssetList2 />
        </div>
      </div>
    </>
  );
}

export default App;
