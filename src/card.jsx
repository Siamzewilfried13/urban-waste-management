import React from "react";

export const Card = ({ children, className }) => (
  <div className={`bg-white shadow-md rounded-lg p-4 ${className}`}>{children}</div>
);

export const CardContent = ({ children }) => <div className="p-2">{children}</div>;

export const CardHeader = ({ children }) => <div className="font-bold text-lg">{children}</div>;

export const CardTitle = ({ children }) => <h2 className="text-xl font-semibold">{children}</h2>;
