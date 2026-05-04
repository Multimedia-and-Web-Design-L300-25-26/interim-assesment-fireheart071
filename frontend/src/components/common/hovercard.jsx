export const HoverCard = ({ data, side }) => {
    return (
        <div className="w-full bg-white border-t border-gray-100 shadow-2xl overflow-hidden origin-top animate-slide-down-fade">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 sm:py-10 grid grid-cols-1 md:grid-cols-[1fr_350px] gap-6 sm:gap-12">
                {/* Left Side: Grid of Items */}
                <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    {data?.map((item, index) => (
                        <a key={index} href={item.link} className="h-full flex items-center gap-4 group cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition-colors">
                            <div className="w-10 h-10 shrink-0 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all text-gray-600">
                                {item.icon ? (
                                    <item.icon size={20} />
                                ) : (
                                    <div className="w-5 h-5 border-2 border-gray-400 rounded-full" />
                                )}
                            </div>
                            <div className="flex flex-col">
                                <span className="font-semibold text-gray-900 transition-colors">
                                    {item.title}
                                </span>
                                {item.description && (
                                    <span className="text-sm text-gray-500 leading-tight mt-0.5">
                                        {item.description}
                                    </span>
                                )}
                            </div>
                        </a>
                    ))}
                </div>

                {/* Right Side: Featured content */}
                <div className="hover:bg-gray-50 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-4 sm:gap-5 h-fit border border-transparent hover:border-gray-200 transition-all duration-300">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                        {side?.icon ? <side.icon size={40} strokeWidth={1.5} /> : <div className="w-12 h-12 bg-gray-200 rounded-full" />}
                    </div>
                    <div>
                        <h3 className="text-lg sm:text-2xl font-bold leading-tight mb-2">
                            {side?.title}
                        </h3>
                        <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-sm leading-relaxed">
                            {side?.description}
                        </p>
                        <a href="#" className="font-bold underline inline-flex items-center gap-1 transition-colors">
                            {side?.text || "Learn more"}
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}




