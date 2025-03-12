// write the component code here




import React from "react";

const Usercard = () => {

  const profilePhoto = "https://via.placeholder.com/150"; 
  const name = "John Doe";
  const email = "johndoe@example.com";
  const phone = "+1 234 567 890";
  const address = "123 Main St, Springfield, USA";

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">
      <img className="w-full h-40 object-cover" src={profilePhoto} alt="Profile" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">📧 {email}</p>
        <p className="text-gray-600">📞 {phone}</p>
        <p className="text-gray-600">🏠 {address}</p>
      </div>
    </div>
  );
};

export default Usercard;
