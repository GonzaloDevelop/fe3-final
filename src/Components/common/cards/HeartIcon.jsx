const HeartIcon = ({ isFavorite, onClick }) => (
    <svg
      onClick={onClick}
      className={`w-6 h-6 cursor-pointer ${isFavorite ? 'text-red-500 fill-current'  : 'text-gray-400 fill-current '}`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="heart-icon" d="M12.001 4.529c2.349-2.348 6.151-2.348 8.5 0 2.348 2.348 2.348 6.151 0 8.5l-8.5 8.5-8.5-8.5c-2.349-2.349-2.349-6.151 0-8.5 2.349-2.348 6.151-2.348 8.5 0z" />
    </svg>
  )
  
  export default HeartIcon