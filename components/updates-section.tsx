"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Calendar, Bell, Loader2 } from "lucide-react";



const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQrzRyPgsiBhpJ8X55hcWiCP3-slMZliXvpa6BZiFQ7Xg4fmt1WDkoe7ZzBelTXjHEEQFZ3X2yKbqjv/pub?gid=0&single=true&output=csv"; 

export default function UpdatesSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const [updates, setUpdates] = useState<any[]>([]);
  const [dueDates, setDueDates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Default Fallback Data (if sheet fails or is empty)
  const defaultUpdates = [
    { title: "GST Amnesty Scheme Announced", date: "August 15, 2023", link: "#", tag: "GST", tagColor: "bg-green-100 text-green-800" },
    { title: "New Income Tax Return Forms", date: "July 28, 2023", link: "#", tag: "Income Tax", tagColor: "bg-blue-100 text-blue-800" },
  ];
  const defaultDueDates = [
    { title: "GSTR-1 Filing Due Date", date: "August 11, 2023", description: "Monthly return", tag: "GSTR-1", tagColor: "bg-red-100 text-red-800" },
    { title: "GSTR-3B Filing Due Date", date: "August 20, 2023", description: "Monthly summary", tag: "GSTR-3B", tagColor: "bg-blue-100 text-blue-800" },
  ];

  // Helper Custom color logic based on tag (optional)
  const getTagColor = (tag: string) => {
    const t = tag?.toLowerCase() || "";
    if (t.includes("gst")) return "bg-green-100 text-green-800";
    if (t.includes("tax")) return "bg-blue-100 text-blue-800";
    if (t.includes("compliance")) return "bg-orange-100 text-orange-800";
    if (t.includes("urgent")) return "bg-red-100 text-red-800";
    return "bg-gray-100 text-gray-800";
  };

  useEffect(() => {
    async function fetchData() {
        if (GOOGLE_SHEET_URL.includes("YOUR_PUBLISHED_CSV_URL_HERE")) {
            // User hasn't set URL yet, use defaults
            setUpdates(defaultUpdates);
            setDueDates(defaultDueDates);
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(GOOGLE_SHEET_URL);
            const text = await response.text();
            
            // Simple CSV Parser (ignores commas inside quotes for simplicity, 
            // but for robust parsing use a library if complex data)
            const rows = text.split("\n").slice(1); // Remove header
            
            const newUpdates: any[] = [];
            const newDueDates: any[] = [];

            rows.forEach(row => {
                // Handle basic CSV splitting
                const cols = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
                if (cols.length < 2) return;

                const category = cols[0]?.replace(/"/g, "").trim();
                const title = cols[1]?.replace(/"/g, "").trim();
                const date = cols[2]?.replace(/"/g, "").trim();
                const link = cols[3]?.replace(/"/g, "").trim() || "#";
                const tag = cols[4]?.replace(/"/g, "").trim() || "Info";
                const description = cols[5]?.replace(/"/g, "").trim();

                const item = {
                    title,
                    date,
                    link,
                    tag,
                    description,
                    tagColor: getTagColor(tag)
                };

                if (category?.toLowerCase() === "update") {
                    newUpdates.push(item);
                } else if (category?.toLowerCase() === "due") {
                    newDueDates.push(item);
                }
            });

            setUpdates(newUpdates.length > 0 ? newUpdates : defaultUpdates);
            setDueDates(newDueDates.length > 0 ? newDueDates : defaultDueDates);
            setLoading(false);

        } catch (err) {
            console.error("Failed to fetch Google Sheet:", err);
            setError(true);
            setUpdates(defaultUpdates);
            setDueDates(defaultDueDates);
            setLoading(false);
        }
    }

    fetchData();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div ref={containerRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Updates & Alerts Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-md p-6 h-full"
          >
            <div className="flex items-center mb-6 justify-between">
                <div className="flex items-center">
                    <Bell className="h-6 w-6 text-[#0EA5E9] mr-2" />
                    <h2 className="text-2xl font-bold font-manrope">Updates & Alerts</h2>
                </div>
                {loading && <Loader2 className="animate-spin h-5 w-5 text-gray-400" />}
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-4"
            >
              {updates.map((update, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                >
                  <div className="flex justify-between items-start mb-1 gap-2">
                    <Link
                      href={update.link}
                      target="_blank"
                      className="text-gray-800 font-medium hover:text-[#0EA5E9] transition-colors duration-200 line-clamp-2"
                    >
                      {update.title}
                    </Link>
                    <span className={`text-xs px-2 py-1 rounded-full whitespace-nowrap shrink-0 ${update.tagColor}`}>
                      {update.tag}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 font-manrope">{update.date}</p>
                </motion.div>
              ))}
              {updates.length === 0 && !loading && <p className="text-gray-500 italic">No updates available.</p>}
            </motion.div>
          </motion.div>

          {/* Due Dates Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-md p-6 h-full"
          >
            <div className="flex items-center mb-6 justify-between">
                <div className="flex items-center">
                    <Calendar className="h-6 w-6 text-[#0EA5E9] mr-2" />
                    <h2 className="text-2xl font-bold font-manrope">Due Dates</h2>
                </div>
                {loading && <Loader2 className="animate-spin h-5 w-5 text-gray-400" />}
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-4"
            >
              {dueDates.map((dueDate, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(249, 250, 251, 0.5)" }}
                  className="border-b border-gray-100 pb-4 last:border-0 last:pb-0 rounded-md p-2 transition-all duration-200"
                >
                  <div className="flex justify-between items-start mb-1 gap-2">
                    <div>
                      <h3 className="text-gray-800 font-medium line-clamp-2">{dueDate.title}</h3>
                      {dueDate.description && (
                          <p className="text-sm text-gray-500 mt-1 line-clamp-2">{dueDate.description}</p>
                      )}
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full whitespace-nowrap shrink-0 ${dueDate.tagColor}`}>
                      {dueDate.tag}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-red-500 mt-2 font-manrope">
                    Due: {dueDate.date}
                  </p>
                </motion.div>
              ))}
               {dueDates.length === 0 && !loading && <p className="text-gray-500 italic">No due dates available.</p>}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
