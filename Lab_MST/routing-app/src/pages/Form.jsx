import React, { useState } from "react";

export default function FormPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        course: "",
    });

    const [submissions, setSubmissions] = useState([]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.course) {
            setSubmissions([...submissions, formData]);
            setFormData({ name: "", email: "", course: "" });
        } else {
            alert("Please fill all fields!");
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center p-6">
            <h1 className="text-2xl font-semibold mb-4">
                Form
            </h1>

            <form className="w-full max-w-md mb-6" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="block mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border rounded w-full py-1 px-2"
                        placeholder="Enter your name"
                    />
                </div>

                <div className="mb-3">
                    <label className="block mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border rounded w-full py-1 px-2"
                        placeholder="Enter your email"
                    />
                </div>

                <div className="mb-3">
                    <label className="block mb-1">Course</label>
                    <input
                        type="text"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="border rounded w-full py-1 px-2"
                        placeholder="Enter course name"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
                >
                    Submit
                </button>
            </form>

            {submissions.length > 0 && (
                <div className="w-full max-w-md">
                    <h2 className="text-xl font-semibold mb-2">
                        Submitted Entries
                    </h2>
                    <table className="w-full border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border px-2 py-1">Name</th>
                                <th className="border px-2 py-1">Email</th>
                                <th className="border px-2 py-1">Course</th>
                            </tr>
                        </thead>
                        <tbody>
                            {submissions.map((entry, index) => (
                                <tr key={index} className="text-center">
                                    <td className="border px-2 py-1">
                                        {entry.name}
                                    </td>
                                    <td className="border px-2 py-1">
                                        {entry.email}
                                    </td>
                                    <td className="border px-2 py-1">
                                        {entry.course}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
