import React, { useState, useEffect } from 'react';
import Question from './Question.jsx';
import { getVehicleTypes, bookVehicle } from '../services/api';

const questions = [
    "What is your name?",
    "Number of wheels?",
    "Type of vehicle",
    "Specific Model",
    "Select booking dates"
];

const BookingForm = () => {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        wheels: '',
        vehicleType: '',
        model: '',
        bookingDate: { startingDate: '', endingDate: '' },
    });

    const [vehicleTypes, setVehicleTypes] = useState([]);
    const [filteredVehicles, setFilteredVehicles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getVehicleTypes();
            setVehicleTypes(data);
        };
        fetchData();
    }, []);

    const handleNext = () => {
        if (step === 4) {
            const bookingData = {
                ...formData,
                bookingDate: {
                    startingDate: formData.bookingDate.startingDate,
                    endingDate: formData.bookingDate.endingDate,
                },
            };
            bookVehicle(bookingData).then(response => {
                alert('Booking successful');
            }).catch(error => {
                alert('Booking failed');
            });
        } else {
            setStep(step + 1);
        }
    };

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
        if (field === 'wheels' || field === 'vehicleType') {
            const filtered = vehicleTypes
                .filter(type => type.type === (value === '2' ? 'bike' : 'car'))
                .map(type => type.vehicles).flat();
            setFilteredVehicles(filtered);
        }
    };

    const getOptions = () => {
        switch (step) {
            case 1:
                return ['2', '4'];
            case 2:
                return vehicleTypes.map(type => type.type);
            case 3:
                return filteredVehicles.map(vehicle => vehicle.name);
            default:
                return [];
        }
    };

    return (
        <div className="p-4">
            {step === 0 && (
                <Question
                    question="What is your name?"
                    value={`${formData.firstName} ${formData.lastName}`}
                    onChange={(value) => {
                        const [firstName, lastName] = value.split(' ');
                        handleChange('firstName', firstName);
                        handleChange('lastName', lastName);
                    }}
                    onNext={handleNext}
                />
            )}
            {step === 1 && (
                <Question
                    question="Number of wheels?"
                    options={getOptions()}
                    value={formData.wheels}
                    onChange={(value) => handleChange('wheels', value)}
                    onNext={handleNext}
                />
            )}
            {step === 2 && (
                <Question
                    question="Type of vehicle"
                    options={getOptions()}
                    value={formData.vehicleType}
                    onChange={(value) => handleChange('vehicleType', value)}
                    onNext={handleNext}
                />
            )}
            {step === 3 && (
                <Question
                    question="Specific Model"
                    options={getOptions()}
                    value={formData.model}
                    onChange={(value) => handleChange('model', value)}
                    onNext={handleNext}
                />
            )}
            {step === 4 && (
                <div>
                    <label className="block text-xl font-bold mb-4">Select booking dates</label>
                    <input
                        type="date"
                        value={formData.bookingDate.startingDate}
                        onChange={(e) => handleChange('bookingDate', { ...formData.bookingDate, startingDate: e.target.value })}
                        className="border p-2 mb-2 w-full"
                    />
                    <input
                        type="date"
                        value={formData.bookingDate.endingDate}
                        onChange={(e) => handleChange('bookingDate', { ...formData.bookingDate, endingDate: e.target.value })}
                        className="border p-2 mb-4 w-full"
                    />
                    <button
                        onClick={handleNext}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Book
                    </button>
                </div>
            )}
        </div>
    );
};

export default BookingForm;
