import {useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";


const CharacterCard = ({name, img, race, gender, role, description})=> {
    const [show,setShow] =useState (false);
    
    return (

<Col xs={10} sm={8} md={6} lg={4} xl={3}>
              <Card className="player-card" role="button" onClick={()=> setShow(!show)}>
                {!show ? (
                  <Card.Img  variant="top" src={img} title={name} alt={name} />
                ) : (
                  <>
                    <Card.Header>
                      <Card.Title>{name}</Card.Title>
                    </Card.Header>
                    <ul className="m-auto">
                      <li className="list-unstyled text-start h-4">
                        ⚔️{race}
                      </li>
                      <li className="list-unstyled text-start h-4">
                        ⚔️{gender}
                      </li>
                      <li className="list-unstyled text-start h-4">
                        ⚔️{role}
                      </li>
                      <li className="list-unstyled text-start h-4">
                        ⚔️{description}
                      </li>
                    </ul>
                  </>
                )}
              </Card>
            </Col>

    )
}
export default CharacterCard