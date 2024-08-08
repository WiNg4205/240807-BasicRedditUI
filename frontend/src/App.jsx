import Header from "./components/Header"

function App() {

  return (
    <>
      <div className="grid grid-rows-[auto,1fr] grid-cols-[auto,1fr,auto] min-h-screen">
        <div className="col-span-3 border-b border-redditGray border-black h-14"><Header /></div>
        <div className="border-r border-black w-64">NavBar</div>
        <div className="w-full">Feed</div>
        <div className="border border-black w-72 mr-16">Recent Posts</div>
      </div>
      <div className="h-2"></div>
    </>
  )
}

export default App
