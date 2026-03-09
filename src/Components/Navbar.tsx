import { useNavigate } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { BsYoutube } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = ({ search, setSearch }: { search: string, setSearch: (q: string) => void }) => {
    const navigate = useNavigate()

    const handleSearch = () => {
        if (search.trim()) {
            navigate(`/search?query=${search}`)
        } else {
            navigate(`/`)
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key == "Enter") {
            e.preventDefault()
            handleSearch()
        }
    }

    return (
        <div className='sticky top-0 z-50 w-full bg-[#0c0c0c]'>
            <div className="flex md:gap-0 gap-2 justify-between h-14 w-[95%] mx-auto">
                <div className="flex items-center md:gap-8 gap-3 cursor-pointer">
                    <a className="" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        <RxHamburgerMenu className="sm:text-xl text-lg" />
                    </a>
                    <div className="flex items-center gap-1"
                        onClick={() => navigate(`/`)}
                    >
                        <BsYoutube className="sm:text-3xl text-2xl text-red-600" />
                        <span className="sm:text-xl text-lg">Youtube</span>
                    </div>
                </div>

                <div className="flex items-center">
                    <form>
                        <div className="flex item-center sm:h-10 h-9 border-[0.6px] border-neutral-700 rounded-full overflow-hidden">
                            <div className="flex items-center sm:pr-5 pr-3">
                                <input
                                    value={search}
                                    type="text"
                                    placeholder="Search"
                                    className="md:w-96 w-full px-3 sm:text-lg text-md text-zinc-300 placholder-neutral-500 bg-[#0c0c0c] focus:outline-none"
                                    onChange={(e) => setSearch(e.target.value)}
                                    onKeyDown={handleKeyPress}
                                />
                                <AiOutlineClose
                                    onClick={() => setSearch("")}
                                    className={`sm:text-lg text-md cursor-pointer text-neutral-400 ${!search ? `invisible` : "visible"}`} />
                            </div>
                            <button
                                type="button"
                                onClick={handleSearch}
                                className="w-16 flex items-center justify-center border-l-[1px] border-neutral-700">
                                <CiSearch className="sm:text-2xl text-xl text-neutral-200" />
                            </button>
                        </div>
                    </form>
                </div>

                <div className="lg:block hidden">
                  
                </div>

            </div>
        </div>
    )
}

export default Navbar