import React from 'react';


export const Icon = ({ path, className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d={path} />
    </svg>
);

export const ChartIcon = () => <Icon path="M21.21 15.89A10 10 0 1 1 8 2.83M22 12A10 10 0 0 0 12 2v10z" className="w-5 h-5" />;
export const NewsIcon = () => <Icon path="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2Zm0 0L8 18M14 10h4M14 6h4M14 14h4M8 10h.01M8 6h.01M8 14h.01" className="w-5 h-5" />;
export const InvestIcon = () => <Icon path="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" className="w-5 h-5" />;
export const BriefcaseIcon = () => <Icon path="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" className="w-5 h-5" />;
export const BuildingIcon = () => <Icon path="M12 22V8.4a.5.5 0 0 0-.5-.4H7.5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a.5.5 0 0 0-.5.4V22z" className="w-5 h-5" />;
export const NetworkIcon = () => <Icon path="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8M10 12h10M16 16l4-4-4-4" className="w-5 h-5" />;
export const DownloadIcon = () => <Icon path="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" className="w-4 h-4 mr-2" />;
export const InfoIcon = () => <Icon path="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm0-8c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1s1 .45 1 1v1c0 .55-.45 1-1 1z" className="w-4 h-4 text-gray-400" />;
export const ChartBarIcon = () => <Icon path="M12 20V10M18 20V4M6 20v-4" className="w-5 h-5 text-gray-500 hover:text-gray-800 cursor-pointer" />;
export const PlusCircleIcon = () => <Icon path="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-1 9H8v2h3v3h2v-3h3v-2h-3V8h-2v3z" className="w-5 h-5" />;
export const ArrowRightIcon = () => <Icon path="M5 12h14M12 5l7 7-7 7" className="w-5 h-5" />;
export const ZapIcon = () => <Icon path="M13 2L3 14h9l-1 8 10-12h-9l1-8z" className="w-5 h-5" />;


export const WalletIcon = () => <Icon path="M21 12V7H5a2 2 0 0 1 0-4h14v4" className="w-6 h-6" />;
export const UsersIcon = () => <Icon path="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" className="w-6 h-6" />;
export const DocumentIcon = () => <Icon path="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" className="w-6 h-6" />;
export const CartIcon = () => <Icon path="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18" className="w-6 h-6" />;
