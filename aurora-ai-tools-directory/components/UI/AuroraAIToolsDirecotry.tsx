// @flow
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "react-bootstrap"; // assuming you're using react-bootstrap
const AuroraAIToolsDirectory = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="max-w-5xl mx-auto px-4 pt-12">
      <header>
        <h1 className="text-3xl font-semibold mb-8 text-center">
          Aurora AI Tools Directory
        </h1>
        <Button as={Button} onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </header>

      <div>
        <ul>
          <li><a href="#" className={`${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors`}>
            Privacy Policy
          </a></li>
          <li><a href="#" className={`${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors`}>
            Terms of Service
          </a></li>
          <li><a href="#" className={`${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors`}>
            Affiliate Disclosure
          </a></li>
        </ul>
      </div>

      <div>
        <h4 className={`font-semibold mb-4 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
          Connect
        </h4>
        <ul className="space-y-2">
          <li><a href="#" className={`${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors`}>
            Twitter
          </a></li>
          <li><a href="#" className={`${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors`}>
            LinkedIn
          </a></li>
          <li><a href="#" className={`${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors`}>
            Contact Us
          </a></li>
        </ul>
      </div>

      <div className={`mt-12 text-center text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
        &copy; 2023 Aurora AI Tools Directory. All rights reserved.
      </div>
    </div>
  );
};
