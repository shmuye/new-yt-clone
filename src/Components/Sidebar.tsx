import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx"
import { BsYoutube } from "react-icons/bs"
import { MdHomeFilled } from "react-icons/md"
import { TbMusic } from "react-icons/tb"
import { MdOutlineSportsVolleyball } from "react-icons/md"
import { TbDeviceGamepad2 } from "react-icons/tb"
import { BiMoviePlay } from "react-icons/bi"
import { FaRegNewspaper } from "react-icons/fa"
import { TbHanger } from "react-icons/tb"
import { MdOutlineLightbulb } from "react-icons/md"

const API_KEY = import.meta.env.VITE_API_KEY

const Sidebar = ({
    filter,
    setFilter,
    setCategoryId,
    onClose
}: {
    filter: string
    setFilter: (filter: string) => void
    setCategoryId: (categoryId: string | null) => void
    onClose?: () => void
}) => {

    const navigate = useNavigate()
    const [categoriesData, setCategoriesData] = useState<any[]>([])

    const fetchAndSetCategories = async () => {
        const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/videoCategories?key=${API_KEY}&part=snippet&regionCode=us`
        )
        setCategoriesData(response.data.items)
    }

    useEffect(() => {
        fetchAndSetCategories()
    }, [])

    const mainLinks = [
        {
            icon: <MdHomeFilled className="text-lg" />,
            name: "Home",
            filterTag: "home",
            categoryId: null
        }
    ]

    const categoriesLinks = [
        {
            icon: <TbMusic className="text-lg" />,
            name: "Music",
            filterTag: "music",
            categoryId: categoriesData.find((i) => i.snippet.title === "Music")?.id
        },
        {
            icon: <MdOutlineSportsVolleyball className="text-lg" />,
            name: "Sport",
            filterTag: "sport",
            categoryId: categoriesData.find((i) => i.snippet.title === "Sports")?.id
        },
        {
            icon: <TbDeviceGamepad2 className="text-lg" />,
            name: "Gaming",
            filterTag: "gaming",
            categoryId: categoriesData.find((i) => i.snippet.title === "Gaming")?.id
        },
        {
            icon: <BiMoviePlay className="text-lg" />,
            name: "Movies",
            filterTag: "movies",
            categoryId: categoriesData.find((i) => i.snippet.title === "Movies")?.id
        },
        {
            icon: <FaRegNewspaper className="text-lg" />,
            name: "News",
            filterTag: "news",
            categoryId: categoriesData.find((i) => i.snippet.title === "News & Politics")?.id
        },
        {
            icon: <TbHanger className="text-lg" />,
            name: "Fashion",
            filterTag: "fashion",
            categoryId: categoriesData.find((i) => i.snippet.title === "Howto & Style")?.id
        },
        {
            icon: <MdOutlineLightbulb className="text-lg" />,
            name: "Course",
            filterTag: "course",
            categoryId: categoriesData.find((i) => i.snippet.title === "Education")?.id
        }
    ]

    const toggleFilter = (filterTag: string, categoryId: string | null) => {
        setFilter(filterTag)
        setCategoryId(categoryId)
    }

    return (
        <div className="w-full h-full text-white bg-[#0c0c0c]">

            {/* Header */}
            <div className="flex items-center gap-8 w-[85%] mx-auto h-14">
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close menu"
                    className="p-2 -ml-2 rounded-md hover:bg-neutral-900 active:bg-neutral-800"
                >
                    <RxHamburgerMenu className="text-xl cursor-pointer" />
                </button>

                <div
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={() => navigate(`/`)}
                >
                    <BsYoutube className="text-3xl text-red-600" />
                    <span className="text-xl font-medium">YouTube</span>
                </div>
            </div>

            {/* Main */}
            <ul className="border-b border-zinc-700">
                {mainLinks.map(({ icon, name, filterTag, categoryId }) => (
                    <li
                        key={name}
                        className={`pl-6 py-3 cursor-pointer flex items-center gap-5 hover:bg-neutral-800 ${
                            filter === filterTag ? "bg-neutral-800" : ""
                        }`}
                        onClick={() => {
                            toggleFilter(filterTag, categoryId)
                            navigate(`/`)
                            onClose?.()
                        }}
                    >
                        {icon}
                        <span className="text-sm">{name}</span>
                    </li>
                ))}
            </ul>

            {/* Categories */}
            <ul className="border-b border-zinc-700">
                {categoriesLinks.map(({ icon, name, filterTag, categoryId }) => (
                    <li
                        key={name}
                        className={`pl-6 py-3 cursor-pointer flex items-center gap-5 hover:bg-neutral-800 ${
                            filter === filterTag ? "bg-neutral-800" : ""
                        }`}
                        onClick={() => {
                            toggleFilter(filterTag, categoryId)
                            onClose?.()
                        }}
                    >
                        {icon}
                        <span className="text-sm">{name}</span>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Sidebar