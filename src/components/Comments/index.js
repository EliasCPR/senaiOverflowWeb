import { Container } from "./styles";


function Comments({ coment }) {

    return (
        <Container>
            <header>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />

                <strong>
                    por {coment.author.name}
                </strong>
                <p>
                    em {coment.crated_at} às 8:23
                </p>

            </header>
            <p>{coment.description}</p>
        </Container>
    );
}

export default Comments;