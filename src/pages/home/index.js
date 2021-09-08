import Coments from "../../components/Coments";
import Header from "../../components/Header"
import { EmailIcon, FeedContainer, GistIcon, LinkedinIcone, Main, MdEmail, Post } from "./styles";

function Home() {

    const posts = [{
        author: {
            name: "Albert Einstein",
        },
        created_at: "10/10/2021",
        title: "Este é um post sobre JS.",
        description: "JS é uma linguagem de programação muito top.",
        image: "https://voicesinthedark.world/wp-content/uploads/2017/08/sidney-perry-105613-1280x640.jpg",
        gist: "https://github.com.br/",
        categories: [
            "JS", "Back-end", "Express"
        ],
        coments: [
            {
                author: {
                    name: "Mona Lisa",
                },
                created_at: "11/10/2021",
                description: "Realmente JS é muito legal."
            }
        ]
    }]

    return (
        <>
            <Header />
            <Main>
                <nav>
                    <img src="https://s3-alpha-sig.figma.com/img/4eb9/aae1/ad4154333f9d96327a6299837a9921c6?Expires=1631491200&Signature=ekWZol7MoqOIoGFovHuQJX3up66SQV-ZOunZkE7nNEoaHO1rJBQ7hrF4OziTSPEF~WEhR-6t7yCRzTsaqr7EiZ1mVyXnvYeobYkuN7KvCJHDJ3YjJrcYwdtVQE48rmdFCcKamO~8hk5QQZdBA2AI8ajdn7Z8LFVU0vgec3WoilKJ72E3Z0oDgdAwarBZ6n5Bqp48y06El7UldBaLTW-IB70~iAe-55-iiMdRCoDwT86B3jCmaYoz4jCOO35G0YpQoF1KmFGwHid7MLp6L~oOVspBbicrlF2SMRPJlL~qA1NWyrb~ABh52GqmsXsH44YV2NodjBm8coKH5ClgDHS4rw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />

                    <p>Santos Dumont</p>
                    <p>R.A: 541654878754</p>
                    <p>santosdummont@gmail.com</p>
                    <div>
                        <GistIcon/>
                        <LinkedinIcone/>
                        <EmailIcon/>
                    </div>
                </nav>
                <FeedContainer>
                    {posts.map(post => <PostCard post={post} />)}
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
                <img src="https://s3-alpha-sig.figma.com/img/9e60/3049/d84ffc279ed7929cf9e53cb051208fe9?Expires=1631491200&Signature=Lz6VrFPVjpXKlPRExsgKzPuX4UzM8xd3EHQYR~d8ZVmTQm1QlZ0q1FcQtkpgs3hbmdW3cyOwMUMZp5W8LRKedDZTrJe0Dkpcd7DNnDk164fsX5wacKPooCSfN8~U3knKNNRcVblo~VXLGNaETznQcLO3IJkz0H5GHKMDdf4aCFm24zrxFWFYRziFEQB73ZTrikuM~f2VrXxaST4CPBCt5dP-xuWO~ECgBtQplpMSlDsOJoBo6BG~uxhTRUxEwMmFxuba~rIPBpo9LtREPuHIXLgTVL5TjLPvXHH1QJyjAEuipQsWE1lvIRXx1rJCeXNh0Db80GVl1Vsxg2tXcisAmQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                <div>
                    <strong>
                        por {post.author.name}
                    </strong>
                    <p>
                        em {post.created_at}
                    </p>
                </div>
                {post.gist && <GistIcon />}
            </header>
            <main>
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
                </div>
                <img src={post.image} />
                <section>
                    {post.categories.map(category => <p>{category}</p>)}
                </section>
            </main>
            <footer>
                <h2>Comentários</h2>
                {post.coments.map(coment => <Coments coment={coment} />)}
            </footer>
        </Post>
    )
}

export default Home;