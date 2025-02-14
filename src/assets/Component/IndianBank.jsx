// import React , {useState,useEffect} from "react" ;
import './IndianBank.css'


// export function IndianBank(){     

//     const [ifsc ,setIfsc] =useState("");
//     const [ifscD,setIfscD] = useState(null);
    

//     const [stateD , setStateD] =useState([]);
//     const [state ,setState] = useState("");

//     const [districtD,setDistrictD] = useState([]);
//     const [district , setDistrict] = useState("");

//     const [cityD , setCityD] = useState([]);
//     const [city ,setCity] = useState("");

//     const [centerD , setCenterD]=useState([]);
//     const [center ,setCenter] = useState("");

//     const [branchD, setBranchD] =useState([]);
//     const [branch , setBranch] = useState("");

//     function handelIfsc(){
//         fetch(`https://bank-apis.justinclicks.com/API/V1/IFSC/${ifsc}/`)
//         .then((res) => res.json())
//         .then((data) =>  setIfscD(data))
//         .catch((error) => console.log("Error" ,error));
//     }

//     // bank state 
//     const  StateData=()=>{
//         fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${state}/`)
//         .then((res)=> res.json())
//         .then((data) => setStateD(data))
//         .catch((error) => console.log("CODE ERROR STATE",error))
//     } 

//     // bank district
//     const DistrictData = () => {
//         fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${state}/${district}/`)
//         .then((res) => res.json())
//         .then((data) => setDistrictD(data))
//         .catch((error) => console.log("CODE ERROR DISTRICT",error))
//     }

//     // bank city
//     const CitytData = () => {
//         fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${state}/${district}/${city}/`)
//         .then((res) => res.json())
//         .then((data) => setCityD(data))
//         .catch((error) => console.log("CODE ERROR CITY",error))
//     }

//     // bank center
//     const CentertData = () => {
//         fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${state}/${district}/${city}/${center}/`)
//         .then((res) => res.json())
//         .then((data) => setCenterD(data))
//         .catch((error) => console.log("CODE ERROR CENTER",error))
//     }

//     // bank branch
//     const BranchtData = () => {
//         fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${state}/${district}/${city}/${center}/${branch}/`)
//         .then((res) => res.json())
//         .then((data) => setBranchD(data))
//         .catch((error) => console.log("CODE ERROR CENTER",error))
//     }

//     // conver all function in useEffect (this useEffect run when function call)
//     useEffect(()=>{
//         StateData();
//         DistrictData();
//         CitytData();
//         CentertData();
//         BranchtData();
//     },[]);


//     return(
//         <>
//         <div className="BANKS">
//             <div className="ifsc">
//                <input type="text" value={ifsc} onChange={(e) => setIfsc(e.target.value.toUpperCase())} placeholder="Enter IFSC code"/>
//                <button onClick={handelIfsc} > Search </button>


//                {ifscD && (
//                 <div style={{ marginTop: "20px" }}>
//                 <h2>Bank Details:</h2>
//                 <p>
//                     <strong>Bank Name:</strong> {ifscD.BANK}
//                 </p>
//                 <p>
//                     <strong>IFSC:</strong> {ifscD.IFSC}
//                 </p>
//                 <p>
//                     <strong>Branch:</strong> {ifscD.BRANCH}
//                 </p>
//                 <p>
//                     <strong>Address:</strong> {ifscD.ADDRESS}
//                 </p>
               
//                 </div>
//                 )}

//             </div>


//             <form action="">
//                 {/* <input type="text" className="state" value={state} onChange={(e) => setState(e.target.value.toUpperCase())} placeholder="ENTER STATE"/>

//                 <input type="text" className="district" value={district} onChange={(e) => setState(e.target.district.toUpperCase())} placeholder="ENTER DISTRICT" />

//                 <input type="text" className="city" value={city} onChange={(e) => setCity(e.target.center.toUpperCase())} placeholder="ENTER CITY"/>

//                 <input type="text" className="branch" value={center} onChange={(e) => setCenter(e.target.value.toUpperCase())} placeholder="ENTER CENTER" />

//                 <input type="text" className="branch" value={branch} onChange={(e) => setBranch(e.target.value.toUpperCase())} placeholder="ENTER BRANCH" /> */}

//                 <select onChange={(e) => setState(e.target.value.toUpperCase())} className="select">
//                         <option value="">Search State</option>
//                         {stateD.map((data) => (
//                             <option className="options" key={data} value={data}>
//                                 {data}
//                             </option>
//                         ))}
//                 </select>

//                 <select onChange={(e) => setDistrict(e.target.value.toUpperCase())} className="select">
//                         <option value="">Search District</option>
//                         {districtD.map((data) => (
//                             <option className="options" key={data} value={data}>
//                                 {data}
//                             </option>
//                         ))}
//                 </select>

//                 <select onChange={(e) => setCityD(e.target.value.toUpperCase())} className="select">
//                         <option value="">Search City</option>
//                         {cityD.map((data) => (
//                             <option className="options" key={data} value={data}>
//                                 {data}
//                             </option>
//                         ))}
//                 </select>

