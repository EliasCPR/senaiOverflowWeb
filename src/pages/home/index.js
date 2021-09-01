import Header from "../../components/Header";
import Comments from "../../components/Comments";
import { FeedContainer, GistIcon, Main, Post } from "./styles";

function Home() {

    const posts = [{
        author: {
            name: "Fulano",
        },
        crated_at: "10/10/2021",
        title: "Este é um post sobre js",
        image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        gist: "https://githuv.com.br/",
        categories: [
            "JS", "Back-end", "Express"
        ],
        coments: [
            {
                author: {
                    name: "ciclano",
                },
                created_at: "11/10/2021",
                description: "Realmente Js é muito legal"
            }
        ]
    }]

    return (
        <>
            <Header />
            <Main>
                <nav>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />

                <p>Santos Oliveira</p>
                <p>R.A:0001006655223</p>
                <p>user@email.com</p>
                </nav>
                <FeedContainer>
                    {posts.map(post => < PostCard post={post}/>)}
                </FeedContainer>
                <aside>
                    Actions
                </aside>
            </Main>
        </>
    );
}

function PostCard({ post }) {
    return (
        <Post>
            <header>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                <div>
                    <strong>
                        por {post.author.name}
                    </strong>
                    <p>
                        {post.created_at}
                    </p>
                </div>
                {post.gist && <GistIcon />}
            </header>
            <main>
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                </div>
                <img src="https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg.webp" />
                <section>
                    {post.categories.map(category => <p>{category}</p>)}
                </section>
            </main>
            <footer>
                <h2>Comentários</h2>
                {post.coments.map(coment => <Comments coment={coment} />)}
            </footer>
        </Post>
    );
}

export default Home;