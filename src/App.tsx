import "./global.css";
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post, PostType } from "./components/Post";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/souzannatha.png",
      name: "Nathã Souza Lopes",
      role: "Developer Front-end and Mobile",
    },
    content: [
      { type: "paragraph" as const, content: "Fala galeraa 👋" },
      {
        type: "paragraph" as const,
        content: "Acabei de subir mais um projeto no meu portifa...",
      },
      { type: "link" as const, content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-10-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa...",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-11-10 20:00:00"),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </>
  );
}
