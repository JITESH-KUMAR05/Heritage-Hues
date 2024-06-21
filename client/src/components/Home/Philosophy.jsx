import Charminar from "../Home/Charminar.jpg";

function Philosophy() {
  return (
    <div className="philosophy w-full mb-10 ">
      <div className="flex w-full gap-10 justify-evenly">
        <div className="picture w-[40%] ">
            <img className="w-full rounded-lg h-[30rem] object-center " src={Charminar} alt="" />
        </div>
        <div className="content w-[40%]">
            <div className="card">
                <h1 className="  ">1. Our Philosophy</h1>
                <p className=" text-gray-300 ">Heritage Hues is a travel company that aims to provide a unique and authentic experience to its customers. We believe in preserving the heritage of our country and promoting sustainable tourism. Our goal is to create a positive impact on the environment and the local communities we visit. We strive to provide our customers with an unforgettable experience that will leave a lasting impression on them.</p>
            </div>
            <div className="card mt-4">
                <h1>2. Our Mission</h1>
                <p className=" text-gray-300 ">Our mission is to promote responsible tourism and create awareness about the importance of preserving our heritage. We aim to provide our customers with an enriching experience that will help them connect with the local culture and traditions. We are committed to providing our customers with the highest quality service and ensuring that they have a memorable and enjoyable trip.</p>
            </div>

        </div>
      </div>
    </div>
  );
}

export default Philosophy;