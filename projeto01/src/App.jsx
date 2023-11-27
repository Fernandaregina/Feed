import { useState } from 'react';
import { Header } from './components/header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';
import { Comment} from './components/Comment';


import styles from './App.module.css';
import './global.css';


const posts = [
  {
  id: 1,
  author: {
    avatarUrl:'https://github.com/Fernandaregina.png',
    name: 'Fernanda Ferreira',
    role: 'Web Developer',
  },
  content: [
    {type:'paragraph', content: 'Fala galeraa 👋'},
    {type:'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eligendi quidem alias, obcaecati voluptates repellendus non sit! Vitae sunt expedita distinctio laboriosam inventore, beatae impedit pariatur necessitatibus aperiam veniam fuga.🚀'},
    {type:'link', content: '👉algumLink/link'},
  ],
  publishedAt: new Date('2023-10-17 14:00:00'),
},
{
  id: 2,
  author: {
    avatarUrl:'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1760',
    name: 'Wagner ',
    role: 'Web Developer',
  },
  content: [
    {type:'paragraph', content: 'Eaaee 👋'},
    {type:'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eligendi quidem alias, obcaecati voluptates repellendus non sit! Vitae sunt expedita distinctio laboriosam inventore, beatae impedit pariatur necessitatibus aperiam veniam fuga.🚀'},
    {type:'link', content: '👉algumLink/link'},
  ],
  publishedAt: new Date('2023-10-16 14:00:00'),
},
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
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

export default App
