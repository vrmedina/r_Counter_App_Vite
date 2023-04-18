// arrow function myname
const myName = () => 'Victor!';

const newMessage = {
    title: 'Hello World',
    body: 'This is my first app'
}

export const FirstApp = () => {
  return (
    // fragment
    <>
        <h1>{myName()}</h1>
        {/* <h1>{newMessage.title}</h1>
        <p>{newMessage.body}</p>
        <code>{JSON.stringify(newMessage)}</code> */}
        {/* <p>My first app</p> */}
    </>
  )
}
