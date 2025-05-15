import React from 'react';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <span className="text-2xl font-bold">
        <span className="text-primary">ECO</span>
        <span className="text-accent">VEST</span>
      </span>
    </Link>
  );
};