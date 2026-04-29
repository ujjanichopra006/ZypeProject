"use client";

export default function BillPaymentForm() {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-r from-blue-200 via-white to-blue-200 flex items-center justify-center p-6">


                <div className="w-full max-w-3xl bg-white p-6 rounded-xl shadow-lg">

                    <h1 className="text-black text-3xl font-semibold text-center mb-6">
                        Bill Payment Form
                    </h1>

                    <form className="space-y-5 text-black">


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-1">Customer Name</label>
                                <input placeholder="Enter your name"
                                    className="w-full p-3 bg-gray-100 rounded-lg border border-gray-300 outline-none focus:ring-1 focus:ring-blue-400" />
                            </div>

                            <div>
                                <label className="block mb-1">Customer ID</label>
                                <input placeholder="Enter customer ID"
                                    className="w-full p-3 bg-gray-100 rounded-lg border border-gray-300 outline-none focus:ring-1 focus:ring-blue-400" />
                            </div>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-1">Loan Number</label>
                                <input placeholder="Enter loan number"
                                    className="w-full p-3 bg-gray-100 rounded-lg border border-gray-300 outline-none focus:ring-1 focus:ring-blue-400" />
                            </div>

                            <div>
                                <label className="block mb-1">Date</label>
                                <input placeholder="date"
                                    className="w-full p-3 bg-gray-100 rounded-lg border border-gray-300 outline-none focus:ring-1 focus:ring-blue-400" />
                            </div>
                        </div>
                        <div>
                            <label className="block mb-1">Amount</label>
                            <input placeholder="Enter amount"
                                className="w-full p-3 bg-gray-100 rounded-lg border border-gray-300 outline-none focus:ring-1 focus:ring-blue-400" />
                        </div>
                        <div>
                            <label className="block mb-2">Transaction Type</label>
                            <select className="w-full p-3 bg-gray-100 rounded-lg border border-gray-300 outline-none focus:ring-1 focus:ring-blue-400">
                                <option>Select Type</option>
                                <option>Paid Off</option>
                                <option>Partial Payment</option>
                                <option>Interest Only</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2">Interest</label>
                            <select className="w-full p-3 bg-gray-100 rounded-lg border border-gray-300 outline-none focus:ring-1 focus:ring-blue-400">
                                <option>With Interest</option>
                                <option>Without Interest</option>
                            </select>
                        </div>


                        <div>
                            <label className="block mb-1">Payment Method</label>
                            <input placeholder="Account / UPI / Card"
                                className="w-full p-3 bg-gray-100 rounded-lg border-gray-300 outline-none focus:ring-1 focus:ring-blue-400" />
                        </div>

                        <textarea
                            rows={3}
                            placeholder="Enter any notes..."
                            className="w-full p-3 bg-gray-100 rounded-lgborder-gray-300 outline-none focus:ring-1 focus:ring-blue-400"
                        />
                        <div>
                            <label className="block mb-1">Customer Authorization</label>
                            <input placeholder="Enter any notes..."

                                className="w-full p-3 bg-gray-100 rounded-lg border-gray-300 outline-none focus:ring-1 focus:ring-blue-400" />
                        </div>

                        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                            Submit Payment
                        </button>

                    </form>

                </div>
            </div>
        </>
    );
}