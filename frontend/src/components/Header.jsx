import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReddit } from "@fortawesome/free-brands-svg-icons"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1 p-3">
        <FontAwesomeIcon className="text-redditLogo text-3xl" icon={faReddit} />
        <div className="text-3xl font-bold text-redditLogo tracking-tighter">reddit</div>        
      </div>
      <div className="flex items-center gap-2 bg-search hover:bg-searchHover px-4 py-2 rounded-full">
        <FontAwesomeIcon className="" icon={faMagnifyingGlass} />
        <input className="focus:outline-none bg-transparent text-sm placeholder-zinc-500 caret-w-4" placeholder="Search Reddit"></input>
      </div>
      
      <div className=""></div>
    </div>
  )
}

export default Header
