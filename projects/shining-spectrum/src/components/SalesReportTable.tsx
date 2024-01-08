import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SalesReport = () => {
    const [salesData, setSalesData] = useState([]);

    useEffect(() => {
        axios.get('/api/sales_report')
            .then(response => {
                setSalesData(response.data);
            })
            .catch(error => console.error(`Error: ${error}`));
    }, []);

    return (
        <div className={'m-3'}>
            <h1 className={'text-3xl mb-5 text-center'}>Sales Report</h1>
            <table className={"table table-auto"}>
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