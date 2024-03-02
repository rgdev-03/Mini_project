import { useEffect, useState } from "react";
import { getUserIdFromJwt } from "./fetchUser";

export const getStdID = () => {

    const userId = getUserIdFromJwt();

    const [stdData, setStdData] = useState();


  // console.log(userId);
    useEffect(() => {
        const fetchData = async () => {
        try {
            // Construct the API URL with selected filter options
            const apiUrl = `http://127.0.0.1:8000/api/stduser/?user=${userId}`;
            const response = await fetch(apiUrl);


            
            const data = await response.json();
            setStdData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData();
    }, [userId]); 

    // console.log("StudentData",stdData);

    const studentData = stdData;

    return studentData && studentData[0].std_id; 
    
};