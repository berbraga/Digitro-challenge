
function Chamados ({chat, setCurrentChat}) {

  return (
    <li className='flex' onClick={() => setCurrentChat(chat)}>
      <p>  {chat.caller} - {chat.service}</p>
    </li>
  )
}

export default Chamados;