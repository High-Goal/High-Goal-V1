
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-2 text-xs font-medium text-gray-500 mb-8 overflow-x-auto whitespace-nowrap py-2">
      <Link to="/" className="hover:text-yellow-500 flex items-center transition-colors">
        <Home className="w-3.5 h-3.5 mr-1" />
        首页
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-3 h-3 text-gray-700 flex-shrink-0" />
          {item.path ? (
            <Link to={item.path} className="hover:text-yellow-500 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-400">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
