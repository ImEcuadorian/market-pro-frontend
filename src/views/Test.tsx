// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Search, ShoppingCart, Menu, ChevronRight, Star, Filter } from "lucide-react"
//
// export default function Test() {
//     return (
//         <div className="flex flex-col min-h-screen bg-gray-100">
//             <header className="bg-gray-900 text-white">
//                 <div className="container mx-auto px-4 py-6 flex items-center justify-between">
//                     <div className="flex items-center space-x-4">
//                         <Menu className="h-6 w-6 cursor-pointer md:hidden" />
//                         <h1 className="text-2xl font-bold">AutoParts Hub</h1>
//                     </div>
//                     <nav className="hidden md:flex space-x-4">
//                         <a href="#" className="hover:text-gray-300">Home</a>
//                         <a href="#" className="hover:text-gray-300">Categories</a>
//                         <a href="#" className="hover:text-gray-300">Brands</a>
//                         <a href="#" className="hover:text-gray-300">Deals</a>
//                         <a href="#" className="hover:text-gray-300">Contact</a>
//                     </nav>
//                     <div className="flex items-center space-x-4">
//                         <div className="relative">
//                             <Input
//                                 type="search"
//                                 placeholder="Search parts..."
//                                 className="pl-8 pr-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                             <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
//                         </div>
//                         <Button variant="ghost" size="icon">
//                             <ShoppingCart className="h-6 w-6" />
//                             <span className="sr-only">View cart</span>
//                         </Button>
//                     </div>
//                 </div>
//             </header>
//
//             <div className="flex-grow container mx-auto px-4 py-8 flex">
//                 <aside className="w-64 mr-8 hidden lg:block">
//                     <div className="bg-white rounded-lg shadow-md p-6">
//                         <h2 className="text-xl font-semibold mb-4">Categories</h2>
//                         <ul className="space-y-2">
//                             {['Engine Parts', 'Brakes', 'Suspension', 'Exhaust', 'Electrical', 'Wheels & Tires', 'Interior', 'Exterior'].map((category) => (
//                                 <li key={category}>
//                                     <a href="#" className="text-gray-600 hover:text-blue-600">{category}</a>
//                                 </li>
//                             ))}
//                         </ul>
//                         <hr className="my-6" />
//                         <h2 className="text-xl font-semibold mb-4">Filter by</h2>
//                         <div className="space-y-4">
//                             <div>
//                                 <h3 className="font-medium mb-2">Brand</h3>
//                                 <select className="w-full p-2 border rounded">
//                                     <option>All Brands</option>
//                                     <option>Bosch</option>
//                                     <option>NGK</option>
//                                     <option>Denso</option>
//                                     <option>ACDelco</option>
//                                 </select>
//                             </div>
//                             <div>
//                                 <h3 className="font-medium mb-2">Price Range</h3>
//                                 <div className="flex space-x-2">
//                                     <Input type="number" placeholder="Min" className="w-1/2" />
//                                     <Input type="number" placeholder="Max" className="w-1/2" />
//                                 </div>
//                             </div>
//                             <Button className="w-full">
//                                 <Filter className="mr-2 h-4 w-4" /> Apply Filters
//                             </Button>
//                         </div>
//                     </div>
//                 </aside>
//
//                 <main className="flex-grow">
//                     <section className="mb-12">
//                         <div className="bg-blue-600 text-white rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
//                             <div>
//                                 <h2 className="text-3xl font-bold mb-4">Summer Sale: Up to 40% Off</h2>
//                                 <p className="mb-4">Upgrade your ride with our top-quality automotive parts.</p>
//                                 <Button className="bg-white text-blue-600 hover:bg-gray-100">
//                                     Shop Now
//                                     <ChevronRight className="ml-2 h-4 w-4" />
//                                 </Button>
//                             </div>
//                             <img
//                                 src="/placeholder.svg?height=200&width=300"
//                                 alt="Car parts on display"
//                                 className="mt-6 md:mt-0 rounded-lg shadow-lg"
//                                 width={300}
//                                 height={200}
//                             />
//                         </div>
//                     </section>
//
//                     <section className="mb-12">
//                         <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                             {[1, 2, 3, 4, 5, 6].map((item) => (
//                                 <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
//                                     <img
//                                         src={`/placeholder.svg?height=200&width=300&text=Product ${item}`}
//                                         alt={`Product ${item}`}
//                                         className="w-full h-48 object-cover"
//                                     />
//                                     <div className="p-4">
//                                         <h3 className="font-semibold mb-2">High-Performance Brake Pads</h3>
//                                         <p className="text-gray-600 mb-2">Enhance your vehicle's stopping power</p>
//                                         <div className="flex items-center mb-2">
//                                             <Star className="h-5 w-5 text-yellow-400 fill-current" />
//                                             <Star className="h-5 w-5 text-yellow-400 fill-current" />
//                                             <Star className="h-5 w-5 text-yellow-400 fill-current" />
//                                             <Star className="h-5 w-5 text-yellow-400 fill-current" />
//                                             <Star className="h-5 w-5 text-gray-300 fill-current" />
//                                             <span className="ml-2 text-gray-600">(24 reviews)</span>
//                                         </div>
//                                         <div className="flex justify-between items-center">
//                                             <span className="font-bold text-lg">$79.99</span>
//                                             <Button size="sm">Add to Cart</Button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </section>
//
//                     <section>
//                         <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
//                         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                             {['Engine Parts', 'Brakes', 'Suspension', 'Exhaust', 'Electrical', 'Wheels & Tires', 'Interior', 'Exterior'].map((category) => (
//                                 <div key={category} className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow">
//                                     <img
//                                         src={`/placeholder.svg?height=100&width=100&text=${category}`}
//                                         alt={category}
//                                         className="w-16 h-16 mx-auto mb-2"
//                                     />
//                                     <h3 className="font-semibold">{category}</h3>
//                                 </div>
//                             ))}
//                         </div>
//                     </section>
//                 </main>
//             </div>
//
//             <footer className="bg-gray-900 text-white py-8">
//                 <div className="container mx-auto px-4">
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         <div>
//                             <h3 className="text-lg font-semibold mb-4">About Us</h3>
//                             <p className="text-gray-400">AutoParts Hub is your one-stop shop for high-quality automotive parts and accessories.</p>
//                         </div>
//                         <div>
//                             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//                             <ul className="space-y-2 text-gray-400">
//                                 <li><a href="#" className="hover:text-white">FAQ</a></li>
//                                 <li><a href="#" className="hover:text-white">Shipping & Returns</a></li>
//                                 <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
//                                 <li><a href="#" className="hover:text-white">Terms of Service</a></li>
//                             </ul>
//                         </div>
//                         <div>
//                             <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
//                             <p className="text-gray-400">1234 Auto Lane, Car City, ST 12345</p>
//                             <p className="text-gray-400">Phone: (123) 456-7890</p>
//                             <p className="text-gray-400">Email: info@autopartshub.com</p>
//                         </div>
//                     </div>
//                     <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
//                         <p>&copy; 2023 AutoParts Hub. All rights reserved.</p>
//                     </div>
//                 </div>
//             </footer>
//         </div>
//     )
// }
