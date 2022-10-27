import React, {useState} from "react";
import { useEffect } from "react";
import Header from "../../../components/header/header";

const data = [
  {
    value: "1",
    label: "convidado",
  },
  {
    value: "2",
    label: "Membro",
  },
  {
    value: "3",
    label: "Admin",
  },
];



function Test() {
  const [value, setValue] = useState("");

  function reload() {
    const complete = document.getElementById('data');
  complete.addEventListener('bdsChange', (event) => {
    console.log(event.detail.value)
    setValue(event.detail.value)
    console.log(value)
  })
  }
  
  const [list, setList] = useState(null);
  const result = data.filter((obj) => {
    return obj.label.includes("o");
  })
  if(list === null){
    setList(result);
  }
 
  return (
    <div>
      <Header title="Página de teste" />

      <bds-autocomplete id="data" options={JSON.stringify(list)}>
      </bds-autocomplete>
    </div>
  );
}

export default Test;
