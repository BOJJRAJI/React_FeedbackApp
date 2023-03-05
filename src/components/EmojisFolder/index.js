import './index.css'

const EmojiFunction = props => {
  const {emojiDetails} = props
  const {name, imageUrl} = emojiDetails
  return (
    <li className="emoji-container">
      <img src={imageUrl} alt="love emoji" className="emoji" />
      <h1 className="emoji-heading">{name}</h1>
    </li>
  )
}

export default EmojiFunction
