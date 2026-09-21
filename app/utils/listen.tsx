import link from "next/link"

type LisItemProps = {
    href: string,
    label: string,
    description: string,
    number: string
}

function ListItem ({href, label, description, number}: LisItemProps) {
    return (
        <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-blue-800 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400"> {number} </time>
            <h3 className="text-lg font-semibold text-white"> {label} </h3>
            <p className="mb-4 text-base font-normal text-gray-400"> {description} </p>
            <a href={href} className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-500">
                Ver publicación
                <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 2m4 3L9 8"/>
                </svg>
            </a>
        </li>
    )
}

export default ListItem;