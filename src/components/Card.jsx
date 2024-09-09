function Card({ imageUrl, title, description, link }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <a href={link} className="text-blue-500 hover:text-blue-700">
          Read more
        </a>
      </div>
    </div>
  );
}

export default Card;
