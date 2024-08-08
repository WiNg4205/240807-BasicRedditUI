import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReddit } from "@fortawesome/free-brands-svg-icons"
import { faMagnifyingGlass, faBullseye, faPlus } from "@fortawesome/free-solid-svg-icons"
import { faCommentDots, faBell, faUser } from "@fortawesome/free-regular-svg-icons"

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center p-3 gap-1">
        <FontAwesomeIcon className="text-redditLogo text-3xl" icon={faReddit} />
        <div className="text-3xl font-bold text-redditLogo tracking-tighter">reddit</div>        
      </div>
      <div className="flex items-center gap-2 bg-search hover:bg-redditHover px-4 py-2 rounded-full w-1/3">
        <FontAwesomeIcon className="" icon={faMagnifyingGlass} />
        <input className="focus:outline-none bg-transparent text-sm placeholder-zinc-500" placeholder="Search Reddit"></input>
      </div>
      
      <div className="grid grid-cols-7 text-xl px-2">
        <div className="grid grid-cols-subgrid col-span-6 items-center place-items-end">
          <FontAwesomeIcon className="header-btn" icon={faBullseye} />
          <FontAwesomeIcon className="header-btn" icon={faCommentDots} />
          <div className="col-span-2 flex gap-1 header-btn">
            <FontAwesomeIcon icon={faPlus} />
            <div className="text-sm font-semibold">Create</div>            
          </div>
          <FontAwesomeIcon className="header-btn" icon={faBell} />
        </div>

        <div className="header-btn p-1">
          <FontAwesomeIcon className="col-start-7 p-2 h-5 w-5 rounded-full bg-orange-300 text-gray-600 flex items-center" icon={faUser} />
        </div>
      </div>
    </div>
  )
}

export default Header
