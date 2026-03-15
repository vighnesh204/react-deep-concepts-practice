const Grocery = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Grocery Store</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Fresh Apples</h2>
                        <p className="text-gray-600">Crisp and juicy red apples, perfect for snacking.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Bananas</h2>
                        <p className="text-gray-600">Sweet and ripe bananas, great for smoothies.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Milk</h2>
                        <p className="text-gray-600">Fresh whole milk, ideal for cereals and coffee.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Bread</h2>
                        <p className="text-gray-600">Soft and fluffy white bread, freshly baked.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Eggs</h2>
                        <p className="text-gray-600">Farm-fresh eggs, perfect for breakfast.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Cheese</h2>
                        <p className="text-gray-600">Creamy cheddar cheese, delicious on sandwiches.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grocery;