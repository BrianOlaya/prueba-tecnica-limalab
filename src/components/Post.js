import React, { useState, useContext } from 'react';
import Moment from 'react-moment';
import Modal from 'react-modal';
import postContext from '../context/posts/postContext';
import Card from 'react-bootstrap/Card'


const Post = ({ firstName, lastName, img, tags, text, date, link, likes, post, title, email, picture }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const postsContext = useContext(postContext);
    const { currentPost, posts, filterPosts } = postsContext;

    const selectPost = id => {
        currentPost(id);
        setModalIsOpen(true)
    }

    const filter = e => {
        const filtroTags = posts.filter(post => {
            return (
                post.tags.includes(e.target.value)
            )
        })
        filterPosts(filtroTags);
        console.log(filtroTags)
    }

    // SE DEBE RENDERIZAR: EL AUTOR DEL POST, IMAGEN, ETIQUETAS COMO SI FUERAN HASHTAG, EL TEXTO DEL POST, FECHA DE PUBLICACION, EL LINK SI LO TIENE 
   
    return (
        <div className="post">
            <Modal className="mod dark" isOpen={modalIsOpen}>
                <img src={picture} alt="img" />
                <h4> Autor:</h4>
                <h4>{title} {firstName} {lastName}</h4>
                <h4> Email:</h4>
                <p>{email} </p>
                <button onClick={() => setModalIsOpen(false)}>Close</button>

            </Modal>

            <Card style={{ width: '30rem' }} className="card dark">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title> <button  className="btn btn-card" onClick={() => selectPost(post.owner.id)}><h3>{firstName} {lastName}</h3></button></Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <Card.Text>Likes:{likes}</Card.Text>
                    <Card.Text>Date:<Moment format="YYYY/MM/DD">{date}</Moment></Card.Text>
                 <Card.Body className="tags">
                    {tags.map(tag => (<Card.Text><input className="btn " onClick={filter}type="submit" value={tag}/></Card.Text> ))} 
                 </Card.Body>
                    {link ? <Card.Link className="link-see" href={link} target="_blank" rel="noopener noreferrer">See more</Card.Link> : null}
                </Card.Body>
            </Card>

        </div>
    );
}

export default Post;