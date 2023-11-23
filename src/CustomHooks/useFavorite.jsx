import { useState, useEffect } from 'react'

const useFavorite = (userId) => {
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || []
        setIsFavorite(favorites.some(favorite => favorite.id === userId))
    }, [userId])

    const toggleFavorite = () => {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || []
        const isFav = favorites.some(favorite => favorite.id === userId)

        if (isFav) {
            favorites = favorites.filter(favorite => favorite.id !== userId)
        } else {
            favorites.push({ id: userId })
        }

        localStorage.setItem('favorites', JSON.stringify(favorites))
        setIsFavorite(!isFav)
        window.dispatchEvent(new Event('favoriteChanged'))
    }

    return [isFavorite, toggleFavorite]
}

export default useFavorite
