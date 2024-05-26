import React from 'react';

const Question = ({ question, options, value, onChange, onNext }) => {
    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <div className="p-4">
            <label className="block text-xl font-bold mb-4">{question}</label>
            {options ? (
                <div className="mb-4">
                    {options.map((option, index) => (
                        <label key={index} className="block">
                            <input
                                type="radio"
                                value={option}
                                checked={value === option}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            {option}
                        </label>
                    ))}
                </div>
            ) : (
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="border p-2 w-full"
                />
            )}
            <button
                onClick={onNext}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Next
            </button>
        </div>
    );
};

export default Question;
