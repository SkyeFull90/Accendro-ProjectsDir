import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SalesReport = () => {
    const [salesData, setSalesData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('/api/sales_report')
            .then(response => {
                setSalesData(response.data);
                setIsLoading(false);
            })
            .catch(error => console.error(`Error: ${error}`));
    }, []);

    /*if (isLoading) {
        return <p>Loading sales report...</p>;
    }
*/
    return (
        <div>
            <h1>Sales Report</h1>
            {salesData.map((item, index) => (
                <div key={index}>
                    <p>{item.model_type}</p>
                    <p>{item.report}</p>
                </div>
            ))}
        </div>
    );
}

export default SalesReport;