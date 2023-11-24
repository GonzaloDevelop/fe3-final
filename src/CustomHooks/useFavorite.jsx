import { useState, useEffect } from 'react'

const useFavorite = (user) => {
    const { id, name, username } = user
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        let favorites = JSON.parse(localStorage.getItem('favorites'))
        if (!favorites) {
            favorites = []
        }
        setIsFavorite(favorites.some(favorite => favorite.id === id))
    }, [id])

    const toggleFavorite = () => {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || []
        const isFav = favorites.some(favorite => favorite.id === id)

        if (isFav) {
            favorites = favorites.filter(favorite => favorite.id !== id)
        } else {
            favorites.push({ id, name, username })
        }

        localStorage.setItem('favorites', JSON.stringify(favorites))
        setIsFavorite(!isFav)
        window.dispatchEvent(new Event('favoriteChanged'))
    }

    return [isFavorite, toggleFavorite]
}

export default useFavorite