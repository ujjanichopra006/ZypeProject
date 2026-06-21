"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BsRobot } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

type Message = { type: "text"; sender: "user" | "bot"; text: string };

export default function FloatingChat() {
  const router = useRouter();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(0);

  const [messages, setMessages] = useState<Message[]>([
    { type: "text", sender: "bot", text: "👋 Welcome to KeshvaCredit.\n\nWhat's your name?" },
  ]);

  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", dob: "", pan: "", pincode: "",
    employment_type: "", income: "", loantype: "", loan_amount: "", city: "", state: "",
  });

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addBotMessage = (text: string) => {
    setTimeout(() => {
      setMessages((prev) => [...prev, { type: "text", sender: "bot", text }]);
    }, 400);
  };

  const submitUserData = async (data: any) => {
    try {
      const res = await fetch("https://keshvacredit.onrender.com/api/createuser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      return await res.json();
    } catch (err) {
      console.error("API Error:", err);
      return null;
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const value = input.trim();

    setMessages((prev) => [...prev, { type: "text", sender: "user", text: value }]);

    if (step === 0) { setFormData((p) => ({ ...p, name: value })); addBotMessage("📱 Enter mobile number"); setStep(1); } 
    else if (step === 1) { setFormData((p) => ({ ...p, phone: value })); addBotMessage("📧 Enter email"); setStep(2); } 
    else if (step === 2) { setFormData((p) => ({ ...p, email: value })); addBotMessage("🎂 Enter DOB"); setStep(3); } 
    else if (step === 3) { setFormData((p) => ({ ...p, dob: value })); addBotMessage("🆔 Enter PAN"); setStep(4); } 
    else if (step === 4) { setFormData((p) => ({ ...p, pan: value })); addBotMessage("📍 Enter Pincode"); setStep(5); } 
    else if (step === 5) { setFormData((p) => ({ ...p, pincode: value })); addBotMessage("💼 Employment Type"); setStep(6); } 
    else if (step === 6) { setFormData((p) => ({ ...p, employment_type: value })); addBotMessage("💰 Monthly Income"); setStep(7); } 
    else if (step === 7) { setFormData((p) => ({ ...p, income: value })); addBotMessage("🏦 Select Loan Type"); setStep(8); } 
    
    // ✅ REDIRECT LOGIC FOR LOAN TYPES
    else if (step === 8) {
      const selectedLoan = value.trim().toLowerCase();
      setFormData((p) => ({ ...p, loantype: value.trim() }));

      if (selectedLoan === "personal loan" && localStorage.getItem("personalLoanSubmitted") === "true") {
        addBotMessage("✅ We see you've already applied for a Personal Loan!\n\nRedirecting you to the matching lenders page...");
        setStep(12); setInput("");
        setTimeout(() => router.push("/personalloanlender"), 2000);
        return;
      } 
      
      // ✅ NEW: Business Loan Redirect Check
      else if (selectedLoan === "business loan" && localStorage.getItem("businessLoanSubmitted") === "true") {
        addBotMessage("✅ We see you've already applied for a Business Loan!\n\nRedirecting you to the matching lenders page...");
        setStep(12); setInput("");
        setTimeout(() => router.push("/businessloanlender"), 2000);
        return;
      }

      addBotMessage("💵 Enter Loan Amount");
      setStep(9);
    } 
    else if (step === 9) { setFormData((p) => ({ ...p, loan_amount: value })); addBotMessage("🏙️ Enter City"); setStep(10); } 
    else if (step === 10) { setFormData((p) => ({ ...p, city: value })); addBotMessage("🗺️ Enter State"); setStep(11); } 
    
    // ✅ FINAL SUBMISSION & BOOLEAN FIX
    else if (step === 11) {
      const updated = { ...formData, state: value };
      setFormData(updated);
      addBotMessage("⏳ Submitting your data...");

      const response = await submitUserData(updated);

      if (response) {
        // ✅ FIX: Set the correct boolean based on the loan type selected
        const selectedLoan = updated.loantype?.trim().toLowerCase();
        if (selectedLoan === "personal loan") localStorage.setItem("personalLoanSubmitted", "true");
        else if (selectedLoan === "business loan") localStorage.setItem("businessLoanSubmitted", "true");
        else if (selectedLoan === "home loan") localStorage.setItem("homeLoanSubmitted", "true");
        else if (selectedLoan === "gold loan") localStorage.setItem("goldLoanSubmitted", "true");

        setMessages((prev) => [
          ...prev,
          { type: "text", sender: "bot", text: `✅ Thank You ${updated.name}\n\n📩 Your form has been submitted successfully.\n\nClick below to view matching lenders.` },
        ]);
      } else {
        addBotMessage("❌ Submission failed. Try again.");
      }
      setStep(12);
    }

    setInput("");
  };

  const handleViewLenders = () => {
    const loan = formData.loantype?.trim().toLowerCase();
    if (loan === "personal loan") router.push("/personalloanlender");
    else if (loan === "business loan") router.push("/businessloanlender");
    else if (loan === "home loan") router.push("/homeloanlender");
    else if (loan === "gold loan") router.push("/goldloanlender");
    else alert("Please select loan type first");
  };

  const loanTypes = ["Personal Loan", "Business Loan", "Home Loan", "Gold Loan"];

  return (
    <>
      <div className="fixed bottom-6 right-6 flex gap-4 z-50">
        <a href="https://wa.me/918901229195" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="w-14 h-14 bg-green-500 p-3 rounded-full text-white" />
        </a>
        <button onClick={() => setOpen(!open)} className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center">
          <BsRobot className="text-white text-2xl" />
        </button>
      </div>

      {open && (
        <div className="fixed bottom-24 right-6 w-[380px] bg-white rounded-2xl shadow-xl z-50">
          <div className="bg-blue-900 text-white flex justify-between items-center p-3 rounded-t-2xl">
            <span className="font-semibold">KeshvaCredit Assistant</span>
            <IoClose onClick={() => setOpen(false)} className="cursor-pointer text-xl" />
          </div>

          <div className="h-96 overflow-y-auto p-3 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`p-2 my-1 rounded-lg max-w-[80%] whitespace-pre-wrap ${m.sender === "user" ? "bg-blue-600 text-white ml-auto text-right" : "bg-gray-200 text-black"}`}>
                {m.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {step === 8 && (
            <div className="p-2 flex gap-2 flex-wrap border-t bg-white">
              {loanTypes.map((l) => (
                <button key={l} onClick={() => { setInput(l); setTimeout(() => handleSend(), 50); }} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition">
                  {l}
                </button>
              ))}
            </div>
          )}

          {step !== 12 && (
            <div className="flex border-t">
              <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSend()} className="flex-1 p-3 outline-none" placeholder="Type your answer..." />
              <button onClick={handleSend} className="bg-blue-600 text-white px-4 font-semibold hover:bg-blue-700 transition">Send</button>
            </div>
          )}

          {step === 12 && (
            <div className="p-3 border-t bg-white">
              <button onClick={handleViewLenders} className="w-full bg-green-600 text-white p-3 rounded-lg font-bold hover:bg-green-700 transition">
                View Matching Lenders
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}