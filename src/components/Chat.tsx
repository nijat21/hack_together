function Chat() {
  return (
    <div className='drawer drawer-end'>
      <input id='my-drawer-4' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        {/* Page content here */}
        <label htmlFor='my-drawer-4' className='drawer-button btn'>
          Live chat
        </label>
      </div>
      <div className='drawer-side'>
        <label htmlFor='my-drawer-4' aria-label='close sidebar' className='drawer-overlay'></label>
        <div className='menu bg-base-200 text-base-content min-h-fdivl w-1/3 h-full p-4'>
          <div className='chat chat-start'>
            <div className='chat-bubble chat-bubble-primary'>What kind of nonsense is this</div>
          </div>
          <div className='chat chat-end'>
            <form action='' className='chat-bubble chat-bubble-primary'>
              <input type='text' placeholder='Write your message' />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat
