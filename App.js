import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const students = [
  { id: 1, name: "Arun", dob: "2002-11-28" },
  { id: 2, name: "Meera", dob: "2001-05-10" },
  { id: 3, name: "Kiran", dob: "2003-11-28" },
];

export default function App() {

  useEffect(() => {
    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    const currentDate = today.getDate();

    students.forEach(student => {
      const dob = new Date(student.dob);
      const dobMonth = dob.getMonth() + 1;
      const dobDate = dob.getDate();

      if (dobMonth === currentMonth && dobDate === currentDate) {
        toast.success(`🎉 Today is ${student.name}'s Birthday!`);
      }
    });

    // ✅ Force a birthday wish NOW (you can change the name)
    toast.success("🎉 Happy Birthday, Arun! 🎂");

  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🎂 Student Birthday Reminder</h2>
      <p>Notifications will appear if today is any student's birthday.</p>

      <Toaster position="top-right" />
    </div>
  );
}
