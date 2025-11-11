import assets from "../assets/assets"
import Title from "./Title"

export const OurWork = () => {
    const workdata = [
        {
            id: 1,
            title: "Mobile App Marketing",
            description: "We turn bold ideas into powerful digital solutions that connect, engage...",
            image: assets.work_mobile_app,
        },
        {
            id: 2,
            title: "Dashboard Management",
            description: "We help you exectute your plan and deliver results.",
            image: assets.work_dashboard_management,
        },
        {
            id: 3,
            title: "Fitnes App Promotion",
            description: "We help you create a marketing strategy that drives results.",
            image: assets.work_fitness_app,
        },
    ]

    return (
        <div id="our-work" className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white">
            <Title title='Our Last Work' desc='From strategy to execution, we craft digital solutions that move your business forward.' />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
                {workdata && workdata.length > 0 && workdata.map((work, index) => (
                    <div key={index} className="hover:scale-102 duration-500 transition-all cursor-pointer rounded-xl">
                        <img src={work.image} alt={work.title} className="w-full rounded-xl" />
                        <div className="p-4 bg-white dark:bg-gray-900">
                            <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
                            <p className="text-sm opacity-60 w-5/6">{work.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
