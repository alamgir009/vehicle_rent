import React from 'react';
import BookingForm from './components/BookingForm.jsx';

const App = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Vehicle Booking</h1>
            <BookingForm />
        </div>
    );
};

export default App;
