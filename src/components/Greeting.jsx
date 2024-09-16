
export const Greeting = () => {
  const date = new Date ();
  const curHr = date.getHours()
  return (
    <div className="justify-between text-xl pt-2 mb-6">{curHr < 12 ? <p>Good Morning 🌅</p> : curHr < 16 ? <p>Good Afternoon 🌞</p> : <p>Good Evening 🌃</p>}</div>
  )
}
