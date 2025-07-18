import React, { useEffect, useState } from "react";
import {
  FaBell,
  FaCalendarAlt,
  FaCamera,
  FaCog,
  FaCreditCard,
  FaEdit,
  FaEnvelope,
  FaHeart,
  FaMapMarkerAlt,
  FaPhone,
  FaSave,
  FaShoppingBag,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { FaShield } from "react-icons/fa6";
import { collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useAuth } from "../contexts/Auth";
import { getAuth, updateProfile } from "firebase/auth";

const UserProfile = () => {
  const { userLoggedIn, currentUser, role } = useAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const docRef = doc(db, "users", currentUser.uid);
    getDoc(docRef).then((docSnap) => {
      if (docSnap.exists()) {
        setUser(docSnap.data());
      } else {
        console.log("No such document!");
      }
    });
  }, [currentUser.uid]);

  const [isEditing, setIsEditing] = useState(false);
  const [recentOrders, setRecentOrders]= useState([])
  const [activeTab, setActiveTab] = useState("overview");

const [userInfo, setUserInfo] = useState({
  name: "",
  email: "",
  phone: "",
  location: "",
  bio: "",
  avatar: "",
  joinDate: "",
});

useEffect(() => {
  if (user) {
    setUserInfo({
      name: user.name || "",
      email: user.email || "",
      phone: user.phone || "",
      location: user.location || "",
      bio: user.bio || "",
      avatar: user.avatar || "",
      joinDate: user.joinDate || "",
    });
  }
}, [user]);

const getData=async()=>{
const querySnapshot = await getDocs(collection(db, "orders"));
let arr=[]
querySnapshot.forEach((doc) => {
  if (doc.id) {
    arr.push({...doc.data(), orderId: doc.id})
    return arr
    
  }
});
setRecentOrders(arr)
}
useEffect(() => {
  getData()
  
}, [])


  const handleInputChange = (field, value) => {
    setUserInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  }
const handleSave = async () => {
  const auth = getAuth();
  try {
    await updateProfile(auth.currentUser, {
      displayName: userInfo.name,
    });

    const userRef = doc(db, "users", currentUser.uid);
    await updateDoc(userRef, {
      ...userInfo, // spread the userInfo correctly
    });

    setIsEditing(false); // turn off edit mode after saving
    console.log("Profile updated!");
  } catch (error) {
    console.error("Error updating profile:", error);
  }
  
};


  const menuItems = [
    { id: "overview", label: "Overview", icon: FaUser },
    { id: "orders", label: "Orders", icon: FaShoppingBag },
    { id: "wishlist", label: "Wishlist", icon: FaHeart },
    { id: "payment", label: "Payment", icon: FaCreditCard },
    { id: "notifications", label: "Notifications", icon: FaBell },
    { id: "security", label: "Security", icon: FaShield },
    { id: "settings", label: "Settings", icon: FaCog },
  ];

  const stats = [
    { label: "Total Orders", value: "24", color: "bg-black" },
    { label: "Wishlist Items", value: "12", color: "bg-gray-800" },
    { label: "Reviews", value: "18", color: "bg-gray-600" },
    { label: "Points", value: "2,450", color: "bg-gray-900" },
  ];

  // const recentOrders = [
  //   {
  //     id: "#12345",
  //     date: "2 days ago",
  //     status: "Delivered",
  //     amount: "$145.00",
  //   },
  //   {
  //     id: "#12344",
  //     date: "1 week ago",
  //     status: "Processing",
  //     amount: "$89.50",
  //   },
  //   {
  //     id: "#12343",
  //     date: "2 weeks ago",
  //     status: "Delivered",
  //     amount: "$210.00",
  //   },
  // ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-black">My Profile</h1>
            <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-black transition-colors">
              <FaSignOutAlt size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              {/* Profile Picture */}
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src={userInfo.avatar}
                      alt={userInfo.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button className="absolute bottom-0 right-0 bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors">
                    <FaCamera size={16} />
                  </button>
                </div>
                <h2 className="text-xl font-semibold text-black mb-1">
                  {userInfo.name}
                </h2>
                <p className="text-gray-600 text-sm">{userInfo.email}</p>
              </div>

              {/* Navigation Menu */}
              <nav className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === item.id
                          ? "bg-black text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <Icon size={20} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === "overview" && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-sm p-6"
                    >
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${stat.color} mb-4`}
                      >
                        <span className="text-white font-bold">
                          {stat.value.charAt(0)}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-black mb-1">
                        {stat.value}
                      </h3>
                      <p className="text-gray-600 text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Profile Information */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-black">
                      Profile Information
                    </h3>
<div className="flex justify-end mb-4">
  <button
    onClick={() => {
      isEditing ? handleSave() : setIsEditing(true);
    }}
    className="bg-black text-white px-4 py-2 rounded-md flex items-center gap-2"
  >
    {isEditing ? (
      <>
        <FaSave />
        Save
      </>
    ) : (
      <>
        <FaEdit />
        Edit
      </>
    )}
  </button>
</div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={userInfo.name}
                            onChange={(e) =>
                              handleInputChange("name", e.target.value)
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                          />
                        ) : (
                          <div className="flex items-center gap-2">
                            <FaUser size={16} className="text-gray-500" />
                            <span className="text-gray-900">
                              {userInfo.name}
                            </span>
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        {isEditing ? (
                          <input
                            type="email"
                            value={userInfo.email}
                            onChange={(e) =>
                              handleInputChange("email", e.target.value)
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                          />
                        ) : (
                          <div className="flex items-center gap-2">
                            <FaEnvelope size={16} className="text-gray-500" />
                            <span className="text-gray-900">
                              {userInfo.email}
                            </span>
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone
                        </label>
                        {isEditing ? (
                          <input
                            type="tel"
                            value={userInfo.phone}
                            onChange={(e) =>
                              handleInputChange("phone", e.target.value)
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                          />
                        ) : (
                          <div className="flex items-center gap-2">
                            <FaPhone size={16} className="text-gray-500" />
                            <span className="text-gray-900">
                              {userInfo.phone}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Location
                        </label>
                        {isEditing ? (
                          <input
                            type="text"
                            value={userInfo.location}
                            onChange={(e) =>
                              handleInputChange("location", e.target.value)
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                          />
                        ) : (
                          <div className="flex items-center gap-2">
                            <FaMapMarkerAlt
                              size={16}
                              className="text-gray-500"
                            />
                            <span className="text-gray-900">
                              {userInfo.location}
                            </span>
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Member Since
                        </label>
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt size={16} className="text-gray-500" />
                          <span className="text-gray-900">
                            {userInfo.joinDate}
                          </span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Bio
                        </label>
                        {isEditing ? (
                          <textarea
                            value={userInfo.bio}
                            onChange={(e) =>
                              handleInputChange("bio", e.target.value)
                            }
                            rows="3"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                          />
                        ) : (
                          <p className="text-gray-900">{userInfo.bio}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Orders */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-semibold text-black mb-6">
                    Recent Orders
                  </h3>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div
                        key={order.id}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <FaShoppingBag
                              size={20}
                              className="text-gray-600"
                            />
                          </div>
                          <div>
                            <p className="font-medium text-black">{order.id}</p>
                            <p className="text-sm text-gray-600">
                              {order.date}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-black">
                            {order.amount}
                          </p>
                          <span
                            className={`inline-block px-2 py-1 rounded-full text-xs ${
                              order.status === "Delivered"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {order.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab !== "overview" && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-black mb-4">
                  {menuItems.find((item) => item.id === activeTab)?.label}
                </h3>
                <p className="text-gray-600">
                  This section is coming soon. Stay tuned for updates!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
