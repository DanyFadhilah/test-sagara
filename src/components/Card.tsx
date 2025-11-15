interface Props {
    title: string;
    value: number | string;
    color?: string;
}

export default function Card({title, value, color = "bg-white"}: Props){
    return(
        <div className={`p-5 rounded-xl shadow-sm ${color} text-gray-800`}>
            <p className="text-sm text-gray-500">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
        </div>
    )
}