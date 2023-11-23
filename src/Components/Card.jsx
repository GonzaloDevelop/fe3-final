import React, { useMemo } from 'react'
import useFavorite from '../CustomHooks/useFavorite'
import DoctorIcon from '../../public/images/doctor.jpg'
import HeartIcon from '../Components/common/cards/HeartIcon'

const Card = ({ user, onClick }) => {
    const [isFavorite, toggleFavorite] = useFavorite(user.id)

    const dentistDetails = useMemo(() => [
        { label: 'Nombre', value: user.name },
        { label: 'Usuario', value: user.username },
        { label: 'ID', value: user.id },
    ], [user.name, user.username, user.id])

    return (
        <div className="relative flex flex-col items-center justify-center min-h-[25vh] gap-2 lg:w-full bg-oyster-pink-100 border border-red-500 rounded-lg p-4 shadow-md dark:bg-purple-900 dark:text-white sm:max-w-sm xs:max-w-xs">
            <div className='absolute -top-8 w-full flex justify-center' >
                <img src={DoctorIcon} alt="Doctor" className="w-16 h-16 md:w-20 md:h-20 cursor-pointer rounded-full" onClick={onClick} />
            </div>
            <div className="pt-16 md:pt-8 text-center">
                {dentistDetails.map((detail, index) => (
                    <p key={`${detail.label}-${user.id}-${index}`} className="text-sm font-semibold cursor-pointer pb-3" onClick={onClick}>
                        {detail.label}: {detail.value}
                    </p>
                ))}
            </div>
            <HeartIcon isFavorite={isFavorite} onClick={toggleFavorite} />
        </div>
    )
}

export default Card
