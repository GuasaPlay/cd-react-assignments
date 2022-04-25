export const TabHeader = ({ tabs, onTabClick, activeTab }) => {
  return (
    <div className="flex justify-center border-b-2 border-slate-500">
      <nav className="p-3">
        <ul className="flex space-x-4">
          {tabs.map((tab, index) => (
            <li key={index}>
              <button
                onClick={() => onTabClick(tab)}
                className={`duration-400 rounded-md py-2 px-4 text-slate-700 transition-colors ${
                  tab === activeTab && "bg-sky-200"
                }`}
              >
                {tab.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
