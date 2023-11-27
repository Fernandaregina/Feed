import { ThumbsUp, Trash } from '@phosphor-icons/react/dist/ssr'
import styles from './Comment.module.css'
import { useState } from 'react';

export function Comment({ content, deleteComment }) {
    const [likeCount, setLikeCount] = useState(0)

    function handleLikeComment () {
        setLikeCount((state) => {
            return state + 1
        });
    }

    function handleDeleteComment() {
        deleteComment(content);
        
    }
    return(
        <div className={styles.comment}>
            <img src="https://github.com/Fernandaregina.png"  />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndtime}>
                            <strong>Fernanda Ferreira</strong>
                            <time title="05 de Outubro às 14:45" dateTime="2023-10-05">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar Comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment} title="Deletar comentário">
                        <ThumbsUp size={20}/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}