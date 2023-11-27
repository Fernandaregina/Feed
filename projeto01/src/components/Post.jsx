import { format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { Comment } from './Comment';
import styles from './Post.module.css';
import { useState } from 'react';



export function Post({ author, publishedAt, content}) {
    const [comments, setComments] = useState([
        'Muito bom , parabéns!! 👏👏'
        
    ])
    //monitorando os comentarios
    const [newCommentText, setNewCommentText] =useState ('')
    //data e hora das publicações
    const publishedDateFormat = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {locale:ptBR,})
    
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale:ptBR,
        addSuffix:true,
    })
    // função para novos comentarios
    function handleCreateNewComment() {
        //monitorando eventos
        event.preventDefault()

        
        // alteração dos objetos nos comentarios, adicionando um novo
        setComments([...comments, newCommentText])
        // mantendo o text area com valor vazio
        setNewCommentText('');

        
    }
    //monitorando valor do textarea
    function handleNewCommentChange() {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    function deleteComment(commentToDelete){
        const commentsWithoutDeleteOn = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        setComments(commentsWithoutDeleteOn);
    }
    const isNewCommentEmpty = newCommentText.length === 0;

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src={author.avatarUrl}  />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow }
                </time>
            </header>
            <div className={styles.content}>
                {content.map(line    => {
                    if (line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm} action="">
                <strong>Deixe seu feedback</strong>

                <textarea 
                name='comment'
                placeholder='Escreva um comentário ...'
                value={newCommentText}
                onChange={handleNewCommentChange}
                onInvalid={handleNewCommentInvalid}
                required
                />

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </footer>

            </form>
            
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment} 
                            deleteComment={deleteComment}
                        />
                    )
                })}
                
            </div>

        </article>
    )
}