import React , {useState,useEffect} from "react" ;
import './IndianBank.css'


export function IndianBank(){


    const [ifsc ,setIfsc] =useState("");
    const [ifscD,setIfscD] = useState(null);
    

    const [stateD , setStateD] =useState([]);
    const [state ,setState] = useState("");

    const [districtD,setDistrictD] = useState([]);
    const [district , setDistrict] = useState("");

    const [cityD , setCityD] = useState([]);
    const [city ,setCity] = useState("");

    const [centerD , setCenterD]=useState([]);
    const [center ,setCenter] = useState("");

    const [branchD, setBranchD] =useState([]);
    const [branch , setBranch] = useState("");

    function handelIfsc(){
        fetch(`https://bank-apis.justinclicks.com/API/V1/IFSC/${ifsc}/`)
        .then((res) => res.json())
        .then((data) =>  setIfscD(data))
        .catch((error) => console.log("Error" ,error));
    }

    // bank state 
    const  StateData=()=>{
        fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${state}/`)
        .then((res)=> res.json())
        .then((data) => setStateD(data))
        .catch((error) => console.log("CODE ERROR STATE",error))
    } 

    // bank district
    const DistrictData = () => {
        fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${state}/${district}/`)
        .then((res) => res.json())
        .then((data) => setDistrictD(data))
        .catch((error) => console.log("CODE ERROR DISTRICT",error))
    }

    // bank city
    const CitytData = () => {
        fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${state}/${district}/${city}/`)
        .then((res) => res.json())
        .then((data) => setCityD(data))
        .catch((error) => console.log("CODE ERROR CITY",error))
    }

    // bank center
    const CentertData = () => {
        fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${state}/${district}/${city}/${center}/`)
        .then((res) => res.json())
        .then((data) => setCenterD(data))
        .catch((error) => console.log("CODE ERROR CENTER",error))
    }

    // bank branch
    const BranchtData = () => {
        fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${state}/${district}/${city}/${center}/${branch}/`)
        .then((res) => res.json())
        .then((data) => setBranchD(data))
        .catch((error) => console.log("CODE ERROR CENTER",error))
    }

    // conver all function in useEffect (this useEffect run when function call)
    useEffect(()=>{
        StateData();
        DistrictData();
        CitytData();
        CentertData();
        BranchtData();
    },[]);







    


    return(
        <>
        <div className="BANKS">
            <div className="ifsc">
               <input type="text" value={ifsc} onChange={(e) => setIfsc(e.target.value.toUpperCase())} placeholder="Enter IFSC code"/>
               <button onClick={handelIfsc} > Search </button>


               {ifscD && (
                <div style={{ marginTop: "20px" }}>
                <h2>Bank Details:</h2>
                <p>
                    <strong>Bank Name:</strong> {ifscD.BANK}
                </p>
                <p>
                    <strong>IFSC:</strong> {ifscD.IFSC}
                </p>
                <p>
                    <strong>Branch:</strong> {ifscD.BRANCH}
                </p>
                <p>
                    <strong>Address:</strong> {ifscD.ADDRESS}
                </p>
               
                </div>
                )}

            </div>


            <form action="">
                <input type="text" className="state" value={state} onChange={(e) => setState(e.target.value.toUpperCase())}/>

                <input type="text" className="district" value={district} onChange={(e) => setState(e.target.district.toUpperCase())} />

                <input type="text" className="city" value={city} onChange={(e) => setCity(e.target.center.toUpperCase())}/>

                <input type="text" className="branch" value={branch} onChange={(e) => setBranch(e.target.value.toUpperCase())} />


            </form>

           

        </div>
        </>
    )



}


