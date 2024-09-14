import AddIcon from '../../icons/add-icon.svg'

type ButtonOperationProps = {
    title: string
    description: string
}

export default function ButtonOperation({title, description}: ButtonOperationProps) {
    return (
        <div>
            <button className="border-lime-900 border-2 rounded  w-1/4 h-auto flex">
                <img src={AddIcon.src} alt='Add Icon'/>
                <div className="flex-col text-start	">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </button>
        </div>
    )
}