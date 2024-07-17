import React, {useEffect, useState} from 'react';
import axios from 'axios';


const ItemList = ({onEdit, onDelete}) => {
    const [items, setItems] = useState([]);
    useEffect( () => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await
            axios.get('http://localhost:8000/api/items/');
            setItems(response.data);
        } catch (error) {
            console.error('There was an error fetching the items!', error)
        }
    };

    return(
        <div>
            <h1>Items</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        First Name: {item.first_name}<br></br>
                        Middle Name: {item.middle_name}<br></br>
                        Last Name: {item.last_name}<br></br>
                        Name Extension: {item.name_extension}<br></br>
                        Contact No.: {item.contact_num}<br></br>
                        E-mail: {item.email}<br></br>
                        Address: {item.address}<br></br>
                        Zip Code: {item.zip_code}<br></br>
                        Date of Birth: {item.birthday}<br></br>
                        Place of Birth: {item.birthplace}<br></br>
                        Gender: {item.gender}<br></br>
                        Citizenship: {item.citizenship}<br></br>
                        Civil Status: {item.civil_status}<br></br>
                        Height: {item.height} Weight: {item.weight}<br></br>
                        GSIS ID No.: {item.gsis_id_no}<br></br>
                        Pag-Ibig ID No.: {item.pagibig_id_no}<br></br>
                        Phil-Health No.: {item.philhealth_no}<br></br>
                        SSS No.: {item.sss_no}<br></br>
                        TIN No.: {item.tin_no}<br></br>
                        Elementary: {item.elementary}<br></br>
                        High School: {item.high_school}<br></br>
                        Senior High School: {item.senior_high_school}<br></br>
                        College: {item.college}<br></br> 
                        Course: {item.course}<br></br>
                        Year and Section: {item.year_and_section}<br></br>



                        <button onClick={()=> onEdit(item)}>Edit</button>
                        <button onClick={()=>onDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );

};

export default ItemList;