import Form from "react-bootstrap/Form";
import { data2 } from "../../helpers/data2";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import CharacterCard from "./CharacterCard";

function CharacterContainer() {
 const [search, setSearch] = useState ("")

 const handleChange = (e) =>{
  setSearch(e.target.value);
  
 }
 
 const filteredData = data2.filter(item=> item.name.toLowerCase().includes(search.trim().toLowerCase()));

 console.log(filteredData);
  return (
    <div>
      <Form.Control type="search" placeholder="Search Characters" onChange = {handleChange} className ="w-50 mx-auto my-2"/>
      <Container className ="p-3 rounded-4 card-container my-3">
        <Row className = "justify-content-center g-3">
          {filteredData.map((Character) => (
          
            <CharacterCard  key ={Character.id} {...Character}/>
          ))}
        </Row>
      </Container>
    </div>
  );
}
export default CharacterContainer;
