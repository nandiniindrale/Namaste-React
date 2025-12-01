import React from "react";
import ReactDOM from "react-dom/client";
import "./ReactApp.css";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://marketplace.canva.com/EAFaFUz4aKo/3/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-tn1zF-_cG9c.jpg"
                ></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = (props) => {
    const ResData = props.Data;
    return (
        <div className="Resto-Card">
            <img
                className="Resto-Image"
                src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                    ResData.image
                }
            ></img>
            <h3>{ResData.name}</h3>
            <p>{ResData.locality}</p>
            <p>Rating: {ResData.avgRating}</p>
        </div>
    );
};

const ResObj = [
    {
        id: "18975",
        name: "Nandhana Palace",
        locality: "Rajajinagar",
        areaName: "Rajajinagar",
        costForTwo: "₹500 for two",
        cuisines: ["Biryani", "Andhra", "South Indian", "North Indian"],
        avgRating: 4.4,
        image: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/21/2c004550-3e2f-4929-a6b4-7f2599e9e2d9_18975.jpg",
        deliveryTime: 47
    },
    {
        id: "3241",
        name: "Meghana Foods",
        locality: "Residency Road",
        areaName: "Residency Road",
        costForTwo: "₹500 for two",
        cuisines: ["Biryani", "Andhra", "South Indian", "Chinese", "Seafood"],
        avgRating: 4.7,
        image: "FOOD_CATALOG/IMAGES/CMS/2025/6/6/f6c81999-57b6-4eb7-ac66-dc1c3485f2e4_6ba607a5-1751-462a-a73d-68ae91ade469.jpg",
        deliveryTime: 29
    },
    {
        id: "353404",
        name: "RNR Biryani - Taste of 1953",
        locality: "Shivanahalli",
        areaName: "Rajajinagar",
        costForTwo: "₹350 for two",
        cuisines: ["Biryani", "South Indian", "Kebabs"],
        avgRating: 4.3,
        image: "titgwthozpmhyzjgdh5u",
        deliveryTime: 46
    },
    {
        id: "3434",
        name: "Nandhini Deluxe",
        locality: "St. Marks Road",
        areaName: "St. Marks Road",
        costForTwo: "₹500 for two",
        cuisines: ["Andhra", "Biryani", "Chinese", "North Indian"],
        avgRating: 4.3,
        image: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/3/7f19aaac-7299-4b54-a22d-69fd67f8fb65_3434.jpg",
        deliveryTime: 18
    },
    {
        id: "1061541",
        name: "KOMBOZZ by Thalappakatti",
        locality: "Bangalore Central",
        areaName: "M G ROAD, Bangalore?",
        costForTwo: "₹450 for two",
        cuisines: ["Chinese", "Biryani", "Desserts", "South Indian", "Beverages", "North Indian"],
        avgRating: 4.3,
        image: "FOOD_CATALOG/IMAGES/CMS/2025/5/20/133914a4-e08a-4b66-b4fd-cc93684587e4_7f4a401f-5e31-4705-b625-8360c87bfd72.jpg",
        deliveryTime: 35
    },
    {
        id: "423814",
        name: "Hotel Annapoorna",

        locality: "Majestic",
        areaName: "Central Bangalore",
        costForTwo: "₹450 for two",
        cuisines: [
            "Biryani",
            "Andhra"
        ],
        avgRating: 4.1,
        image: "FOOD_CATALOG/IMAGES/CMS/2025/3/14/9689df5b-bf11-46e8-b5ae-a8c571bed50a_e08bef87-1244-4a84-a308-47532fa38248.jpg",
        deliveryTime: 36
    }

];

const Body = () => {
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="Resto-Cards">
                {ResObj.map((restaurant) => (
                    <RestaurantCard Data={restaurant} key={restaurant.id} />
                ))}

            </div>



        </div>
    );
};
const AppLayout = () => {
    return (
        <div>
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
