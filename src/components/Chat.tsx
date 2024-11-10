import { useStateTogether } from 'react-together'
import { useState, useEffect, useRef } from 'react'
import { v4 as uniqueKey } from 'uuid'

function Chat({ productId }) {
  const [messages, setMessages] = useStateTogether(`messages-${productId}`, [])
  const [input, setInput] = useState('')
  const messageRef = useRef(null)

  const getUserId = () => {
    const stored = localStorage.getItem('userId')
    if (stored) return stored

    const newId = uniqueKey()
    return newId
  }

  const [userId, setUserId] = useState('')
  useEffect(() => {
    setUserId(() => getUserId())
  }, [])

  const handleSend = () => {
    if (input.trim() && userId) {
      // scroll to last message when user writes a new message
      setMessages([...messages, { text: input, time: new Date().toISOString(), userId: userId }])
      setInput('')
    }
    if (messageRef.current) {
      messageRef.current.scrollTop = messageRef.current.scrollHeight
    }
  }

  const handleKeyDown = (e) => {
    if (e.key == 'Enter' || e.code == 'Enter') {
      e.preventDefault()
      handleSend()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollTop = messageRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className='drawer drawer-end'>
      <input id='my-drawer-4' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        <label htmlFor='my-drawer-4' className='drawer-button btn'>
          Live chat
        </label>
      </div>
      <div className='drawer-side'>
        <label htmlFor='my-drawer-4' aria-label='close sidebar' className='drawer-overlay'></label>
        <div className='menu bg-base-200 text-base-content min-h-full w-1/3 relative'>
          <div ref={messageRef} className='overflow-y-auto absolute top-0 left-0 right-0 bottom-20 p-4'>
            {messages.length > 0 &&
              messages.map((message) => {
                const isCurrentUser = userId === message.userId
                return (
                  <div key={message.time} className={`flex w-full mb-2 ${isCurrentUser ? 'justify-end' : 'justify-start'}`}>
                    <div className={`chat ${isCurrentUser ? 'chat-end' : 'chat-start'}`}>
                      <div
                        className={`chat-bubble max-w-full 
                          ${isCurrentUser ? 'chat-bubble-primary' : 'chat-bubble-secondary'}`}
                      >
                        {message.text}
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
          <div className='chat chat-end absolute bottom-0 left-0 right-0 h-20 bg-base-200 border-t border-base-300 p-4'>
            <div className='flex w-full gap-2'>
              <input
                onChange={(e) => setInput(e.target.value)}
                type='text'
                value={input}
                placeholder='Type here'
                className='input input-bordered flex-1'
              />
              <button onClick={handleSend} onKeyDown={handleKeyDown} className='btn btn-primary'>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat
