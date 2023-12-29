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
            <table className={"table-auto"}>
                <thead>
                    <tr>
                        <th className={"text-2xl"}>Model Type</th>
                        <th className={"text-2xl"}>Report</th>
                    </tr>
                </thead>
                <tbody>
                    {salesData.map((item, index) => (
                        <tr key={index}>
                            <td className={'px-2 text-xl'}>{item.model_type}</td>
                            <td className={'py-7 text-lg'}>{item.report}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SalesReport;