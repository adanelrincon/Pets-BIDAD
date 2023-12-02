import { useState } from "react";
import jasonimg from "../assets/img/jasonimg";

const commentsList = [
  {
    id: 1,
    user: "Marina",
    content: "This is the first comment.",
    avatar: jasonimg[5]
  },
  {
    id: 2,
    user: "Adonay",
    content: "Second comment here.",
    avatar: jasonimg[5]
  },
  {
    id: 3,
    user: "Nare",
    content: "Second comment here.",
    avatar: jasonimg[5]
  },
  {
    id: 4,
    user: "Aridane",
    content: "Second comment here.",
    avatar: jasonimg[5]
  },
  {
    id: 5,
    user: "Diego",
    content: "Second comment here.",
    avatar: jasonimg[5]
  },
];

export default function AddComent(){
  const [comments, setComments] = useState(commentsList);
  const [newComment, setNewComment] = useState({ id: 0, user: 'You', content: '', avatar: jasonimg[5] });

  const addComment = () => {
    // Copia los comentarios existentes y agrega el nuevo comentario al final
    setComments([...comments, newComment]);
    // Resetea el nuevo comentario para futuras adiciones
    setNewComment({ id: 0, user: '', content: '', avatar: '' });
  };

  const handleChange = (e: any) => {
    // Actualiza el nuevo comentario a medida que se escriben los datos
    setNewComment({ ...newComment, [e.target.name]: e.target.value, id: comments.length + 1 });
  };

  return (
    <div className="wall-container">
      <div className="wall-item-add">
        <input type="text" name="content" className="wall-input" placeholder="Comment" value={newComment.content} onChange={handleChange} />
        <button onClick={addComment} className="wall-button">Add Comment</button>
      </div>
      <div>
        {comments.map((comment: any) => (
          <div key={comment.id} className="wall-item">
            <div>
              <img src={comment.avatar} alt={comment.user} style={{ width: '50px', height: '50px', borderRadius: '50%' }}></img>
              <h4>{comment.user}</h4>
              <p>{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}