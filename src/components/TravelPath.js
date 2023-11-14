import React, { useState, useEffect } from "react";
import worldIcon from "../image/world.svg";
import locationIcon from "../image/location.svg";
import tripleDot from "../image/tripleDot.svg";
import firebase from 'firebase/app';
import 'firebase/firestore';
import { getAuth } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

const TravelPath = () => {
  const [userData, setUserData] = useState([]);

  const fetchData = async () => {
    try {
      const auth = getAuth();
      const userEmail = auth.currentUser.email;
      const db = getFirestore();
      const q = query(collection(db, 'FavP'), where('email', '==', userEmail));
      const querySnapshot = await getDocs(q);

      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setUserData(data);
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const db = getFirestore();
      await deleteDoc(doc(db, 'FavP', id));
      // Fetch updated data after deletion
      fetchData();
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };
  let navigate = useNavigate();
  const handleGoToMap = (user) => {
   
    console.log("Navigate to map with start:", user.start, "and end:", user.end);
    navigate("/map");
  };

  return (
    <div className="flex flex-col">
      {userData.map((user, index) => (
        <div key={index}>
          <div className="flex flex-row space-x-4">
            <img src={worldIcon} alt="worldIcon" height="25" width="25" />
            <p className="border rounded-xl p-5 px-28 drop-shadow-md bg-white">
              {user.start}
            </p>
          </div>
          <img src={tripleDot} alt="tripledot" height="25" width="25" />
          <div className="flex flex-row space-x-4">
            <img src={locationIcon} alt="worldIcon" height="25" width="25" />
            <p className="border rounded-xl p-5 px-28 drop-shadow-md bg-white">
              {user.end}
            </p>
          </div>
          <br/>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
          <br/>
          <button 
          onClick={() => handleGoToMap(user)}
          
          >Go to Map</button>
          <br/>
        </div>
      ))}
    </div>
  );
};

export default TravelPath;
