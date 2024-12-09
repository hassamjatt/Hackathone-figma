import Allhero from "@/Components/Allhero"
import Navbar from "@/Components/Navbar"
import Footer from '@/Components/Footer'
import Image from 'next/image'
import Benefits from "@/Components/benefits"

const BlogPage = () => {
  return (
    <>
      <Navbar />
      <Allhero src={{
        src: "/blog.jpg.png"
      }} page={""} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid gap-8">

              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                { <Image src="/2.jpg.png" height={820}width={794} alt="Blog post"  ></Image> }
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Going all-in with minimal design</h2>
                  <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                  <a href="#" className="text-blue-600 hover:underline">Read More</a>
                </div>
              </article>


              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                {<Image src="/1.jpg.png" height={820}  width={794} alt="Blog post"  /> }
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Going all-in with minimal design</h2>
                  <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                  <a href="#" className="text-blue-600 hover:underline">Read More</a>
                </div>
              </article>


              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                { <Image src="/3.jpg.png" height={820} width={794} alt="Blog post" /> }
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Going all-in with minimal design</h2>
                  <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                  <a href="#" className="text-blue-600 hover:underline">Read More</a>
                </div>
              </article>

              {/* Add more blog post cards as needed */}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Categories Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Design</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Development</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Marketing</a></li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
              <ul className="space-y-4">
                
              <li className="flex gap-4">
                  { <Image src="/1.jpg.png" height={50} width={40} alt="blog image"className="w-16 h-16 object-cover rounded" /> }
                  <div>
                    <h4 className="font-medium">Recent post title</h4>
                    <span className="text-sm text-gray-500">Date</span>
                  </div>
                </li>

                <li className="flex gap-4">
                  { <Image src="/2.jpg.png" alt="blog image" width={40} height={50} className="w-16 h-16 object-cover rounded" /> }
                  <div>
                    <h4 className="font-medium">Recent post title</h4>
                    <span className="text-sm text-gray-500">Date</span>
                  </div>
                </li>


                <li className="flex gap-4">
                  { <Image src="/3.jpg.png" width={40} height={50}  alt="blog image" className="w-16 h-16 object-cover rounded" /> }
                  <div>
                    <h4 className="font-medium">Recent post title</h4>
                    <span className="text-sm text-gray-500">Date</span>
                  </div>
                </li>


                <li className="flex gap-4">
                  { <Image src="/1.jpg.png" width={40} height={50} alt="blog image" className="w-16 h-16 object-cover rounded" /> }
                  <div>
                    <h4 className="font-medium">Recent post title</h4>
                    <span className="text-sm text-gray-500">Date</span>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
<Benefits/>
      <Footer />
    </>
  )
}

export default BlogPage