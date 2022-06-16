import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"
import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://cdn-icons-png.flaticon.com/512/1057/1057046.png",
      name: "Naell",
      role: "Web Developer"
    },
    content: [
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {type: 'paragraph', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
      {type: 'link', content: 'github.com/naelldev'}
    ],
    publishedAt: new Date('2022-06-14 18:08:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://cdn-icons-png.flaticon.com/512/1057/1057046.png",
      name: "Ally",
      role: "Web Developer"
    },
    content: [
      {type: 'paragraph', content: 'Semper risus in hendrerit gravida rutrum quisque. Cursus in hac habitasse platea dictumst quisque sagittis. '},
      {type: 'paragraph', content: 'Magna eget est lorem ipsum dolor sit amet. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Elementum pulvinar etiam non quam lacus. Sed cras ornare arcu dui vivamus arcu felis bibendum ut.'},
      {type: 'link', content: 'github.com/ally'}
    ],
    publishedAt: new Date('2022-06-14 18:08:00')
  }
]

export function App() {

  return (
    <div>
    <Header />
      <div className={styles.wrapper} >
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}


