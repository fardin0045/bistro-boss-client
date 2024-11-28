import chefimg from '../../../assets/home/chef-service.jpg';

const Bistroboss = () => {
    return (
        <div className="relative bg-gray-100">
            <div className="w-full">
                <img src={chefimg} alt="Chef Service" className="w-full h-auto" />
            </div>
            {/* Adjust relative positioning */}
            <div className="absolute top-[calc(50%-5rem)] left-1/2 transform -translate-x-1/2 p-10 text-center bg-white shadow-lg w-3/4 ">
                <h2 className="text-2xl font-bold">BISTRO BOSS</h2>
                <p className="text-gray-700 mt-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum necessitatibus ex tempore. Quod odio fugit assumenda hic veritatis deserunt porro aliquid quidem suscipit molestiae possimus, aspernatur libero velit fuga recusandae?
                </p>
            </div>
        </div>
    );
};

export default Bistroboss;
