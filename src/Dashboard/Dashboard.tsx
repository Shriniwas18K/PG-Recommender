import { useState, useEffect } from 'react';
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import PropertyForm from "./Postproperty/PropertyForm";
import CurrentProperties from "./CurrentProperties/CurrentProperties";
import About from "./About/About";
export default function Dashboard({ token, phone, username }: { token: string, phone: string, username: string }) {
    const [selectedComponent, setSelectedComponent] = useState<string>('PropertyForm');
    const [content,setContent]=useState(<PropertyForm token={token} phone={phone} username={username}/>);
    // Effect to handle navigation changes
    useEffect(() => {
        // Render component based on selected component
        switch (selectedComponent) {
            case 'PropertyForm':
                setContent(<PropertyForm token={token} phone={phone} username={username} />);
                break;
            case 'CurrentProperties':
                setContent(<CurrentProperties token={token} phone={phone} username={username}/>);
                break;
            case 'About':
                setContent(<About/>)
                break;
        }
    }, [selectedComponent]); // Dependency array - re-run effect when selectedComponent changes

    // Function to handle navigation from the header
    const handleNavigation = (componentName: string) => {
        setSelectedComponent(componentName);
    }

    return (
        <>
            <div className='fixed w-full z-10'>
                <Header sendDataToParent={handleNavigation} />
            </div>
            {/* Render the content */}
            {content}
            <Footer />
        </>
    );
}
