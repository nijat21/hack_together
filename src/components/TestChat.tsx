import React, { useState } from 'react'
import { useStateTogether } from 'react-together'
import { v4 as uniqueKey } from 'uuid'

function TestChat() {
  const [messages, setMessages] = useStateTogether('messages', []) // Shared state for all users
  const [input, setInput] = useState('')

  const handleSendMessage = () => {
    if (input.trim()) {
      // Append the new message to the shared state
      setMessages([...messages, { text: input, time: new Date().toISOString() }])
      setInput('')
    }
  }

  return (
    <div style={{ padding: '1rem' }}>
      <div style={{ border: '1px solid #ccc', padding: '1rem', height: '300px', overflowY: 'auto' }}>
        {messages.map((msg, index) => (
          <div key={uniqueKey()} style={{ marginBottom: '0.5rem' }}>
            <strong>Guest:</strong> {msg.text} <small>{new Date(msg.time).toLocaleTimeString()}</small>
          </div>
        ))}
      </div>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Type your message...'
        style={{ width: '70%', marginRight: '0.5rem' }}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  )
}

export default TestChat
