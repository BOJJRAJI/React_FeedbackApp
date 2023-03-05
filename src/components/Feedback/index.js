import {Component} from 'react'
import './index.css'

const EmojiFunction = props => {
  const {emojiDetails, clickEmoji} = props
  const {name, imageUrl} = emojiDetails

  const onClick = () => {
    clickEmoji()
  }
  return (
    <li className="emoji-container">
      <img src={imageUrl} alt={name} className="emoji" onClick={onClick} />
      <h1 className="emoji-heading">{name}</h1>
    </li>
  )
}

class Feedback extends Component {
  state = {isClicked: false}

  onClickEmoji = () => {
    this.setState({isClicked: true})
  }

  render() {
    const {isClicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    console.log(emojis)
    return (
      <div className="bg-container">
        <div className="card">
          {isClicked ? null : (
            <h1 className="heading">
              How satisfied are you with our customer support performance
            </h1>
          )}
          {isClicked ? (
            <div className="thank-container">
              <img className="love-image" alt="love emoji" src={loveEmojiUrl} />
              <h1 className="love-heading">Thank You</h1>
              <p className="para">
                We will use your feedback to improve our customer support
                performance
              </p>
            </div>
          ) : (
            <ul className="emojis-container">
              {emojis.map(eachEmoji => (
                <EmojiFunction
                  emojiDetails={eachEmoji}
                  key={eachEmoji.id}
                  clickEmoji={this.onClickEmoji}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
