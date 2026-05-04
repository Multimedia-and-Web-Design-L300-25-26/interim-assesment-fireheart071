export const Button = (props) => (
    <>
        <button
            onClick={props.onClick}
            className={`flex items-center justify-center rounded-full transition-all duration-200 cursor-pointer text-sm sm:text-base ${props.blue ? 'bg-blue-600 hover:bg-blue-700 text-white' : props.black ? 'bg-black hover:bg-gray-800 text-white' : 'bg-gray-100 hover:bg-gray-200 text-black'} ${props.className}`}
        >
            {props.text && <p className="px-2 py-1.5 sm:px-3 sm:py-2 font-bold">{props.text}</p>}
            {props.image && <img src={props.image} alt="" className="w-6 h-6 sm:w-8 sm:h-8 p-1.5" />}
            {props.Icon && <props.Icon size={props.size || 20} className={props.text ? "mr-1" : ""} />}
        </button>
    </>
)





