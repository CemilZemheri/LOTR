import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import logo from "../../assets/Ring.png"

const Header = ()=> {
    return (
       <Container>
        {/* <Image src={logo} alt="ring" width= "200px"/> <br /> */}
        <h1 className="my-3  title">THE LORD OF THE RINGS</h1>
        </Container> 
    )
}
export default Header