//                 <select onChange={(e) => setCenterD(e.target.value.toUpperCase())} className="select">
//                         <option value="">Search Center</option>
//                         {centerD.map((data) => (
//                             <option className="options" key={data} value={data}>
//                                 {data}
//                             </option>
//                         ))}
//                 </select>

//                 <select onChange={(e) => setBranchD(e.target.value.toUpperCase())} className="select">
//                         <option value="">Search Branch</option>
//                         {branchD.map((data) => (
//                             <option className="options" key={data} value={data}>
//                                 {data}
//                             </option>
//                         ))}
//                 </select>


//             </form>

           

//         </div>
//         </>
//     )



// }













// import React, { useState, useEffect } from "react";
// import "./IndianBank.css";

// export function IndianBank() {
//   const [ifsc, setIfsc] = useState("");
//   const [ifscDetails, setIfscDetails] = useState(null);

//   const [state, setState] = useState("");
//   const [statesData, setStatesData] = useState([]);
//   const [district, setDistrict] = useState("");
//   const [districtsData, setDistrictsData] = useState([]);
//   const [city, setCity] = useState("");
//   const [citiesData, setCitiesData] = useState([]);
//   const [center, setCenter] = useState("");
//   const [centersData, setCentersData] = useState([]);
//   const [branch, setBranch] = useState("");
//   const [branchesData, setBranchesData] = useState([]);

//   // Fetch IFSC Details
//   const fetchIfscDetails = () => {
//     fetch(`https://bank-apis.justinclicks.com/API/V1/IFSC/${ifsc}/`)
//       .then((res) => res.json())
//       .then((data) => setIfscDetails(data))
//       .catch((error) => console.error("Error fetching IFSC details:", error));
//   };

//   // Fetch States
//   useEffect(() => {
//     fetch("https://bank-apis.justinclicks.com/API/V1/STATE/")
//       .then((res) => res.json())
//       .then((data) => setStatesData(data))
//       .catch((error) => console.error("Error fetching states:", error));
//   }, []);

//   // Fetch Districts based on selected state
//   useEffect(() => {
//     if (state) {
//       fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${state}/`)
//         .then((res) => res.json())
//         .then((data) => setDistrictsData(data))
//         .catch((error) => console.error("Error fetching districts:", error));
//     }
//   }, [state]);

//   // Fetch Cities based on selected district
//   useEffect(() => {
//     if (district) {
//       fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${state}/${district}/`)
//         .then((res) => res.json())
//         .then((data) => setCitiesData(data))
//         .catch((error) => console.error("Error fetching cities:", error));
//     }
//   }, [district]);

//   // Fetch Centers based on selected city
//   useEffect(() => {
//     if (city) {
//       fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${state}/${district}/${city}/`)
//         .then((res) => res.json())
//         .then((data) => setCentersData(data))
//         .catch((error) => console.error("Error fetching centers:", error));
//     }
//   }, [city]);

//   // Fetch Branches based on selected center
//   useEffect(() => {
//     if (center) {
//       fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${state}/${district}/${city}/${center}/`)
//         .then((res) => res.json())
//         .then((data) => setBranchesData(data))
//         .catch((error) => console.error("Error fetching branches:", error));
//     }
//   }, [center]);

//   return (
//     <div className="BANKS">
//       {/* IFSC Search */}
//       <div className="ifsc">
//         <input
//           type="text"
//           value={ifsc}
//           onChange={(e) => setIfsc(e.target.value.toUpperCase())}
//           placeholder="Enter IFSC code"
//         />
//         <button onClick={fetchIfscDetails}>Search</button>

//         {ifscDetails && (
//           <div style={{ marginTop: "20px" }}>
//             <h2>Bank Details:</h2>
//             <p>
//               <strong>Bank Name:</strong> {ifscDetails.BANK}
//             </p>
//             <p>
//               <strong>IFSC:</strong> {ifscDetails.IFSC}
//             </p>
//             <p>
//               <strong>Branch:</strong> {ifscDetails.BRANCH}
//             </p>
//             <p>
//               <strong>Address:</strong> {ifscDetails.ADDRESS}
//             </p>
//           </div>
//         )}
//       </div>

//       {/* Dropdown Search */}
//       <form>
//         <select onChange={(e) => setState(e.target.value)} value={state}>
//           <option value="">Select State</option>
//           {statesData.map((state) => (
//             <option key={state} value={state}>
//               {state}
//             </option>
//           ))}
//         </select>

//         <select onChange={(e) => setDistrict(e.target.value)} value={district}>
//           <option value="">Select District</option>
//           {districtsData.map((district) => (
//             <option key={district} value={district}>
//               {district}
//             </option>
//           ))}
//         </select>

//         <select onChange={(e) => setCity(e.target.value)} value={city}>
//           <option value="">Select City</option>
//           {citiesData.map((city) => (
//             <option key={city} value={city}>
//               {city}
//             </option>
//           ))}
//         </select>

//         <select onChange={(e) => setCenter(e.target.value)} value={center}>
//           <option value="">Select Center</option>
//           {centersData.map((center) => (
//             <option key={center} value={center}>
//               {center}
//             </option>
//           ))}
//         </select>

