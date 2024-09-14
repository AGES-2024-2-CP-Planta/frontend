import AddIcon from '../../icons/add-icon.svg'

type ButtonOperationProps = {
    title: string
    description: string
}

export default function ButtonOperation({title, description}: ButtonOperationProps) {
    return (
        <button className="border-[#006F48] border-2 rounded w-1/4 h-24 flex justify-start p-6 gap-x-4">
            <img className='w-6' src={AddIcon.src} alt='Add Icon'/>
            <div className="flex flex-col text-start gap-y-1">
                <h3 className='text-lg'>{title}</h3>
                <p className='text-sm'>{description}</p>
            </div>
        </button>
    )
}