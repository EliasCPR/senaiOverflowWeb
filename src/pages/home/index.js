import Coments from "../../components/Coments";
import Header from "../../components/header";
import { FeedContainer, GistIcon, Main, Post } from "./styles";




function Home() {
    return (
        <>
            <Header />
            <Main>
                <nav>

                </nav>
                <FeedContainer>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                </FeedContainer>
                <aside>

                </aside>
            </Main>
        </>
    );
}

export default Home;

function PostCard() {
    return (

        <Post>
            <header>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                <div>
                    <strong>
                        por fulano de tal
                    </strong>
                    <p>
                        em 18/08/2021 às 08:23
                    </p>
                </div>
                <GistIcon />
            </header>
            <main>
                <div>
                    <h1>Título</h1>
                    <p>Descrição da postagem bla bla bla</p>
                </div>
                <img src="https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg.webp" />
                <section>
                    <p>Front-end</p>
                    <p>javscript</p>
                    <p>css</p>
                </section>



            </main>
            <footer>
                <h2>
                    Comentários
                </h2>

                <Coments />
            </footer>
        </Post>
    );
}

