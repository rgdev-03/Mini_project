import { useEffect, useState } from "react";
import { getUserIdFromJwt } from "./fetchUser";

export const getFacID = () => {

    const userId = getUserIdFromJwt();

    const [facData, setfacData] = useState();


  // console.log(userId);
    useEffect(() => {
        const fetchData = async () => {
        try {
            // Construct the API URL with selected filter options
            const apiUrl = `http://127.0.0.1:8000/api/staffuser/?user=${userId}`;
            const response = await fetch(apiUrl);


            
            const data = await response.json();
            setfacData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData();
    }, [userId]); 

    // console.log("facultyData",facData);

    const facultyData = facData;

    return facultyData && facultyData[0].staff_id;
    // return facData; 
    
};


export const getFacName = () => {

    const userId = getUserIdFromJwt();

    const [facData, setfacData] = useState();


  // console.log(userId);
    useEffect(() => {
        const fetchData = async () => {
        try {
            // Construct the API URL with selected filter options
            const apiUrl = `http://127.0.0.1:8000/api/staffuser/?user=${userId}`;
            const response = await fetch(apiUrl);


            
            const data = await response.json();
            setfacData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData();
    }, [userId]); 

    // console.log("facultyData",facData);

    const facultyData = facData;

    return facultyData && facultyData[0].name;
    // return facData; 
    
};



export const isAdmin = () => {

    const userId = getUserIdFromJwt();

    const [adminData, setAdminData] = useState();


  // console.log(userId);
    useEffect(() => {
        const fetchData = async () => {
        try {
            // Construct the API URL with selected filter options
            const apiUrl = `http://127.0.0.1:8000/user/${userId}/`;
            const response = await fetch(apiUrl);


            
            const data = await response.json();
            setAdminData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData();
    }, [userId]); 

    // console.log("Data",adminData);

    const admin = adminData;

    return admin && admin.is_staff_Admin;
    

    
    // return facData; 
    
};