//         <select onChange={(e) => setBranch(e.target.value)} value={branch}>
//           <option value="">Select Branch</option>
//           {branchesData.map((branch) => (
//             <option key={branch} value={branch}>
//               {branch}
//             </option>
//           ))}
//         </select>

//         <button onSubmit={}></button>
//       </form>
//     </div>
//   );
// }












import { useState, useEffect } from 'react';

export const IndianBank = () => {
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [cities, setCities] = useState([]);
  const [centers, setCenters] = useState([]);
  const [branches, setBranches] = useState([]);
  const [branchDetails, setBranchDetails] = useState(null);
  const [bankDetails, setBankDetails] = useState(null);
  const [ifscCode, setIfscCode] = useState('');

  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCenter, setSelectedCenter] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');

  useEffect(() => {
    fetch('https://bank-apis.justinclicks.com/API/V1/STATE/')
      .then(response => response.json())
      .then(data => setStates(data))
      .catch(error => console.error('Error fetching states:', error));
  }, []);

  useEffect(() => {
    if (selectedState) {
      fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${selectedState}/`)
        .then(response => response.json())
        .then(data => setDistricts(data))
        .catch(error => console.error('Error fetching districts:', error));
    }
  }, [selectedState]);

  useEffect(() => {
    if (selectedDistrict) {
      fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${selectedState}/${selectedDistrict}/`)
        .then(response => response.json())
        .then(data => setCities(data))
        .catch(error => console.error('Error fetching cities:', error));
    }
  }, [selectedDistrict]);

  useEffect(() => {
    if (selectedCity) {
      fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${selectedState}/${selectedDistrict}/${selectedCity}/`)
        .then(response => response.json())
        .then(data => setCenters(data))
        .catch(error => console.error('Error fetching centers:', error));
    }
  }, [selectedCity]);

  useEffect(() => {
    if (selectedCenter) {
      fetch(`https://bank-apis.justinclicks.com/API/V1/STATE/${selectedState}/${selectedDistrict}/${selectedCity}/${selectedCenter}/`)
        .then(response => response.json())
        .then(data => setBranches(data))
        .catch(error => console.error('Error fetching branches:', error));
    }
  }, [selectedCenter]);

  useEffect(() => {
    if (selectedBranch) {
      const branchName = selectedBranch.endsWith('.json') ? selectedBranch : `${selectedBranch}.json`;
      const branchUrl = `https://bank-apis.justinclicks.com/API/V1/STATE/${selectedState}/${selectedDistrict}/${selectedCity}/${selectedCenter}/${branchName}`;

      fetch(branchUrl)
        .then(response => response.json())
        .then(data => setBranchDetails(data))
        .catch(error => console.error('Error fetching branch details:', error));
    }
  }, [selectedBranch]);

  const fetchBankDetails = () => {
    if (ifscCode.trim() !== '') {
      fetch(`https://bank-apis.justinclicks.com/API/V1/IFSC/${ifscCode}/`)
        .then(response => response.json())
        .then(data => setBankDetails(data))
        .catch(error => console.error('Error fetching bank details:', error));
    }
  };

  return (
    <div className="container">
      <div className="bankmain">
      <h1 className="header">Bank Branch Finder</h1>

      {/* IFSC Code Lookup Section */}
      <div>
        <label className="label">Enter IFSC Code:</label>
        <div>
          <input
            type="text"
            className="input-text"
            value={ifscCode}
            onChange={(e) => setIfscCode(e.target.value.toUpperCase())}
            placeholder="Enter IFSC Code"
          />
          <button className="button" onClick={fetchBankDetails}>Get Details</button>
        </div>
        {bankDetails && (
          <div>
            <h2 className="subheader">Bank Details:</h2>
            <pre className="pre">{JSON.stringify(bankDetails, null, 2)}</pre>
          </div>
        )}
      </div>

      {/* Dropdowns */}
      <div>
        {[{ label: 'State', value: selectedState, options: states, onChange: setSelectedState },
          { label: 'District', value: selectedDistrict, options: districts, onChange: setSelectedDistrict },
          { label: 'City', value: selectedCity, options: cities, onChange: setSelectedCity },
          { label: 'Center', value: selectedCenter, options: centers, onChange: setSelectedCenter },
          { label: 'Branch', value: selectedBranch, options: branches.map(branch => branch.replace('.json', '')), onChange: setSelectedBranch }].map(
          ({ label, value, options, onChange }, index) => (
            <div key={index}>
              <label className="label">Select {label}:</label>
              <select className="select" value={value} onChange={(e) => onChange(e.target.value)}>
                <option value="">Select {label}</option>
                {options.map((option, idx) => (
                  <option key={idx} value={option}>{option}</option>
                ))}
              </select>
            </div>
          )
        )}
      </div>

      {/* Branch Details */}
      {branchDetails && (
        <div>
          <h2 className="subheader">Branch Details:</h2>
          <pre className="pre">{JSON.stringify(branchDetails, null, 2)}</pre>
        </div>
      )}
    </div>
    </div>
  );
};


