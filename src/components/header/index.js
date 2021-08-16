import { Container, IconsSignOut } from "./styles";
import imgLogo from "../../assets/logo.jpg";

function Header() {
    return (
        <Container>
            <img src={imgLogo} />
            <input type="text" placeholder="Pesquisar"/>
            <div>
                <IconsSignOut/>
            </div>
        </Container>
    );
}

export default Header;