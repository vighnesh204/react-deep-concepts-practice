import React from 'react'

const Card = ({ profile }) => {
  const { login, avatar_url, html_url } = profile;

  return (
    <div className="bg-white w-72 p-5 rounded-lg shadow flex flex-col items-center text-center">
      
      {/* Avatar */}
      <img
        src={avatar_url}
        alt={login}
        className="w-16 h-16 rounded-full"
      />

      {/* Info */}
      <div className="mt-3">
        <h2 className="text-lg font-semibold text-gray-800">
          {login}
        </h2>

        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white text-sm rounded-md"
        >
          View Profile
        </a>
      </div>
    </div>
  )
}

export default Card